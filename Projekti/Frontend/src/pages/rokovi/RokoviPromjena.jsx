import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import IspitniRokService from "../../services/IspitniRokService";
import { RouteNames } from "../../constants";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import KolegijService from "../../services/KolegijService";
import moment from "moment";
import StudentService from "../../services/StudentService";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import useLoading from "../../hooks/useLoading";
import useError from '../../hooks/useError';


export default function RokoviPromjena() {

    const navigate = useNavigate();
    const { showLoading, hideLoading } = useLoading();
    const routeParams = useParams();
    const { prikaziError } = useError();

    const [kolegiji, setKolegiji] = useState([]);
    const [kolegijSifra, setKolegijSifra] = useState(0);
    const [pristupnici, setPristupnici] = useState([]);
    const [pronadeniPristupnici, setPronadeniPristupnici] = useState([]);
    const [rok, setRok] = useState({});
    const typeAheadRef = useRef(null);

    async function dohvatiKolegije() {
        const odgovor = await KolegijService.get();
        setKolegiji(odgovor.poruka);
    }

    async function dohvatiRok() {
        const odgovor = await IspitniRokService.getBySifra(routeParams.sifra);
        if (odgovor.greska) {
            prikaziError(odgovor.poruka);
            return;
        }
        let rok = odgovor.poruka;
        setRok(rok);
        setKolegijSifra(rok.kolegijSifra);
    }

    async function dohvatiPristupnike() {
        const odgovor = await IspitniRokService.getPristupnici(routeParams.sifra);
        if (odgovor.greska) {
            prikaziError(odgovor.poruka);
            return;
        }
        setPristupnici(odgovor.poruka);
    }

    async function traziPristupnika(uvjet) {
        const odgovor = await StudentService.traziStudenta(uvjet);
        if (odgovor.greska) {
            prikaziError(odgovor.poruka);
            return;
        }
        setPronadeniPristupnici(odgovor.poruka);
    }

    async function dodajPristupnika(e) {
        showLoading();
        const odgovor = await IspitniRokService.dodajPristupnika(routeParams.sifra, e[0].sifra);
        hideLoading();
        if (odgovor.greska) {
            prikaziError(odgovor.poruka);
            return;
        }
        await dohvatiPristupnike();
        typeAheadRef.current.clear();
    }

    async function obrisiPristupnika(student) {
        showLoading();
        const odgovor = await IspitniRokService.obrisiPristupnika(routeParams.sifra, student);
        hideLoading();
        if (odgovor.greska) {
            prikaziError(odgovor.poruka);
            return;
        }
        await dohvatiPristupnike();
    }

    async function dohvatiInicijalnePodatke() {
        showLoading();
        await dohvatiKolegije();
        await dohvatiRok();
        await dohvatiPristupnike();
        hideLoading();
    }

    useEffect(()=> {
        dohvatiInicijalnePodatke();
    }, []);


    async function promjena(e) {
        showLoading();
        const odgovor = await IspitniRokService.promjena(routeParams.sifra, e);
        hideLoading();
        if (odgovor.greska) {
            prikaziError(odgovor.poruka);
            return;
        }
        navigate(RouteNames.ISPITNI_ROK_PREGLED);
    }

    function obradiSubmit(e) {
        e.preventDefault();

        const podatci = new FormData(e.target);
        promjena({
            kolegijSifra: parseInt(kolegijSifra),
            vrstaIspita: podatci.get('vrstaIspita'),
            datum: moment.utc(podatci.get('datum'))
        });
    }


    return(
    <>
    <hr />
    <Row>
      <Col key='1' sm={12} lg={6} md={6}>
        <Form className="podebljano" onSubmit={obradiSubmit}>
        <Form.Group className='mb-3' controlId='kolegij'>
            <Form.Label>Kolegij</Form.Label>
            <Form.Select value={kolegijSifra} onChange={(e)=>{setKolegijSifra(e.target.value)}}>
                {kolegiji && kolegiji.map((k, index)=>(
                    <option key={index} value={k.sifra}>
                        {k.naziv}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
        <hr />
        <Form.Group controlId="vrstaIspita">
            <Form.Label>Vrsta ispita</Form.Label>
            <Form.Control type="text" name="vrstaIspita" required defaultValue={rok.vrstaIspita} />
        </Form.Group>
        <hr />

        <Form.Group controlId="datum">
            <Form.Label>Vrijeme</Form.Label>
            <Form.Control type="datetime-local" name="datum" required defaultValue={rok.datum} />
        </Form.Group>

        <hr />

        <Row>
            <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.ISPITNI_ROK_PREGLED} className="btn btn-danger siroko crta">Odustani</Link>
            </Col>
            <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="primary" type="submit" className="siroko crta">Promijeni ispitni rok</Button>
            </Col>
        </Row>
        </Form>
     </Col>
     <Col key='2' sm={12} lg={6} md={6}>
        <div style={{overflow: 'auto', maxHeight: '400px'}}>
            <Form.Group className='mb-3 podebljano' controlId='uvjet'>
                <Form.Label>Traži pristupnika</Form.Label>
                <AsyncTypeahead
            className='autocomplete'
            id='uvjet'
            emptyLabel='Nema rezultata'
            searchText='Tražim...'
            labelKey={(student) => `${student.prezime} ${student.ime}`}
            minLength={3}
            options={pronadeniPristupnici}
            onSearch={traziPristupnika}
            placeholder='dio imena ili prezimena'
            renderMenuItemChildren={(student) => (
              <>
                <span>
                   {student.prezime} {student.ime}
                </span>
              </>
            )}
            onChange={dodajPristupnika}
            ref={typeAheadRef}
            />
            </Form.Group>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Pristupnici na ispitnom roku</th>
                        <th>Akcija</th>
                    </tr>
                </thead>
                <tbody>
                    {pristupnici && pristupnici.map((student, index)=>(
                        <tr key={index}>
                            <td>{student.ime} {student.prezime}</td>
                            <td>
                                <Button variant='danger' className='crta' onClick={()=>
                                obrisiPristupnika(student.sifra)}>
                                    <FaTrash />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
     </Col>
     </Row>
    </>);
}
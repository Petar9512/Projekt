import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import IspitniRokService from "../../services/IspitniRokService";
import { RouteNames } from "../../constants";
import { Button, Col, Form, Row } from "react-bootstrap";
import KolegijService from "../../services/KolegijService";
import moment from "moment";
import StudentService from "../../services/StudentService";


export default function RokoviPromjena() {

    const navigate = useNavigate();
    const routeParams = useParams();

    const [kolegiji, setKolegiji] = useState([]);
    const [kolegijSifra, setKolegijSifra] = useState(0);
    const [pristupnici, setPristupnici] = useState([]);
    const [pronadeniPristupnici, setPronadeniPristupnici] = useState([]);
    const [rok, setRok] = useState({});

    async function dohvatiKolegije() {
        const odgovor = await KolegijService.get();
        setKolegiji(odgovor.poruka);
    }

    async function dohvatiRok() {
        const odgovor = await IspitniRokService.getBySifra(routeParams.sifra);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        let rok = odgovor.poruka;
        setRok(rok);
        setKolegijSifra(rok.kolegijSifra);
    }

    async function dohvatiPristupnike() {
        const odgovor = await IspitniRokService.getPristupnici(routeParams.sifra);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        setPristupnici(odgovor.poruka);
    }

    async function traziPristupnika(uvjet) {
        const odgovor = await StudentService.TraziStudenta(uvjet);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        setPronadeniPristupnici(odgovor.poruka);
    }

    async function dodajPristupnika(e) {
        const odgovor = await IspitniRokService.dodajPristupnika(routeParams.sifra, e[0].sifra);
        if (odgovor.greska) {
            alert(odgovor.poruka);
            return;
        }
        await dohvatiPristupnike();
    }

    async function obrisiPristupnika(student) {
        const odgovor = await IspitniRokService.obrisiPristupnika(routeParams.sifra, student);
        if (odgovor.greska) {
            alert(odgovor.poruka);
            return;
        }
        await dohvatiPristupnike();
    }

    async function dohvatiInicijalnePodatke() {
        await dohvatiKolegije();
        await dohvatiRok();
        await dohvatiPristupnike();
    }

    useEffect(()=> {
        dohvatiInicijalnePodatke();
    }, []);


    async function promjena(e) {
        const odgovor = await IspitniRokService.promjena(routeParams.sifra, e);
        if (odgovor.greska) {
            alert (odgovor.poruka);
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
    <Form className="podebljano" onSubmit={obradiSubmit}>
        <Form.Group controlId='kolegij'>
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
    </>)
}
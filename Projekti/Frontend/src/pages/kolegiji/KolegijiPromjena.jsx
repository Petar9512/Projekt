import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import KolegijService from "../../services/KolegijService";
import { RouteNames } from "../../constants";
import { Button, Col, Form, Row } from "react-bootstrap";
import SmjerService from "../../services/SmjerService";


export default function KolegijiPromjena() {

    const navigate = useNavigate();
    const routeParams = useParams();

    const [smjerovi, setSmjerovi] = useState([]);
    const [smjerSifra, setSmjerSifra] = useState(0);
    const [kolegij, setKolegij] = useState({});

    async function dohvatiSmjerove() {
        const odgovor = await SmjerService.get();
        setSmjerovi(odgovor.poruka);
    }

    async function dohvatiKolegij() {
        const odgovor = await KolegijService.getBySifra(routeParams.sifra);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        let kolegij = odgovor.poruka;
        setKolegij(kolegij);
        setSmjerSifra(kolegij.smjerSifra);
    }

    async function dohvatiInicijalnePodatke() {
        await dohvatiSmjerove();
        await dohvatiKolegij();
    }

    useEffect(()=> {
        dohvatiInicijalnePodatke();
    }, []);


    async function promjena(e) {
        const odgovor = await KolegijService.promjena(routeParams.sifra, e);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        navigate(RouteNames.KOLEGIJ_PREGLED);
    }

    function obradiSubmit(e) {
        e.preventDefault();

        const podatci = new FormData(e.target);
        promjena({
            smjerSifra: parseInt(smjerSifra),
            naziv: podatci.get('naziv'),
            predavac: podatci.get('predavac'),
            obavezni: podatci.get('obavezni') == 'on' ? true : false
        });
    }


    return(
    <>
    <Form onSubmit={obradiSubmit}>
        <Form.Group controlId='smjer'>
            <Form.Label>Smjer</Form.Label>
            <Form.Select value={smjerSifra} onChange={(e)=>{setSmjerSifra(e.target.value)}}>
                {smjerovi && smjerovi.map((s, index)=>(
                    <option key={index} value={s.sifra}>
                        {s.naziv}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
        <Form.Group controlId="naziv">
            <Form.Label>Naziv</Form.Label>
            <Form.Control type="text" name="naziv" required defaultValue={kolegij.naziv} />
        </Form.Group>

        <Form.Group controlId="predavac">
            <Form.Label>Predavač</Form.Label>
            <Form.Control type="text" name="predavac" required defaultValue={kolegij.predavac} />
        </Form.Group>

        <Form.Group controlId="obavezni">
            <Form.Check label="Kolegij je obavezan?" name="obavezni" defaultChecked={kolegij.obavezni} />
        </Form.Group>

        <hr />

        <Row>
            <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.KOLEGIJ_PREGLED} className="btn btn-danger siroko">Odustani</Link>
            </Col>
            <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="primary" type="submit" className="siroko">Promijeni kolegij</Button>
            </Col>
        </Row>
    </Form>
    </>)
}
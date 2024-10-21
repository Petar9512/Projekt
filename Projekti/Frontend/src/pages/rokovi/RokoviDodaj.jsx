import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import { Button, Col, Form, Row } from "react-bootstrap";
import KolegijService from '../../services/KolegijService';
import IspitniRokService from "../../services/IspitniRokService";
import { useEffect, useState } from "react";
import moment from "moment";
import useLoading from "../../hooks/useLoading";

export default function RokoviDodaj() {

    const navigate = useNavigate();
    const { showLoading, hideLoading } = useLoading();
    const [kolegiji, setKolegiji] = useState([]);
    const [kolegijSifra, setKolegijSifra] = useState(0);

    async function dohvatiKolegije() {
        showLoading();
        const odgovor = await KolegijService.get();
        hideLoading();
        setKolegiji(odgovor.poruka);
        setKolegijSifra(odgovor.poruka[0].sifra);
    }

    useEffect(()=>{
        dohvatiKolegije();
    }, []);


    async function dodaj(e) {
        showLoading();
        const odgovor = await IspitniRokService.dodaj(e);
        hideLoading();
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        navigate(RouteNames.ISPITNI_ROK_PREGLED);
        }

        function obradiSubmit(e) {
            e.preventDefault();

            let podatci = new FormData(e.target);
            dodaj({
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
                <Form.Select onChange={(e)=>{setKolegijSifra(e.target.value)}}>
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
                <Form.Control type="text" name="vrstaIspita" required />
            </Form.Group>
            <hr />

            <Form.Group controlId="datum">
                <Form.Label>Vrijeme</Form.Label>
                <Form.Control type="datetime-local" name="datum" required />
            </Form.Group>

            <hr />

            <Row>
                <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
                    <Link to={RouteNames.ISPITNI_ROK_PREGLED} className="btn btn-danger siroko crta">Odustani</Link>
                </Col>
                <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
                    <Button variant="primary" type="submit" className="siroko crta">Dodaj novi ispitni rok</Button>
                </Col>
            </Row>
        </Form>
        </>)
        
    }

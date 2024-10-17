import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import { Button, Col, Form, Row } from "react-bootstrap";
import SmjerService from '../../services/SmjerService';
import KolegijService from "../../services/KolegijService";
import { useEffect, useState } from "react";

export default function KolegijiDodaj() {

    const navigate = useNavigate();
    const [smjerovi, setSmjerovi] = useState([]);
    const [smjerSifra, setSmjerSifra] = useState(0);

    async function dohvatiSmjerove() {
        const odgovor = await SmjerService.get();
        setSmjerovi(odgovor.poruka);
        setSmjerSifra(odgovor.poruka[0].sifra);
    }

    useEffect(()=>{
        dohvatiSmjerove();
    }, []);


    async function dodaj(e) {
        const odgovor = await KolegijService.dodaj(e);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        navigate(RouteNames.KOLEGIJ_PREGLED);
        }

        function obradiSubmit(e) {
            e.preventDefault();

            let podatci = new FormData(e.target);
            dodaj({
                smjerSifra: parseInt(smjerSifra),
                naziv: podatci.get('naziv'),
                predavac: podatci.get('predavac'),
                obavezni: podatci.get('obavezni') == 'on' ? true : false
            });

        }

        return(
        <>
        <hr />
        <Form onSubmit={obradiSubmit}>
            <Form.Group controlId='smjer'>
                <Form.Label className="podebljano">Smjer</Form.Label>
                <Form.Select onChange={(e)=>{setSmjerSifra(e.target.value)}}>
                    {smjerovi && smjerovi.map((s, index)=>(
                        <option key={index} value={s.sifra}>
                            {s.naziv}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <hr />
            <Form.Group controlId="naziv">
                <Form.Label className="podebljano">Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required />
            </Form.Group>
            <hr />

            <Form.Group controlId="predavac">
                <Form.Label className="podebljano">Predavač</Form.Label>
                <Form.Control type="text" name="predavac" required />
            </Form.Group>
            <hr />

            <Form.Group controlId="obavezni">
                <Form.Check label="Kolegij je obavezan?" name="obavezni" />
            </Form.Group>

            <hr />

            <Row>
                <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
                    <Link to={RouteNames.KOLEGIJ_PREGLED} className="btn btn-danger siroko crta">Odustani</Link>
                </Col>
                <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
                    <Button variant="primary" type="submit" className="siroko crta">Dodaj novi kolegij</Button>
                </Col>
            </Row>
        </Form>
        </>)
        
    }

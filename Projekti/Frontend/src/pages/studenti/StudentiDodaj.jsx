import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import { Button, Col, Form, Row } from "react-bootstrap";
import SmjerService from '../../services/SmjerService';
import StudentService from "../../services/StudentService";
import { useEffect, useState } from "react";
import useLoading from "../../hooks/useLoading";
import useError from '../../hooks/useError';


export default function StudentiDodaj() {

    const navigate = useNavigate();
    const { showLoading, hideLoading } = useLoading();
    const [smjerovi, setSmjerovi] = useState([]);
    const [smjerSifra, setSmjerSifra] = useState(0);
    const { prikaziError } = useError();

    async function dohvatiSmjerove() {
        showLoading();
        const odgovor = await SmjerService.get();
        hideLoading();
        setSmjerovi(odgovor.poruka);
        setSmjerSifra(odgovor.poruka[0].sifra);
    }

    useEffect(()=>{
        dohvatiSmjerove();
    }, []);


    async function dodaj(e) {
        showLoading();
        const odgovor = await StudentService.dodaj(e);
        hideLoading();
        if (odgovor.greska) {
            prikaziError(odgovor.poruka);
            return;
        }
        navigate(RouteNames.STUDENT_PREGLED);
        }

        function obradiSubmit(e) {
            e.preventDefault();

            let podatci = new FormData(e.target);
            dodaj({
                smjerSifra: parseInt(smjerSifra),
                ime: podatci.get('ime'),
                prezime: podatci.get('prezime'),
                oib: podatci.get('oib')
            });
        }

        return(
        <>
        <hr />
        <Form className="podebljano" onSubmit={obradiSubmit}>
            <Form.Group controlId='smjer'>
                <Form.Label>Smjer</Form.Label>
                <Form.Select onChange={(e)=>{setSmjerSifra(e.target.value)}}>
                    {smjerovi && smjerovi.map((s, index)=>(
                        <option key={index} value={s.sifra}>
                            {s.naziv}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <hr />
            <Form.Group controlId="ime">
                <Form.Label>Ime</Form.Label>
                <Form.Control type="text" name="ime" required />
            </Form.Group>
            <hr />

            <Form.Group controlId="prezime">
                <Form.Label>Prezime</Form.Label>
                <Form.Control type="text" name="prezime" required />
            </Form.Group>
            <hr />

            <Form.Group controlId="oib">
                <Form.Label>Oib</Form.Label>
                <Form.Control type="text" name="oib" />
            </Form.Group>

            <hr />

            <Row>
                <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
                    <Link to={RouteNames.STUDENT_PREGLED} className="btn btn-danger siroko crta">Odustani</Link>
                </Col>
                <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
                    <Button variant="primary" type="submit" className="siroko crta">Dodaj novog studenta</Button>
                </Col>
            </Row>
        </Form>
        </>)  
    }

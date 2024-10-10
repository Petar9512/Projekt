import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StudentService from "../../services/StudentService";
import { RouteNames } from "../../constants";
import { Button, Col, Form, Row } from "react-bootstrap";


export default function StudentiPromjena() {

    const navigate = useNavigate();
    const routeParams = useParams();
    const[student, setStudent] = useState({});

    async function dohvatiStudenta() {
        const odgovor = await StudentService.getBySifra(routeParams.sifra);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        setStudent(odgovor.poruka);
    }

    useEffect(()=> {
        dohvatiPolaznika();
    }, []);


    async function promjena(e) {
        const odgovor = await StudentService.promjena(routeParams.sifra, e);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        navigate(RouteNames.STUDENT_PREGLED);
    }

    function obradiSubmit(e) {
        e.preventDefault();

        const podatci = new FormData(e.target);
        promjena({
            ime: podatci.get('ime'),
            prezime: podatci.get('prezime'),
            oib: podatci.get('oib')
        });
    }


    return(
    <>
    <Form onSubmit={obradiSubmit}>
        <Form.Group controlId="ime">
            <Form.Label>Ime</Form.Label>
            <Form.Control type="text" name="ime" required defaultValue={student.ime} />
        </Form.Group>

        <Form.Group controlId="prezime">
            <Form.Label>Prezime</Form.Label>
            <Form.Control type="text" name="prezime" required defaultValue={student.prezime} />
        </Form.Group>

        <Form.Group controlId="oib">
            <Form.Label>Oib</Form.Label>
            <Form.Control type="text" name="oib" defaultValue={student.oib} />
        </Form.Group>

        <hr />

        <Row>
            <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.STUDENT_PREGLED} className="btn btn-danger siroko">Odustani</Link>
            </Col>
            <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="primary" type="submit" className="siroko">Promijeni studenta</Button>
            </Col>
        </Row>
    </Form>
    </>)
}
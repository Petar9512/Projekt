import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import { Button, Col, Form, Row } from "react-bootstrap";
import StudentService from "../../services/StudentService";


export default function StudentiDodaj() {

    const navigate = useNavigate();

    async function dodaj(e) {
        const odgovor = await StudentService.dodaj(e);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        navigate(RouteNames.STUDENT_PREGLED);
        }

        function obradiSubmit(e) {
            e.preventDefault();

            const podatci = new FormData(e.target);
            dodaj({
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
                <Form.Control type="text" name="ime" required />
            </Form.Group>

            <Form.Group controlId="prezime">
                <Form.Label>Prezime</Form.Label>
                <Form.Control type="text" name="prezime" required />
            </Form.Group>

            <Form.Group controlId="oib">
                <Form.Label>Oib</Form.Label>
                <Form.Control type="text" name="oib" />
            </Form.Group>

            <hr />

            <Row>
                <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
                    <Link to={RouteNames.STUDENT_PREGLED} className="btn btn-danger siroko">Odustani</Link>
                </Col>
                <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
                    <Button variant="primary" type="submit" className="siroko">Dodaj novog studenta</Button>
                </Col>
            </Row>
        </Form>
        </>)
        
    }

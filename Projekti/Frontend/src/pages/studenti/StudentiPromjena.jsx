import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StudentService from "../../services/StudentService";
import { RouteNames } from "../../constants";
import { Button, Col, Form, Row } from "react-bootstrap";
import SmjerService from "../../services/SmjerService";


export default function StudentiPromjena() {

    const navigate = useNavigate();
    const routeParams = useParams();

    const [smjerovi, setSmjerovi] = useState([]);
    const [smjerSifra, setSmjerSifra] = useState(0);
    const [student, setStudent] = useState({});

    async function dohvatiSmjerove() {
        const odgovor = await SmjerService.get();
        setSmjerovi(odgovor.poruka);
    }

    async function dohvatiStudenta() {
        const odgovor = await StudentService.getBySifra(routeParams.sifra);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        let student = odgovor.poruka;
        setStudent(student);
        setSmjerSifra(student.smjerSifra);
    }

    async function dohvatiInicijalnePodatke() {
        await dohvatiSmjerove();
        await dohvatiStudenta();
    }

    useEffect(()=> {
        dohvatiInicijalnePodatke();
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
            smjerSifra: parseInt(smjerSifra),
            ime: podatci.get('ime'),
            prezime: podatci.get('prezime'),
            oib: podatci.get('oib')
        });
    }


    return(
    <>
    <hr />
    <Form onSubmit={obradiSubmit}>
        <Form.Group controlId='smjer'>
            <Form.Label className="podebljano">Smjer</Form.Label>
            <Form.Select value={smjerSifra} onChange={(e)=>{setSmjerSifra(e.target.value)}}>
                {smjerovi && smjerovi.map((s, index)=>(
                    <option key={index} value={s.sifra}>
                        {s.naziv}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
        <hr />
        <Form.Group controlId="ime">
            <Form.Label className="podebljano">Ime</Form.Label>
            <Form.Control type="text" name="ime" required defaultValue={student.ime} />
        </Form.Group>
        <hr />

        <Form.Group controlId="prezime">
            <Form.Label className="podebljano">Prezime</Form.Label>
            <Form.Control type="text" name="prezime" required defaultValue={student.prezime} />
        </Form.Group>
        <hr />

        <Form.Group controlId="oib">
            <Form.Label className="podebljano">Oib</Form.Label>
            <Form.Control type="text" name="oib" defaultValue={student.oib} />
        </Form.Group>

        <hr />

        <Row>
            <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.STUDENT_PREGLED} className="btn btn-danger siroko crta">Odustani</Link>
            </Col>
            <Col xs={6} sm={6} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="primary" type="submit" className="siroko crta">Promijeni studenta</Button>
            </Col>
        </Row>
    </Form>
    </>)
}
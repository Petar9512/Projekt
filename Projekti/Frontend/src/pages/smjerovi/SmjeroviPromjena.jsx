import SmjerService from "../../services/SmjerService"
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import { useEffect, useState } from "react";
import useLoading from "../../hooks/useLoading";


export default function SmjeroviPromjena() {

    const[smjer, setSmjer] = useState({});
    const navigate = useNavigate();
    const { showLoading, hideLoading } = useLoading();
    const routeParams = useParams();

    async function dohvatiSmjer() {
        showLoading();
        const odgovor = await SmjerService.getBySifra(routeParams.sifra)
        hideLoading();
        if (odgovor.greska) {
            alert (odgovor.poruka)
            return;
        }
        let s = odgovor.poruka;
        setSmjer(s);
    }

    useEffect(()=>{
        dohvatiSmjer();
     },[])

     async function promjena(smjer) {
        showLoading();
        const odgovor = await SmjerService.promjena(routeParams.sifra, smjer)
        hideLoading();
        if (odgovor.greska) {
            alert(odgovor.poruka)
            return;
        }
        navigate(RouteNames.SMJER_PREGLED)
     }

    function obradiSubmit(e) {
        e.preventDefault();
        let podatci = new FormData(e.target)

        promjena ({
            naziv: podatci.get('naziv'),
            brojStudenata: parseInt(podatci.get('brojStudenata'))
        })
    }

    return(
        <>
        <hr />
        <Form className="podebljano" onSubmit={obradiSubmit}>
            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required defaultValue={smjer.naziv} />
            </Form.Group>
            <hr />

            <Form.Group controlId="brojStudenata">
                <Form.Label>Broj mjesta</Form.Label>
                <Form.Control type="number" min={20} max={80} name="brojStudenata" required defaultValue={smjer.brojStudenata} />
            </Form.Group>
            <hr />

        <Row className="random">
            <Col xs={6} sm={12} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.SMJER_PREGLED} className="btn btn-danger siroko crta">Odustani</Link>
            </Col>
            <Col xs={6} sm={12} md={9} lg={6} xl={6} xxl={6}>
            <Button type="submit" variant="success" className="siroko crta">Promijeni smjer</Button>
            </Col>
        </Row>
        </Form>
        </>
    )
}
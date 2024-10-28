import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StudentService from "../../services/StudentService";
import { Button, Card, Col, Form, Pagination, Row } from "react-bootstrap";
import { APP_URL, RouteNames } from "../../constants";
import { IoIosAdd } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa";
import defaultuser from '../../assets/defaultuser.jpg';
import useLoading from "../../hooks/useLoading";
import useError from '../../hooks/useError';


export default function StudentiPregled(){

    const [studenti, setStudenti] = useState();
    const [stranica, setStranica] = useState(1);
    const [uvjet, setUvjet] = useState('');
    const { showLoading, hideLoading } = useLoading();
    const { prikaziError } = useError();

    async function dohvatiStudente() {
        showLoading();
        const odgovor = await StudentService.getStranicenje(stranica, uvjet);
        hideLoading();
        if (odgovor.greska) {
            prikaziError(odgovor.poruka);
            return;
        }
        if (odgovor.poruka.length==0) {
            setStranica(stranica - 1);
            return;
        }
        setStudenti(odgovor.poruka);
    }

    useEffect(()=>{
        dohvatiStudente();
    }, [stranica, uvjet]);


    async function brisanjeStudenta(sifra) {
        showLoading();
        const odgovor = await StudentService.obrisi(sifra);
        hideLoading();
        if (odgovor.greska) {
            prikaziError(odgovor.poruka);
            return;
        }
        dohvatiStudente();
    }

    function obrisi(sifra) {
        brisanjeStudenta(sifra);
    }

    function slika(student){
        if(student.slika!=null){
            return APP_URL + student.slika + `?${Date.now()}`;
        }
        return defaultuser;
    }

    function promijeniUvjet(e) {
        if (e.nativeEvent.key == "Enter") {
            console.log('Enter')
            setStranica(1);
            setUvjet(e.nativeEvent.srcElement.value);
            setStudenti([]);
        }
    }

    function povecajStranicu() {
        setStranica(stranica + 1);
    }

    function smanjiStranicu() {
        if (stranica==1) {
            return;
        }
        setStranica(stranica - 1);
    }


    return(
    <>
    <hr />
    <Row>
                <Col key={1} sm={12} lg={4} md={4}>
                    <Form.Control
                    type='text'
                    name='trazilica'
                    placeholder='Dio imena i prezimena [Enter]'
                    maxLength={255}
                    defaultValue=''
                    onKeyUp={promijeniUvjet}
                    />
                </Col>
                <Col key={2} sm={12} lg={4} md={4}>
                    {studenti && studenti.length > 0 && (
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Pagination size="lg">
                                <Pagination.Prev onClick={smanjiStranicu} />
                                <Pagination.Item disabled>{stranica}</Pagination.Item> 
                                <Pagination.Next
                                    onClick={povecajStranicu}
                                />
                            </Pagination>
                        </div>
                    )}
                </Col>
                <Col key={3} sm={12} lg={4} md={4}>
                    <Link to={RouteNames.STUDENT_NOVI} className="btn btn-success crta">
                        <IoIosAdd
                        size={25}
                        /> Dodaj
                    </Link>
                </Col>
            </Row>
            
                
            <Row>
                
            { studenti && studenti.map((s) => (
           
           <Col key={s.sifra} sm={12} lg={3} md={3}>
              <Card style={{ marginTop: '1rem' }}>
              <Card.Img variant="top" src={slika(s)} className="slika"/>
                <Card.Body>
                  <Card.Title>{s.ime} {s.prezime}</Card.Title>
                  <Card.Text>
                    {s.oib}
                  </Card.Text>
                  <Row>
                      <Col>
                      <Link className="btn btn-primary crta" to={`/studenti/${s.sifra}`}><FaEdit /></Link>
                      </Col>
                      <Col>
                      <Button variant="danger" className="crta" onClick={() => obrisi(s.sifra)}><FaTrash /></Button>
                      </Col>
                    </Row>
                </Card.Body>
              </Card>
            </Col>
          ))
      }
      </Row>
      <hr />
              {studenti && studenti.length > 0 && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Pagination size="lg">
                    <Pagination.Prev onClick={smanjiStranicu} />
                    <Pagination.Item disabled>{stranica}</Pagination.Item> 
                    <Pagination.Next
                        onClick={povecajStranicu}
                    />
                    </Pagination>
                </div>
                )}
    </>)
}
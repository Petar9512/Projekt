import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StudentService from "../../services/StudentService";
import { APP_URL, RouteNames } from "../../constants";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import SmjerService from "../../services/SmjerService";
import useLoading from "../../hooks/useLoading";
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import defaultuser from '../../assets/defaultuser.jpg'; 


export default function StudentiPromjena() {

    const navigate = useNavigate();
    const { showLoading, hideLoading } = useLoading();
    const routeParams = useParams();

    const [smjerovi, setSmjerovi] = useState([]);
    const [smjerSifra, setSmjerSifra] = useState(0);
    const [student, setStudent] = useState({});

    const [trenutnaSlika, setTrenutnaSlika] = useState('');
    const [slikaZaCrop, setSlikaZaCrop] = useState('');
    const [slikaZaServer, setSlikaZaServer] = useState('');
    const cropperRef = useRef(null);

    async function dohvatiSmjerove() {
      showLoading();
        const odgovor = await SmjerService.get();
        hideLoading();
        setSmjerovi(odgovor.poruka);
    }

    async function dohvatiStudenta() {
        showLoading();
        const odgovor = await StudentService.getBySifra(routeParams.sifra);
        hideLoading();
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        let student = odgovor.poruka;
        setStudent(student);
        setSmjerSifra(student.smjerSifra);

        if (odgovor.poruka.slika!=null) {
            setTrenutnaSlika(APP_URL + odgovor.poruka.slika + `?${Date.now()}`);
          } else {
            setTrenutnaSlika(defaultuser);
          }
    }

    async function dohvatiInicijalnePodatke() {
        await dohvatiSmjerove();
        await dohvatiStudenta();
    }

    useEffect(()=> {
        dohvatiInicijalnePodatke();
    }, []);


    async function promjena(e) {
        showLoading();
        const odgovor = await StudentService.promjena(routeParams.sifra, e);
        hideLoading();
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

    function onCrop() {
        setSlikaZaServer(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
      }

      function onChangeImage(e) {
        e.preventDefault();
    
        let files;
        if (e.dataTransfer) {
          files = e.dataTransfer.files;
        } else if (e.target) {
          files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
          setSlikaZaCrop(reader.result);
        };
        try {
          reader.readAsDataURL(files[0]);
        } catch (error) {
          console.error(error);
        }
      }

      async function spremiSliku() {
        showLoading();
        const base64 = slikaZaServer;
        const odgovor = await StudentService.postaviSliku(routeParams.sifra, {Base64: base64.replace('data:image/jpg;base64,', '')});
        hideLoading();
        if(odgovor.greska){
          alert(odgovor.podatci);
        }
        setTrenutnaSlika(slikaZaServer);
      }    


    return(
    <>
    <hr />
    <Row>
    <Col key='1' sm={12} lg={6} md={6}>
    <Form className="podebljano" onSubmit={obradiSubmit}>
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
        <hr />
        <Form.Group controlId="ime">
            <Form.Label>Ime</Form.Label>
            <Form.Control type="text" name="ime" required defaultValue={student.ime} />
        </Form.Group>
        <hr />

        <Form.Group controlId="prezime">
            <Form.Label>Prezime</Form.Label>
            <Form.Control type="text" name="prezime" required defaultValue={student.prezime} />
        </Form.Group>
        <hr />

        <Form.Group controlId="oib">
            <Form.Label>Oib</Form.Label>
            <Form.Control type="text" name="oib" defaultValue={student.oib} />
        </Form.Group>

        <Row className='mb-4'>
              <Col key='1' sm={12} lg={6} md={12}>
                <p className='form-label'>Trenutna slika</p>
                <Image
                  src={trenutnaSlika}
                  className='slika'
                />
              </Col>
              <Col key='2' sm={12} lg={6} md={12}>
                {slikaZaServer && (
                  <>
                    <p className='form-label'>Nova slika</p>
                    <Image
                      src={slikaZaServer || slikaZaCrop}
                      className='slika'
                    />
                  </>
                )}
              </Col>
            </Row>
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
    </Col>
    <Col key='2' sm={12} lg={6} md={6}>
    <input className='mb-3' type='file' onChange={onChangeImage} />
              <Button disabled={!slikaZaServer} onClick={spremiSliku}>
                Spremi sliku
              </Button>

              <Cropper
                src={slikaZaCrop}
                style={{ height: 400, width: '100%' }}
                initialAspectRatio={1}
                guides={true}
                viewMode={1}
                minCropBoxWidth={50}
                minCropBoxHeight={50}
                cropBoxResizable={false}
                background={false}
                responsive={true}
                checkOrientation={false}
                cropstart={onCrop}
                cropend={onCrop}
                ref={cropperRef}
              />
    </Col>
    </Row>
    </>)
}
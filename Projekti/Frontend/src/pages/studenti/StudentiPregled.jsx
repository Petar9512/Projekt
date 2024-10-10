import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StudentService from "../../services/StudentService";
import { Button, Table } from "react-bootstrap";
import { RouteNames } from "../../constants";


export default function StudentiPregled(){

    const [studenti, setStudenti] = useState();
    const navigate = useNavigate();

    async function dohvatiStudente() {

        await StudentService.get()
        .then((odgovor)=>{
            setPolaznici(odgovor);
        })
        .catch((e)=>{console.log(e)});
    }

    useEffect(()=>{
        dohvatiStudente();
    }, []);


    async function brisanjeStudenta(sifra) {
        const odgovor = await StudentService.obrisi(sifra);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        dohvatiStudente();
    }

    function obrisi(sifra) {
        brisanjeStudenta(sifra);
    }


    return(
    <>
    <Link to={RouteNames.STUDENT_NOVI}>Dodaj novog studenta</Link>
    <Table striped bordered hover responsive>
        <thead>
            <tr>
                <th>Ime</th>
                <th>Prezime</th>
                <th>OIB</th>
                <th>Akcija</th>
            </tr>
        </thead>
        <tbody>
            {studenti && studenti.map((e, index)=>(
                <tr key={index}>
                    <td>{e.ime}</td>
                    <td>{e.prezime}</td>
                    <td>{e.oib}</td>
                    <td>
                        <Button variant="primary" onClick={()=>navigate(`/studenti/${e.sifra}`)}>Promijeni</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="danger" onClick={()=>obrisi(e.sifra)}>Obriši</Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
    </>)
}
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import KolegijService from "../../services/KolegijService";
import { Button, Table } from "react-bootstrap";
import { RouteNames } from "../../constants";
import { GrValidate } from "react-icons/gr";


export default function KolegijiPregled(){

    const [kolegiji, setKolegiji] = useState();
    const navigate = useNavigate();

    async function dohvatiKolegije() {

        await KolegijService.get()
        .then((odgovor)=>{
            setKolegiji(odgovor);
        })
        .catch((e)=>{console.log(e)});
    }

    useEffect(()=>{
        dohvatiKolegije();
    }, []);


    function obavezni(o) {
        if (o==null) return 'Nije definirano'
        if (o) return 'Obavezni'
        return 'Izborni'
    }

    async function brisanjeKolegija(sifra) {
        const odgovor = await KolegijService.obrisi(sifra);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        dohvatiKolegije();
    }

    function obrisi(sifra) {
        brisanjeKolegija(sifra);
    }


    return(
    <>
    <Link to={RouteNames.KOLEGIJ_NOVI} className="btn btn-success siroko">Dodaj novi kolegij</Link>
    <Table striped bordered hover responsive>
        <thead>
            <tr>
                <th>Naziv</th>
                <th>Predavač</th>
                <th>Status</th>
                <th>Akcija</th>
            </tr>
        </thead>
        <tbody>
            {kolegiji && kolegiji.map((e, index)=>(
                <tr key={index}>
                    <td>{e.naziv}</td>
                    <td>{e.predavac == null ? "Nije definiran" : e.predavac}</td>
                    <td>
                        {obavezni(e.obavezni)}
                    </td>
                    <td>
                        <Button variant="primary" onClick={()=>navigate(`/kolegiji/${e.sifra}`)}>Promijeni</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="danger" onClick={()=>obrisi(e.sifra)}>Obriši</Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
    </>)
}
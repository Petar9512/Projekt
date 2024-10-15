import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import IspitniRokService from "../../services/IspitniRokService";
import { Button, Table } from "react-bootstrap";
import { RouteNames } from "../../constants";
import moment from "moment";


export default function RokoviPregled(){

    const [rokovi, setRokovi] = useState();
    const navigate = useNavigate();

    async function dohvatiRokove() {

        await IspitniRokService.get()
        .then((odgovor)=>{
            setRokovi(odgovor);
        })
        .catch((e)=>{console.log(e)});
    }

    useEffect(()=>{
        dohvatiRokove();
    }, []);

    function formatirajDatum(datum) {
        if (datum==null) {
            return "Nije definirano";
        }
        return moment.utc(datum).format('DD.MM.YYYY. hh:mm:ss');
    }

    async function brisanjeRoka(sifra) {
        const odgovor = await IspitniRokService.obrisi(sifra);
        if (odgovor.greska) {
            alert (odgovor.poruka);
            return;
        }
        dohvatiRokove();
    }

    function obrisi(sifra) {
        brisanjeRoka(sifra);
    }


    return(
    <>
    <Link to={RouteNames.ISPITNI_ROK_NOVI} className="btn btn-success siroko">Dodaj novi ispitni rok</Link>
    <Table striped bordered hover responsive>
        <thead>
            <tr>
                <th>Vrsta ispita</th>
                <th>Vrijeme</th>
                <th>Akcija</th>
            </tr>
        </thead>
        <tbody>
            {rokovi && rokovi.map((e, index)=>(
                <tr key={index}>
                    <td>{e.vrstaIspita}</td>
                    <td>{formatirajDatum(e.datum)}</td>
                    <td>
                        <Button variant="primary" onClick={()=>navigate(`/rokovi/${e.sifra}`)}>Promijeni</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="danger" onClick={()=>obrisi(e.sifra)}>Obriši</Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
    </>)
}
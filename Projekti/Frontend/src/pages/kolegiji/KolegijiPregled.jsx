import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import KolegijService from "../../services/KolegijService";
import { Button, Table } from "react-bootstrap";
import { RouteNames } from "../../constants";
import useLoading from "../../hooks/useLoading";
import useError from '../../hooks/useError';


export default function KolegijiPregled(){

    const [kolegiji, setKolegiji] = useState();
    const navigate = useNavigate();
    const { showLoading, hideLoading } = useLoading();
    const { prikaziError } = useError();

    async function dohvatiKolegije() {
        showLoading();
        const odgovor = await KolegijService.get();
        hideLoading();
        if (odgovor.greska) {
            prikaziError(odgovor.poruka)
            return
        }
        setKolegiji(odgovor.poruka)      
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
        showLoading();
        const odgovor = await KolegijService.obrisi(sifra);
        hideLoading();
        if (odgovor.greska) {
            prikaziError(odgovor.poruka);
            return;
        }
        dohvatiKolegije();
    }

    function obrisi(sifra) {
        brisanjeKolegija(sifra);
    }


    return(
    <>
    <Link to={RouteNames.KOLEGIJ_NOVI} className="btn btn-success siroko random podebljano crta">Dodaj novi kolegij</Link>
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
                    <td>{(e.predavac == '' || e.predavac == null) ? "Nije definiran" : e.predavac}</td>
                    <td>
                        {obavezni(e.obavezni)}
                    </td>
                    <td>
                        <Button className="crta" variant="primary" onClick={()=>navigate(`/kolegiji/${e.sifra}`)}>Promijeni</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button className="crta" variant="danger" onClick={()=>obrisi(e.sifra)}>Obriši</Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
    </>)
}
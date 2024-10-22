import { useEffect, useState } from "react"
import SmjerService from "../../services/SmjerService"
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import useLoading from "../../hooks/useLoading";

export default function SmjeroviPregled() {

    const navigate = useNavigate();
    const { showLoading, hideLoading } = useLoading();
    const[smjerovi, setSmjerovi] = useState();

async function dohvatiSmjerove(){
    showLoading();
const odgovor = await SmjerService.get();
hideLoading();
if (odgovor.greska) {
    alert(odgovor.poruka)
    return
}
setSmjerovi(odgovor.poruka)
}

useEffect(()=>{
dohvatiSmjerove();
},[]);


function obrisi(sifra) {
    if (!confirm('Sigurno obrisati?')) {
        return;
    }
brisanjeSmjera(sifra)
}

async function brisanjeSmjera(sifra) {
    showLoading();
const odgovor = await SmjerService.brisanje(sifra);
hideLoading();
if (odgovor.greska) {
    alert(odgovor.poruka)
    return
}
dohvatiSmjerove();
}


    return(
        <>
        <Link to={RouteNames.SMJER_NOVI} className="btn btn-success siroko random podebljano crta">Dodaj novi smjer</Link>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Broj mjesta</th>
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {smjerovi && smjerovi.map((smjer, index)=>(
                    <tr key={index}>
                        <td>
                            {smjer.naziv}
                        </td>
                        <td className={smjer.brojStudenata==null ? 'sredina' : 'desno'}>
                            {smjer.brojStudenata==null ? 'Nije definirano' : smjer.brojStudenata}
                        </td>
                        <td>
                        <Button className="crta" variant="danger" onClick={()=>obrisi(smjer.sifra)}>Obriši</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button className="crta" onClick={()=> navigate(`/smjerovi/${smjer.sifra}`) }>Promjena smjera</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}
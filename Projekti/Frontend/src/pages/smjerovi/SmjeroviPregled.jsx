import { useEffect, useState } from "react"
import SmjerService from "../../services/SmjerService"
import { Button, Table } from "react-bootstrap";
import moment from "moment/moment";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";

export default function SmjeroviPregled() {

    const navigate = useNavigate()
    const[smjerovi, setSmjerovi] = useState()

async function dohvatiSmjerove(){
const odgovor = await SmjerService.get();
if (odgovor.greska) {
    alert(odgovor.poruka)
    return
}
setSmjerovi(odgovor.poruka)
}

useEffect(()=>{
dohvatiSmjerove();
},[])


function formatirajDatum(datum) {
    if (datum==null) {
        return "Nije definirano";
    }
    return moment.utc(datum).format('DD.MM.YYYY. hh:mm:ss');
}

function pristupio(p) {
    if (p==null) return 'gray'
    if (p) return 'green'
    return 'red'
}

function obrisi(sifra) {
    if (!confirm('Sigurno obrisati?')) {
        return;
    }
brisanjeSmjera(sifra)
}

async function brisanjeSmjera(sifra) {
const odgovor = await SmjerService.brisanje(sifra);
if (odgovor.greska) {
    alert(odgovor.poruka)
    return
}
dohvatiSmjerove();
}


    return(
        <>
        <Link to={RouteNames.SMJER_NOVI} className="btn btn-success siroko">Dodaj novi smjer</Link>
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
                        <Button variant="danger" onClick={()=>obrisi(smjer.sifra)}>Obriši</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button onClick={()=> navigate(`/smjerovi/${smjer.sifra}`) }>Promjena smjera</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}
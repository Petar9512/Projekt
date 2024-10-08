import { HttpService } from "./HttpService";

async function get() {
    return await HttpService.get('/Smjer')
    .then((odgovor)=>{
        //console.table(odgovor.data)
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        console.log(e)
        return {greska: true, poruka: 'Problem kod dohvaćanja smjerova'}
    })
}

async function brisanje(sifra) {
    return await HttpService.delete('/Smjer/' + sifra)
    .then(()=>{
        return {greska: false, poruka: 'Obrisano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod brisanja smjera'}
    })
}

async function dodaj(smjer) {
    return await HttpService.post('/Smjer', smjer)
    .then(()=>{
        return {greska: false, poruka: "Smjer dodan"}
    })
    .catch(()=>{
        return {greska: true, poruka: "Problem kod dodavanja smjera"}
    })
}

async function promjena(sifra, smjer) {
    return await HttpService.put('/Smjer/' + sifra, smjer)
    .then(()=>{
        return {greska: false, poruka: "Promjena uspješna"}
    })
    .catch(()=>{
        return {greska: true, poruka: "Problem kod promjene smjera"}
    })
}

async function getBySifra(sifra) {
    return await HttpService.get('/Smjer/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: "Problem kod dohvaćanja smjera sa šifrom" + sifra}
    })
}


export default {
    get,
    brisanje,
    dodaj,
    getBySifra,
    promjena
}
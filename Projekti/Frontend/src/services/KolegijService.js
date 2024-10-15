import { HttpService } from "./HttpService";

async function get(){
    return await HttpService.get('/Kolegij')
    .then((odgovor)=>{
        return odgovor.data;
    })
    .catch((e)=>{console.error(e)})
}

async function getBySifra(sifra){
    return await HttpService.get('/Kolegij/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Kolegij ne postoji'}
    })
}

async function obrisi(sifra){
    return await HttpService.delete('/Kolegij/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Kolegij se ne može obrisati'}
    })
}

async function dodaj(Kolegij){
    return await HttpService.post('/Kolegij', Kolegij)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        switch (e.status) {
            case 400:
                let poruke = '';
                for (const kljuc in e.response.data.errors) {
                    poruke += kljuc + ': ' + e.response.data.errors[kljuc][0] + '\n';
                }
                return {greska: true, poruka: poruke}
            default:
                return {greska: true, poruka: 'Kolegij se ne može dodati'}
        }
    })
}

async function promjena(sifra, Kolegij){
    return await HttpService.put('/Kolegij/' + sifra, Kolegij)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        switch (e.status) {
            case 400:
                let poruke = '';
                for (const kljuc in e.response.data.errors) {
                    poruke += kljuc + ': ' + e.response.data.errors[kljuc][0] + '\n';
                }
                return {greska: true, poruka: poruke}
            default:
                return {greska: true, poruka: 'Kolegij se ne može promijenti'}
        }
    })
}

export default {
    get,
    getBySifra,
    dodaj,
    obrisi,
    promjena
}
import { HttpService } from "./HttpService";

async function get() {
    return await HttpService.get('/Kolegij')
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        console.log(e)
        return {greska: true, poruka: 'Problem kod dohvaćanja kolegija'}
    })
}

async function obrisi(sifra) {
    return await HttpService.delete('/Kolegij/' + sifra)
    .then(()=>{
        return {greska: false, poruka: 'Obrisano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod brisanja kolegija'}
    })
}

async function dodaj(kolegij) {
    return await HttpService.post('/Kolegij', kolegij)
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

async function promjena(sifra, kolegij) {
    return await HttpService.put('/Kolegij/' + sifra, kolegij)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        switch(e.status) {
            case 400:
                let poruke = '';
                for (const kljuc in e.response.data.errors) {
                    poruke += kljuc + ': ' + e.response.data.errors[kljuc][0] + '\n';
                }
                return {greska: true, poruka: poruke}
            default:
                return {greska: true, poruka: 'Kolegij se ne može promijeniti'}
        }
    })
}

async function getBySifra(sifra) {
    return await HttpService.get('/Kolegij/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: "Problem kod dohvaćanja kolegija sa šifrom" + sifra}
    })
}


export default {
    get,
    obrisi,
    dodaj,
    getBySifra,
    promjena
}
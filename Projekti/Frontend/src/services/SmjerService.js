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
                return {greska: true, poruka: 'Smjer se ne može dodati'}
        }
    })
}

async function promjena(sifra, smjer) {
    return await HttpService.put('/Smjer/' + sifra, smjer)
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
                return {greska: true, poruka: 'Smjer se ne može promijeniti'}
        }
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
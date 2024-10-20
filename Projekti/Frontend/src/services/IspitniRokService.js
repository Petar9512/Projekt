import { HttpService } from "./HttpService";

async function get(){
    return await HttpService.get('/IspitniRok')
    .then((odgovor)=>{
        return odgovor.data;
    })
    .catch((e)=>{console.error(e)})
}

async function getBySifra(sifra){
    return await HttpService.get('/IspitniRok/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Ispitni rok ne postoji'}
    })
}

async function obrisi(sifra){
    return await HttpService.delete('/IspitniRok/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Ispitni rok se ne može obrisati'}
    })
}

async function dodaj(IspitniRok){
    return await HttpService.post('/IspitniRok', IspitniRok)
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
                return {greska: true, poruka: 'Ispitni rok se ne može dodati'}
        }
    })
}

async function promjena(sifra, IspitniRok){
    return await HttpService.put('/IspitniRok/' + sifra, IspitniRok)
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
                return {greska: true, poruka: 'Ispitni rok se ne može promijenti'}
        }
    })
}

async function getPristupnici(sifra) {
    return await HttpService.get('/IspitniRok/Studenti/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{return {greska: true, poruka: "Problem kod dohvaćanja pristupnika"}})
}

async function dodajPristupnika(IspitniRok, student) {
    return await HttpService.post('/IspitniRok/' + IspitniRok + '/dodaj/' + student)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{return {greska: true, poruka: "Pristupnik se ne može dodati u ispitni rok"}})
}

async function obrisiPristupnika(IspitniRok, student) {
    return await HttpService.delete('/IspitniRok/' + IspitniRok + '/dodaj/' + student)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{return {greska: true, poruka: "Pristupnik se ne može obrisati iz ispitnog roka"}})
}

export default {
    get,
    getBySifra,
    dodaj,
    obrisi,
    promjena,
    getPristupnici,
    dodajPristupnika,
    obrisiPristupnika
}
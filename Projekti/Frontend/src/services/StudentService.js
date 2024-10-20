import { HttpService } from "./HttpService";

async function get(){
    return await HttpService.get('/Student')
    .then((odgovor)=>{
        return odgovor.data;
    })
    .catch((e)=>{console.error(e)})
}

async function getBySifra(sifra){
    return await HttpService.get('/Student/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Student ne postoji'}
    })
}

async function obrisi(sifra){
    return await HttpService.delete('/Student/' + sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Student se ne može obrisati'}
    })
}

async function dodaj(Student){
    return await HttpService.post('/Student', Student)
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
                return {greska: true, poruka: 'Student se ne može dodati'}
        }
    })
}

async function promjena(sifra, Student){
    return await HttpService.put('/Student/' + sifra, Student)
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
                return {greska: true, poruka: 'Student se ne može promijenti'}
        }
    })
}

async function TraziStudenta(uvjet) {
    return await HttpService.get('/Student/trazi/' + uvjet)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{return {greska: true, poruka: "Problem kod pronalaženja studenta"}})
}

export default {
    get,
    getBySifra,
    dodaj,
    obrisi,
    promjena,
    TraziStudenta
}
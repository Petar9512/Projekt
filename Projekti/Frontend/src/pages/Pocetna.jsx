import { useEffect, useState } from "react";
import {  Col, Row } from "react-bootstrap";
import StudentService from "../services/StudentService";
import useLoading from "../hooks/useLoading";
import CountUp from "react-countup";

export default function Pocetna(){

    const { showLoading, hideLoading } = useLoading();

    const [studenata, setStudenata] = useState(0);

    async function dohvatiBrojStudenata() {
        await StudentService.ukupnoStudenata()
        .then((odgovor)=>{
            setStudenata(odgovor.poruka);
        })
        .catch((e)=>{console.log(e)});
    }

    async function ucitajPodatke() {
        showLoading();
        await dohvatiBrojStudenata();
        hideLoading();
      }

    useEffect(()=>{
        ucitajPodatke()
    },[]);

   
    return(
        <>
        <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={6}>
                    <div className="brojStudenata random">
                    Do sada nam je povjerenje pokazalo -
                    <hr />
                    <CountUp
                    start={0}
                    end={studenata}
                    duration={10}
                    separator="."></CountUp>
                    &nbsp;&nbsp;studenata.
                    </div>
                    </Col>
                </Row>
            </>
    )}
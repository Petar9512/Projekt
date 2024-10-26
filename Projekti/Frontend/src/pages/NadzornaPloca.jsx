import moment from "moment";
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Highcharts from 'highcharts';
import PieChart from 'highcharts-react-official';
import IspitniRokService from '../services/IspitniRokService';
import useLoading from '../hooks/useLoading';

export default function NadzornaPloca() {
  const [podatci, setPodatci] = useState([]);
  const [rokovi, setRokovi] = useState([]);
  const { showLoading, hideLoading } = useLoading();

  async function dohvatiRokove() {
    await IspitniRokService.dostupniRokovi()
    .then((odgovor)=>{
        setRokovi(odgovor);
    })
    .catch((e)=>{console.log(e)});
}

  async function getPodatci() {
    showLoading();
    const odgovor = await IspitniRokService.grafIspitnogRoka();
    setPodatci(odgovor.map((rok) => {
      return {
        y: rok.ukupnoPristupnika,
        name: rok.nazivKolegija,
      };
    }));
    hideLoading();
  }

  async function ucitajPodatke() {
    showLoading();
    await dohvatiRokove();
    await getPodatci();
    hideLoading();
  }

  useEffect(() => {
    ucitajPodatke();
  }, []);

  
  function formatirajDatum(datum) {
    if (datum==null) {
        return "Nije definirano";
    }
    return moment.utc(datum).format('DD.MM.YYYY. h:mm A');
}


  return (
    <>
    <Row>   
                    <Col xs={6} sm={6} md={3} lg={6} xl={6} xxl={6}>
                    <ul>
                    {rokovi && rokovi.map((rok, index)=>(
                            <li key={index}>{rok.kolegijNaziv} - {formatirajDatum(rok.datum)}</li>
                    ))}
                    </ul>
                    </Col>
                    </Row>
                   
    <Container className='mt-4'>
      {podatci.length > 0 && (
        <PieChart
          highcharts={Highcharts}
          options={{
            ...fixedOptions,
            series: [
              {
                name: 'Pristupnici',
                colorByPoint: true,
                data: podatci,
              },
            ],
          }}
        />
      )}
    </Container>
    </>
  );
}

const fixedOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  },
  title: {
    text: 'Broj pristupnika po ispitnom roku',
    align: 'left',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  accessibility: {
    enabled: false,
    point: {
      valueSuffix: '%',
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      },
    },
  },
};
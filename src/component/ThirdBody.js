import React, {useState, useEffect} from 'react';
// import { Button, Form } from 'react-bootstrap';
import '../style/Body.css';
import axios  from "axios";
// eslint-disable-next-line
import { Card } from 'react-bootstrap';


const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely',
    params: {lat: '-7.983908', lon: '112.621391', units: 'metric'},
    headers: {
      'X-RapidAPI-Key': '04126a968amsh05ffd5a00aebf14p1b24a3jsn9ba3d54121c3',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
};

const ThirdBody = () => {    
    
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.request(options)
        .then(function (response) {
            console.log(response.data);
            setData(response.data.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <>
        <div className='thirdBody' id='weather'>
            <h1 className='titleThird'>Weather</h1>
            <div className='container'>
                <div className='row'>
                {   
                    data.map((value) => {
                        return(
                            <div className='col-3 sizeColumn'>
                                    <Card className='cardStyle'>
                                        <Card.Body>
                                            <Card.Title className='cardText'><strong>MALANG</strong></Card.Title>
                                            <Card.Text className='cardText'><strong>Timestamp UTC:</strong></Card.Text>
                                            <Card.Text className='cardText'>{value.timestamp_utc}</Card.Text>
                                            <Card.Text className='cardText'><strong>Timestamp Local:</strong></Card.Text>
                                            <Card.Text className='cardText'>{value.timestamp_local}</Card.Text>
                                            <Card.Text className='cardText'><strong>Temperature:</strong> {value.temp}</Card.Text>
                                            <Card.Text className='cardText'><strong>Ts:</strong> {value.ts}</Card.Text>
                                            <Card.Text className='cardText'><strong>Precip:</strong> {value.precip}</Card.Text>
                                        </Card.Body>
                                    </Card>
                            </div>
                        );
                    })
                }
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(185, 8, 8)" fill-opacity="1" d="M0,320L26.7,298.7C53.3,277,107,235,160,186.7C213.3,139,267,85,320,90.7C373.3,96,427,160,480,208C533.3,256,587,288,640,250.7C693.3,213,747,107,800,96C853.3,85,907,171,960,218.7C1013.3,267,1067,277,1120,261.3C1173.3,245,1227,203,1280,176C1333.3,149,1387,139,1413,133.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        </div>
        </>
    );
}

export default ThirdBody;

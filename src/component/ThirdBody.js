import React, { useState, useEffect } from 'react';
// import { Button, Form } from 'react-bootstrap';
import '../style/Body.css';
import { API } from "../utils/constant";
import axios  from "axios";
import { Card } from 'react-bootstrap';

const ThirdBody = () => {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(API);
            console.log(res);
            setData(res.data.articles);
        }
        getData();
    }, [])
    return (
        <>
        <div className='thirdBody' id='news'>
            <h1 className='titleThird'>News</h1>
            <div className='container'>
                <div className='row'>
                {
                    data.map((value) => {
                    return(
                        <div className='col-3 sizeColumn'>
                            <a href={value.url} className='linkStyle'>
                                <Card className='cardStyle'>
                                    <Card.Img variant="top" src={value.urlToImage} />
                                    <Card.Body>
                                        <Card.Title>{value.title}</Card.Title>
                                        <Card.Text>
                                        {value.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
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

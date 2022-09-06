import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Button, Card } from 'react-bootstrap';
import axios from "axios";
import { Sheet } from "../utils/constant";
import  swal from "sweetalert";
import '../style/Body.css';

const SecondBody = () => {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [APIdata, setAPIData] = useState([]);
    const [refresh, setrefresh] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            Email: email,
            Comment: comment
        }
        axios.post(Sheet, data).then((res) => {
            //membersihkan form setelah input
            setEmail('');
            setComment('');
            swal({
                title: "Success Notification",
                text: "Terima Kasih Atas Masukannya !!!",
                icon: "success",
                timer: 1500,
                button: false
            })
            setrefresh(res)
        }).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        const getData = async () =>{
            const res = await axios.get(Sheet);
            console.log(res.data);
            setAPIData(res.data);
        }
        getData();
    }, [refresh]);
    return (
        <div className='secondBody' id='about'>
            <Container>
                <h1 className='titleSecond'>
                    About
                </h1>
                <h1 className='titleSecond'>OR</h1>
                <Row>
                    <Col className='border 
                    border-light 
                    border-5 
                    border-top-0
                    border-start-0
                    border-bottom-0
                    '>
                        <h1 className='titleSecond'>Independence Day</h1>
                        <p className='textSecond'>
                        Hari Kemerdekaan Republik Indonesia (nama lain: Hari Ulang Tahun Kemerdekaan RI disingkat HUT RI), bahasa sehari-hari: "Tujuhbelasan" adalah hari libur nasional di Indonesia untuk memperingati Proklamasi Kemerdekaan Republik Indonesia pada 17 Agustus 1945.
                        Setiap tahun pada tanggal 17 Agustus, rakyat Indonesia merayakan HUT RI dengan meriah, mulai dari Upacara bendera hingga berbagai macam perlombaan masyarakat seperti lomba panjat pinang, lomba makan kerupuk, tarik tambang, hias sepeda, dll. Masyarakat dan diaspora Indonesia didalam dan luar negeri memperingati dan merayakan hari tersebut yang diawali oleh upacara bendera dan peringatan detik-detik proklamasi pada pagi hari.
                        Menjelang Hari Kemerdekaan, Presiden Republik Indonesia selalu memberi Pidato Kenegaraan dalam rangka Hari Kemerdekaan Indonesia di Gedung MPR sebagai kegiatan yang sakral untuk menyambut Hari Kemerdekaan Republik Indonesia.
                        </p>
                    </Col>
                    <Col className='border 
                    border-light 
                    border-5 
                    border-top-0
                    border-end-0
                    border-bottom-0'>
                        <h3 className='textSecond'>
                            You can describe it what is Independence Day for you
                            by entering your words and emails on this form...!!
                        </h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='textSecond'>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" 
                                onChange={(e) => setEmail(e.target.value)} value={email} required/>
                                <Form.Text className="text-muted textSecond">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='textSecond'>Comment</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="place your describe here !!" 
                                onChange={(e) => setComment(e.target.value)} value={comment} required/>
                            </Form.Group>
                            <Button variant="light" type="submit" className='buttonStyle' onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                {
                    APIdata.map((value) => {
                        return(
                            <Card className='commentCard'>
                                <Card.Body>"{value.Comment}"</Card.Body>
                                <Card.Body>~ {value.Email}</Card.Body>
                            </Card>
                        )
                    })
                }
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(255, 255, 255)" fill-opacity="1" d="M0,96L26.7,106.7C53.3,117,107,139,160,149.3C213.3,160,267,160,320,144C373.3,128,427,96,480,96C533.3,96,587,128,640,165.3C693.3,203,747,245,800,229.3C853.3,213,907,139,960,117.3C1013.3,96,1067,128,1120,149.3C1173.3,171,1227,181,1280,176C1333.3,171,1387,149,1413,138.7L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
        </div>
    );
}

export default SecondBody;

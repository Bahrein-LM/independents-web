import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../style/Body.css';

class FirstBody extends Component {
    render() {
        return (
            <div className='firstbody' id='home'>
                <Carousel fade controls={false}>
                    <Carousel.Item className='carouselStyle' interval={1000}>
                        <video 
                            src="assets/video/video-1.mp4"
                            className="d-block w-100" 
                            alt="First slide"
                            autoPlay loop muted/>
                        <Carousel.Caption>
                        <h3 className='titleCarousel'>HAPPY</h3>
                        <p>~ Many of life's failures are people who did not realize how close they were to success when they gave up ~</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carouselStyle' interval={1000}>
                        <video 
                            src="assets/video/video-2.mp4"
                            className="d-block w-100" 
                            alt="Second slide"
                            autoPlay loop muted/>
                        <Carousel.Caption>
                        <h3 className='titleCarousel'>INDEPENDENTS</h3>
                        <p>~ One of the greatest regrets in life is being what others would want you to be, rather than being yourself ~</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='carouselStyle' interval={1000}>
                        <video 
                            src="assets/video/video-3.mp4"
                            className="d-block w-100" 
                            alt="Third slide"
                            autoPlay loop muted/>
                        <Carousel.Caption>
                        <h3 className='titleCarousel'>DAY</h3>
                        <p>~ It does not matter how slowly you go as long as you do not stop ~</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default FirstBody;

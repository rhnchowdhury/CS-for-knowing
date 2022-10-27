import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/art-1.jpg'
import img2 from '../images/art-2.jpg'
import img3 from '../images/art-3.webp'

const Home = () => {

    return (

        <div className='mt-5'>
            <h2 className='mb-4'><strong className='fs-1 fw-bold text-warning'>Welcome</strong> to <span className='text-success'>Intelligence</span> world,</h2>
            <Carousel>
                <Carousel.Item>
                    <Image className="d-block w-100"
                        style={{ height: '450px' }}
                        src={img1}
                        alt=""></Image>
                    <Carousel.Caption>
                        <p className='fs-4 fw-semibold'>“Machine intelligence is the last invention that humanity will ever need to make.” </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100"
                        style={{ height: '450px' }}
                        src={img2}
                        alt=""></Image>
                    <Carousel.Caption>
                        <p className='fs-4 fw-semibold ' style={{ color: 'tomato' }}>“There is no reason and no way that a human mind can keep up with an AI machine by 2035.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image className="d-block w-100"
                        style={{ height: '450px' }}
                        src={img3}
                        alt=""></Image>
                    <Carousel.Caption>
                        <p className='fs-4 fw-semibold text-danger'>
                            “The sad thing about artificial intelligence is that it lacks artifice and therefore intelligence.”
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div >
    );
};

export default Home;
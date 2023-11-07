import React from 'react'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'
import aboutImg from '../assets/images/about_art.jpg'
import rahulCV from '../assets/Rahul_CV.pdf'

function AboutMe() {
    return (
        <section id='AboutMe' className='bg-color py-5'>
            <Container>
                <h1 className='display-5 fw-semibold text-center mb-4' data-aos="zoom-in">About Me</h1>
                <Row className='mb-lg-5'>
                    <Col sm={12} md={8} lg={6} className='my-2 py-4 m-md-auto' data-aos="zoom-in">
                        <h3 className='text-center mb-4'>I'm <span className='text-warning'>Rahul,</span> a Web Enthusiast</h3>
                        <p style={{ textAlign: "justify" }}>
                            <span className="ms-4"></span>
                            With a well-rounded skill set in HTML, CSS, Bootstrap, JavaScript, ReactJS, PHP, and MySQL. I am capable of creating dynamic and visually appealing web applications.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <span className="ms-4"></span>
                            I am proficient in front-end technologies such as HTML, CSS, and Bootstrap, as well as JavaScript and ReactJS, which enable me to create interactive and responsive web applications.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <span className="ms-4"></span>
                            Aside from that, my expertise in PHP and MySQL back-end development makes sure that data is managed effectively and functionality is smooth. I am an accomplished web designer and developer with an eye for design and a solid foundation in development.
                        </p>
                        <div className="d-flex justify-content-center mt-4 mb-2">
                            <a className='btn btn-outline-dark fw-medium fs-6' data-aos="fade-up" href={rahulCV} download>
                                <FontAwesomeIcon icon={faFile} beat className='me-2' />
                                Download CV
                            </a>
                        </div>
                    </Col>
                    <Col sm={12} md={8} lg={6} className='my-2 m-auto d-none d-lg-flex justify-content-center align-items-center' data-aos="zoom-in">
                        <img src={aboutImg} width={350} alt='vector art' className='rounded border border-warning' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutMe

import React from 'react'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Container, Row } from 'react-bootstrap'
import profileImg from '../assets/images/rahul.png'

function AboutMe() {
    return (
        <section id='AboutMe' className='bg-color py-5'>
            <Container>
                <h1 className='display-5 fw-semibold text-center mb-4' data-aos="zoom-in">About Me</h1>
                <Row className='mb-lg-5'>
                    <Col sm={12} md={6} lg={6} className='my-2' data-aos="zoom-in-right">
                        <h3 className='text-center mb-4'>I'm <span className='text-warning'>Rahul,</span> a Web Enthusiast</h3>
                        <p style={{ textAlign: "justify" }}>
                            <span className="ms-4"></span>
                            With a well-rounded skill set in HTML, CSS, Bootstrap, JavaScript, ReactJS, PHP, and MySQL, I am capable of creating dynamic and visually appealing web applications. I am proficient in front-end technologies such as HTML, CSS, and Bootstrap, as well as JavaScript and ReactJS, which enable me to create interactive and responsive web applications.
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            <span className="ms-4"></span>
                            Aside from that, my expertise in PHP and MySQL back-end development makes sure that data is managed effectively and functionality is smooth. I am an accomplished web designer and developer with an eye for design and a solid foundation in development.
                        </p>
                        <div className="d-flex justify-content-center mt-4 mb-5">
                            <Button variant='outline-dark' className='fw-medium fs-6' data-aos="fade-up">
                                <FontAwesomeIcon icon={faFile} beat className='me-2' />
                                Download Resume
                            </Button>
                        </div>
                    </Col>
                    <Col sm={12} md={8} lg={6} className='my-2 d-flex justify-content-center align-items-center' data-aos="zoom-in-left">
                        <img src={profileImg} width={350} alt='Rahul profile' className='rounded-circle' style={{ boxShadow: "4px 10px 10px -8px" }} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutMe

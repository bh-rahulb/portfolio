import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'

function Intro() {
    return (
        <section id='Intro'>
            <Container>
                <Row>
                    <Col sm={12} md={8} lg={6} className='py-5 my-4'>
                        <div className='py-5 my-4'>
                            <p className='fs-4 mb-1'>Hello,</p>
                            <h2 className='fs-1 m-0'>I'm <span className='text-warning'>Rahul</span></h2>
                            <h1 className="display-3 fw-medium text-warning d-flex my-2">
                                <span className='me-2'>Web</span>
                                <Typewriter options={{ strings: ['Designer', 'Developer'], autoStart: true, loop: true, pauseFor: 3000, delay: 150, }} />
                            </h1>
                            <p className='pe-sm-2 pe-lg-4'>
                                My skills as a web designer include HTML, CSS, Bootstrap, JavaScript, and ReactJS. It is in this field that I have developed my skills in creating websites that are both visually stunning and user-friendly.
                            </p>
                            <Link to="Contact" spy={true} duration={800} className='btn btn-outline-warning fw-medium fs-6' data-aos="fade-up"><FontAwesomeIcon className="me-2" icon={faMessage} beat />Contact</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Intro

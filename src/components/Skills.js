import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import htmlImg from '../assets/images/skills/html-logo.png'
import cssImg from '../assets/images/skills/css-logo.png'
import javaScriptImg from '../assets/images/skills/JavaScript-logo.png'
import phpImg from '../assets/images/skills/php-logo.png'
import mySqlImg from '../assets/images/skills/mysql-logo.png'
import bootstrapImg from '../assets/images/skills/bootstrap-logo.png'
import reactJsImg from '../assets/images/skills/reactJS-logo.png'

import './Skills.css'

function Skills() {
    return (
        <section id='Skills' className='py-5'>
            <Container>
                <h1 className='display-5 fw-semibold text-center mb-4' data-aos="zoom-in">Skills</h1>
                <p className='px-2 text-center'>

                </p>
                <Row>
                    <Col sm={12} md={6} lg={6} className="my-2">
                        <h4 className='fs-5 text-center mb-4'>Languages and Databases</h4>
                        <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
                            <div className="skill-logo d-flex justify-content-center align-items-center" data-aos="zoom-in">
                                <Image src={htmlImg} />
                            </div>
                            <div className="skill-logo d-flex justify-content-center align-items-center" data-aos="zoom-in">
                                <Image src={cssImg} />
                            </div>
                            <div className="skill-logo d-flex justify-content-center align-items-center" data-aos="zoom-in">
                                <Image src={javaScriptImg} />
                            </div>
                            <div className="skill-logo d-flex justify-content-center align-items-center" data-aos="zoom-in">
                                <Image src={phpImg} />
                            </div>
                            <div className="skill-logo d-flex justify-content-center align-items-center" data-aos="zoom-in">
                                <Image src={mySqlImg} />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="my-2">
                        <h4 className='fs-5 text-center mb-4'>Fremeworks and Libraries</h4>
                        <div className="d-flex justify-content-center align-items-center flex-wrap gap-5">
                            <div className="skill-logo d-flex justify-content-center align-items-center" data-aos="zoom-in">
                                <Image src={bootstrapImg} />
                            </div>
                            <div className="skill-logo d-flex justify-content-center align-items-center" data-aos="zoom-in">
                                <Image src={reactJsImg} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Skills

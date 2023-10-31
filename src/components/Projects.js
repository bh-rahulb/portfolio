import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import trackTaleImg from '../assets/images/projects/trackntale.png'
import gioGamingImg from '../assets/images/projects/GIO.png'
import webcodeftImg from '../assets/images/projects/webcodeft.png'
import spinnyImg from '../assets/images/projects/spinny.png'
import oneStopImg from '../assets/images/projects/one-stop.png'
import watchesImg from '../assets/images/projects/watches.png'
import renrollImg from '../assets/images/projects/renroll.png'
import mtbHamirpurImg from '../assets/images/projects/mtb-hamirpur.png'
import mollaImg from '../assets/images/projects/molla.png'
import loradaImg from '../assets/images/projects/lorada.png'
import { project } from '../assets/ProjectsDetails'

function Projects() {
    return (
        <section id='Projects' className='bg-color py-5'>
            <Container>
                <h1 className='display-5 fw-semibold text-center mb-4'>Projects</h1>
                <p className='px-2 text-center'>

                </p>
                <Row>
                    <Col sm={12} md={6} lg={4} className='my-2 d-none' data-aos="zoom-out">
                        <ProjectCard src={trackTaleImg} title={project.trackTale.title} info={project.trackTale.info} tech={project.trackTale.tech} livesrc={project.trackTale.liveUrl} githubsrc={project.trackTale.githubUrl} />
                    </Col>
                    <Col sm={12} md={6} lg={4} className='my-2' data-aos="zoom-out">
                        <ProjectCard src={gioGamingImg} title={project.gioGaming.title} info={project.gioGaming.info} tech={project.gioGaming.tech} livesrc={project.gioGaming.liveUrl} githubsrc={project.gioGaming.githubUrl} />
                    </Col>
                    <Col sm={12} md={6} lg={4} className='my-2 d-none' data-aos="zoom-out">
                        <ProjectCard src={webcodeftImg} title={project.webcodeft.title} info={project.webcodeft.info} tech={project.webcodeft.tech} livesrc={project.webcodeft.liveUrl} githubsrc={project.webcodeft.githubUrl} />
                    </Col>
                    <Col sm={12} md={6} lg={4} className='my-2' data-aos="zoom-out">
                        <ProjectCard src={spinnyImg} title={project.spinnyVehicle.title} info={project.spinnyVehicle.info} tech={project.spinnyVehicle.tech} livesrc={project.spinnyVehicle.liveUrl} githubsrc={project.spinnyVehicle.githubUrl} />
                    </Col>
                    <Col sm={12} md={6} lg={4} className='my-2 d-none' data-aos="zoom-out">
                        <ProjectCard src={oneStopImg} title={project.oneStop.title} info={project.oneStop.info} tech={project.oneStop.tech} livesrc={project.oneStop.liveUrl} githubsrc={project.oneStop.githubUrl} />
                    </Col>
                    <Col sm={12} md={6} lg={4} className='my-2' data-aos="zoom-out">
                        <ProjectCard src={watchesImg} title={project.watches.title} info={project.watches.info} tech={project.watches.tech} livesrc={project.watches.liveUrl} githubsrc={project.watches.githubUrl} />
                    </Col>
                    <Col sm={12} md={6} lg={4} className='my-2' data-aos="zoom-out">
                        <ProjectCard src={renrollImg} title={project.renroll.title} info={project.renroll.info} tech={project.renroll.tech} livesrc={project.renroll.liveUrl} githubsrc={project.renroll.githubUrl} />
                    </Col>
                    <Col sm={12} md={6} lg={4} className='my-2 d-none' data-aos="zoom-out">
                        <ProjectCard src={mtbHamirpurImg} title={project.mtbHamirpur.title} info={project.mtbHamirpur.info} tech={project.mtbHamirpur.tech} livesrc={project.mtbHamirpur.liveUrl} githubsrc={project.mtbHamirpur.githubUrl} />
                    </Col>
                    <Col sm={12} md={6} lg={4} className='my-2' data-aos="zoom-out">
                        <ProjectCard src={mollaImg} title={project.molla.title} info={project.molla.info} tech={project.molla.tech} livesrc={project.molla.liveUrl} githubsrc={project.molla.githubUrl} />
                    </Col>
                    <Col sm={12} md={6} lg={4} className='my-2' data-aos="zoom-out">
                        <ProjectCard src={loradaImg} title={project.lorada.title} info={project.lorada.info} tech={project.lorada.tech} livesrc={project.lorada.liveUrl} githubsrc={project.lorada.githubUrl} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Projects

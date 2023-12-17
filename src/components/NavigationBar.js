import React, { useState } from 'react'
import './NavigationBar.css'
import logoImg from '../assets/images/logo.png'
import { Container, Image, Nav, Button, Collapse } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll'
import { faBars, faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'

function NavigationBar() {
    const [open, setOpen] = useState(false);
    const links = document.querySelectorAll(".collapse-menu-link");
    links.forEach((link) => {
        link.addEventListener("click", () => {
            setOpen(false);
        });
    });

    return (
        <header className='py-2 position-sticky top-0 z-3'>
            <Container>
                <Nav>
                    <a className='header-logo' href="bh-rahul.wep.app">
                        <Image src={logoImg} />
                    </a>
                    <div className="d-none d-md-flex align-items-center gap-3 fw-medium">
                        <Link to="Intro" spy={true} duration={800} offset={-150} className='menu-link py-1'>Home</Link>
                        <Link to="AboutMe" spy={true} duration={800} offset={-40} className='menu-link py-1'>About Me</Link>
                        <Link to="Skills" spy={true} duration={800} offset={-40} className='menu-link py-1'>Skills</Link>
                        <Link to="Projects" spy={true} duration={800} offset={-40} className='menu-link py-1'>Projects</Link>
                        <Link to="Contact" spy={true} duration={800} offset={-40} className='menu-link py-1'>Contact</Link>
                    </div>
                    <div className="nav-icon d-none d-lg-flex justify-content-center align-items-center gap-3 fs-5">
                        <a href="/" className="nav-icon d-flex justify-content-center align-items-center p-1">
                            <FontAwesomeIcon icon={faPhone} />
                        </a>
                        <a href="mailto:1103rahul@gmail.com" className="nav-icon d-flex justify-content-center align-items-center p-1">
                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                        </a>
                        <a href="/" className="nav-icon d-flex justify-content-center align-items-center p-1 fs-4">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                    <Button variant='outline-warning' className='toggle-btn d-flex d-md-none justify-content-center align-items-center fs-4' onClick={() => setOpen(!open)} aria-controls="Collapse-menu" aria-expanded={open}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                </Nav>
                <Collapse in={open}>
                    <div id="Collapse-menu" className='py-4'>
                        <div className="collapse-menu-list d-flex flex-column fs-6 fw-medium gap-1">
                            <Link to="Intro" spy={true} duration={800} offset={-350} className='collapse-menu-link rounded'>Home</Link>
                            <Link to="AboutMe" spy={true} duration={800} offset={-300} className='collapse-menu-link rounded'>About Me</Link>
                            <Link to="Skills" spy={true} duration={800} offset={-300} className='collapse-menu-link rounded'>Skills</Link>
                            <Link to="Projects" spy={true} duration={800} offset={-300} className='collapse-menu-link rounded'>Projects</Link>
                            <Link to="Contact" spy={true} duration={800} offset={-290} className='collapse-menu-link rounded'>Contact</Link>
                        </div>
                        <div className="nav-icon d-flex gap-3 fs-5 pt-3">
                            <a href="/" className="nav-icon d-flex justify-content-center align-items-center p-1">
                                <FontAwesomeIcon icon={faPhone} />
                            </a>
                            <a href="mailto:1103rahul@gmail.com" className="nav-icon d-flex justify-content-center align-items-center p-1">
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                            </a>
                            <a href="/" className="nav-icon d-flex justify-content-center align-items-center fs-4 p-1">
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </a>
                        </div>
                    </div>
                </Collapse>
            </Container>
        </header >
    )
}

export default NavigationBar

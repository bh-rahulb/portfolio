import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer id='Footer' className='py-2'>
            <Container>
                <p className="text-center">copyright &copy; {currentYear} Rahul</p>
            </Container>
        </footer>
    )
}

export default Footer

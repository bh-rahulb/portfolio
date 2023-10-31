import React from 'react'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import './ProjectCard.css'

function ProjectCard(props) {
    const techIcons = props.tech?.length ? (
        <>
            {props.tech.slice(0, 4).map((tech, index) => {
                const colorClasses = ["text-dark", "text-secondary", "text-danger", "text-success"];
                const colorClass = colorClasses[index % colorClasses.length];

                return (
                    <span
                        key={index}
                        className={`px-1 ${colorClass} bg-warning rounded`}
                    >
                        {tech}
                    </span>
                );
            })}
        </>
    ) : null;


    return (
        <>
            <Card className='text-white'>
                <div className='m-2 position-relative border border-warning rounded overflow-hidden'>
                    <Card.Img variant="top" src={props.src} />
                    <span className="card-icons d-flex position-absolute z-2">
                        <a href={props.livesrc} className="d-flex justify-content-center align-items-center btn btn-outline-warning rounded-circle fs-5 card-link" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                        <a href={props.githubsrc} className="d-flex justify-content-center align-items-center btn btn-outline-warning rounded-circle fs-4 card-link ms-2" target='_blank' rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </span>
                    <div className="shade"></div>
                </div>
                <Card.Body className='text-center'>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.info}
                    </Card.Text>
                    <span className="d-flex gap-1 fw-medium tech-icons">
                        {techIcons}
                    </span>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProjectCard
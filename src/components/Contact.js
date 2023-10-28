import React, { useRef } from 'react'
import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Col, Container, Row } from 'react-bootstrap'
import *as yup from 'yup'
import { useFormik } from 'formik'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
    const FormSchema = yup.object({
        name: yup.string().min(4).max(15).required("please enter name"),
        email: yup.string().email("invalid email").required("please enter email address"),
        message: yup.string().min(15).required("please enter a message")
    })
    const forminitialValues = {
        name: "",
        email: "",
        message: ""
    }
    const { values, handleChange, errors, touched, handleSubmit, handleBlur } = useFormik({
        initialValues: forminitialValues,
        validationSchema: FormSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
            alert("message sent !")
        }
    })
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        FormSchema.validate(values)
            .then(() => {
                emailjs.sendForm('service_wy4zfx8', 'template_am5kmy8', form.current, '6i7irG5KvOqJp2010')
                    .then((result) => {
                        console.log(result.text);
                        handleSubmit();
                    }, (error) => {
                        console.log(error.text);
                    });
            })
            .catch((validationErrors) => {
                console.error(validationErrors);
                alert("please fill form !")
            });
    };
    return (
        <section id='Contact' className='py-5'>
            <Container>
                <h1 className="text-center display-6 my-3 fw-medium" data-aos="zoom-in">Contact</h1>
                <Row>
                    <Col sm={12} md={12} lg={6} className='my-3' data-aos="zoom-in">
                        <h1 className='fs-5 py-4 text-center'>Get in Touch</h1>
                        <Col sm={12} md={10} className='m-auto'>
                            <form ref={form} onSubmit={sendEmail} className='form'>
                                <div className='d-flex form-control my-3'>
                                    <span className="form-icon d-flex justify-content-center align-items-center">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                    <input type="text" name="name" placeholder='Name' className='flex-fill px-3' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                </div>
                                {errors.name && touched.name ? (<span style={{ color: "red" }}>{errors.name}</span>) : null}
                                <div className='d-flex form-control my-3'>
                                    <span className="form-icon d-flex justify-content-center align-items-center">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <input type="text" name="email" placeholder='Email' className='flex-fill px-3' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                </div>
                                {errors.email && touched.email ? (<span style={{ color: "red" }}>{errors.email}</span>) : null}
                                <textarea name='message' rows={4} placeholder='Your Message here...' className='form-control my-3 p-3' value={values.message} onChange={handleChange} onBlur={handleBlur}></textarea>
                                {errors.message && touched.message ? (<span style={{ color: "red" }}>{errors.message}</span>) : null}
                                <div className="d-flex justify-content-center align-items-center my-2">
                                    <Button type='submit' variant='outline-warning' className='fs-6 fw-medium'>Send Message</Button>
                                </div>
                            </form>
                        </Col>
                    </Col>
                    <Col sm={12} md={12} lg={6} className='my-3' data-aos="zoom-in">
                        <h1 className='fs-5 py-4 text-center'>Follow Me</h1>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="https://github.com/bh-rahulb" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center align-items-center btn btn-outline-warning rounded-circle fs-4 link-icon ms-2">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/bh-rahulb/" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center align-items-center btn btn-outline-warning rounded-circle fs-4 link-icon ms-2">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://www.facebook.com/bh.rahulb" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center align-items-center btn btn-outline-warning rounded-circle fs-4 link-icon ms-2">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://www.instagram.com/bh_rahulb/" target="_blank" rel="noopener noreferrer" className="d-flex justify-content-center align-items-center btn btn-outline-warning rounded-circle fs-4 link-icon ms-2">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact

import React from 'react'
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Formik } from 'formik'
import { Form, Button, Container } from 'react-bootstrap'
import UseEmails from '../../hooks/UseEmails';
import './_contact.scss'
import * as yup from 'yup'


const schema = yup.object().shape({
  email: yup.string().required().email(),
  subject: yup.string().required().min(5),
  message: yup.string().required(),
})


const Contact = () => {
  let navigate = useNavigate();

  const { sendEmail } = UseEmails();

  const send = (data) => {
    sendEmail(data);
    navigate("/", { replace: true });
  }

  return (
    <Container style={{ height: '100vh' }}>

      <Formik
        onSubmit={send}
        validationSchema={schema}
        initialValues={{
          email: '',
          subject: '',
          message: '',
        }}
      >

        {({ handleSubmit, handleChange, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <h1>Contact</h1>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                onChange={handleChange}
              />
              <ErrorMessage name="email" component="div" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="subject"
            >
              <Form.Label>Subject</Form.Label>
              <Form.Control
                name="subject"
                size="lg"
                type="text"
                rows={1}
                onChange={handleChange}
              />
              <ErrorMessage name="subject" component="div" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="message"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                as="textarea"
                rows={3}
                onChange={handleChange}
              />
            </Form.Group>
            <ErrorMessage name="message" component="div" />
            <Button variant="primary" type="submit">
              Send
            </Button>

          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default Contact

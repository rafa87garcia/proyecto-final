import React from 'react'
import { ErrorMessage, Formik } from 'formik'
import { emailAPI } from '../../shared/services'
import './_contact.scss'
import { Row, Form, Col, Button, Container } from 'react-bootstrap'

import * as yup from 'yup'
const schema = yup.object().shape({
  email: yup.string().required().email(),
  subject: yup.string().required().min(5),
  message: yup.string().required(),
})

const { send } = emailAPI

const Contact = () => {
  return (
    <Container  style={{ height: '100vh' }}>

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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                onChange={handleChange}
              />
              <ErrorMessage name="email" component="div" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Subject</Form.Label>
              <Form.Control
                id="subject"
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
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                id="message"
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

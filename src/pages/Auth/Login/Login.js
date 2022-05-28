import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from "yup";

import './_login.scss'
import {Row, Form, Col, Button, Container} from 'react-bootstrap';

const save = (data) => {
  console.log(data);
}

const Login = () => {

  const schema = yup.object().shape({
    email: yup.string()
      .email('Email incorrecto')
      .required('Requerido'),
    password: yup.string()
      .min(2, 'Desmasiado Corto!')
      .max(70, 'Demasiado largo!')
      .required('Requerido'),
  });

  return (
    <>
    <Container style={{height: '100vh'}}>
    
      <Row className='justify-content-md-center'>
        <Col md={6}>

            <Formik
              initialValues={{
                email: '', password: '',
              }}
              validationSchema={schema}
              onSubmit={save}
            >
              {({ handleSubmit, handleChange, errors }) => (
                <Form noValidate onSubmit={handleSubmit} className='login'>
                <Row className='justify-content-md-center'>
                  <h1>Login</h1>

                </Row>
                <Row className="mb-3">
                

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Col>
                      <Form.Label>Email</Form.Label>

                      </Col>     
                      <Col > 
                      <Form.Control name="email"
                          type='email' 
                          onChange={handleChange}

                      />
                      </Col>       
                      

                        {/* <Field
                          name="email"
                          id="email"
                          type="email"
                          onChange={handleChange}
                        /> */}
                        <ErrorMessage name="email" component="div" />

                    </Form.Group>
                      
                  </Row>

                  <Row className="mb-3">
                  
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Col >
                        <Form.Label>Password</Form.Label>
                      </Col>    
                      <Col >

                        <Form.Control name="password"
                            type='password' 
                            onChange={handleChange}

                        />

                        <ErrorMessage name="password" component="div" />  

                      </Col>      

                    </Form.Group>
                      
                  </Row>
                    {/* <Field 
                      name="password"
                      id="password"
                      type="password"
                      onChange={handleChange}
                    />Password
                    <ErrorMessage name="password" component="div" /> */}
                  
                  <Row className='form__button '>
                    <Col className='form__button--padding'>
                      <Button type='submit' variant='outline-primary'>Login</Button>

                    </Col>

                  </Row>
                  {/* <button type='submit'>Login</button> */}
                  <p className="message">New User? <Link to="/register">Create an account</Link></p>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Login;

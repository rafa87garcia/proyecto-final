import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from "yup";
import './_login.scss'
import {Row, Form, Col, Button} from 'react-bootstrap';

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
      <h1>Login</h1>

      <Formik
        initialValues={{
          email: '', password: '',
        }}
        validationSchema={schema}
        onSubmit={save}
      >
        {({ handleSubmit, handleChange, errors }) => (
          <Form noValidate onSubmit={handleSubmit} className='login'>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                          
              <Form.Label>Email</Form.Label>
              <Form.Control name="email"
                  type='email' 
                  onChange={handleChange}

              />

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
            <Form.Group as={Col} controlId="formGridEmail">
                          
              <Form.Label>Password</Form.Label>
              <Form.Control name="password"
                  type='password' 
                  onChange={handleChange}

              />

              <ErrorMessage name="password" component="div" />        

            </Form.Group>
                
            </Row>
              {/* <Field 
                name="password"
                id="password"
                type="password"
                onChange={handleChange}
              />Password
              <ErrorMessage name="password" component="div" /> */}
            
            <br/>
            <Button type='submit' variant='outline-primary' size='lg'>Login</Button>
            {/* <button type='submit'>Login</button> */}
            <p class="message">New User? <a href="#">Create an account</a></p>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default Login;

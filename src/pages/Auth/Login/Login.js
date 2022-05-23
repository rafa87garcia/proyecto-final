import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from "yup";
import './_login.scss'

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
          <Form noValidate onSubmit={handleSubmit} className='login'>Email
            <Field
              name="email"
              id="email"
              type="email"
              onChange={handleChange}
            />
            <ErrorMessage name="email" component="div" />
            <Field 
              name="password"
              id="password"
              type="password"
              onChange={handleChange}
            />Password
            <ErrorMessage name="password" component="div" />
            <br/>
            <button type='submit'>Login</button>
            <p class="message">New User? <a href="#">Create an account</a></p>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default Login;

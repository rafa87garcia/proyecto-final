import React from 'react'
import { ErrorMessage, Form, Formik } from 'formik'
import { emailAPI } from '../../shared/services';
import './_contact.scss'


import * as yup from 'yup';
const schema = yup.object().shape({
  email: yup.string().required().email(),
  subject: yup.string().required().min(5),
  message: yup.string().required(),
});

const { send } = emailAPI;

const Contact = () => {

  return (

    <div className="container" style={{height:'100vh'}}>
      <Formik
        onSubmit={send}
        validationSchema={schema}
        initialValues={{
          email: "",
          subject: "",
          message: "",
        }}
      >
        {({handleSubmit, handleChange, errors}) => (
          <Form  className="form"noValidate onSubmit={handleSubmit}>
            <label htmlFor="email">Correo electrónico:</label>
            <input id="email" name="email" type="email" onChange={handleChange} />
            <ErrorMessage
              name='email'
              component="div"
            />
            <label htmlFor="email">Asunto:</label>
            <input id="subject" name="subject" type="text" onChange={handleChange} />
            <ErrorMessage
              name='subject'
              component="div"
            />
            <label htmlFor="message">Correo electrónico:</label>
            <textarea id="message" name="message" type="textarea" row="10" onChange={handleChange}></textarea>
            <ErrorMessage
              name='message'
              component="div"
            />
            <button name="submit">Enviar</button>
          </Form>
        )}
      </Formik>

    </div>

  )
}

export default Contact
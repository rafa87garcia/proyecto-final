import React from 'react'
import { ErrorMessage, Form, Formik } from 'formik'
import { emailAPI } from '../../shared/services';


import * as yup from 'yup';
const schema = yup.object().shape({
  email: yup.string().required().email(),
  subject: yup.string().required().min(5),
  message: yup.string().required(),
});

const { send } = emailAPI;


const data_send = async (data) => {
  await send(data);
  
}
const Contact = () => {

  return (
    <Formik
      onSubmit={data_send}
      validationSchema={schema}
      initialValues={{
        email: "",
        subject: "",
        message: "",
      }}
    >
      {({ handleSubmit, handleChange, handleReset, errors }) => (
        <Form noValidate onSubmit={handleSubmit} onReset={handleReset}>
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
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  )
}

export default Contact
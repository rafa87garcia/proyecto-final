import { ErrorMessage, Form, Formik, Field } from "formik";
import React from "react";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required().email("dasdasda"),
  name: yup.string().required(),
  password: yup
    .string()
    .required()
    .min(6, "La contraseña debe tener un mínimo de 6 caracteres"),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "La contraseña no coincide"),
});

const save = (data) => {
console.log(data);
}

const Register = () => {

  return (
    <>
      <h1>Registro</h1>
      <Formik
        onSubmit={save}
        validationSchema={schema}
        initialValues={{
          email: "",
          name: "",
          password: "",
          confirmPassword: "",
        }}
      >
        {({ handleSubmit, handleChange, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>

            <label htmlFor="email">Correo electrónico:</label>
            <Field
              onChange={handleChange}
              name="email"
              id="emai"
              type="email"
              placeholder="name@example.com"
            />
            <ErrorMessage name="email" component="div" />

            <label htmlFor="name">Nombre:</label>
            <Field
              onChange={handleChange}
              name="name"
              id="name"
              type="text"
              placeholder="Nombre"
            />
            <ErrorMessage name="name" component="div" />
            <label htmlFor="password">Contraseña:</label>
            <Field
              onChange={handleChange}
              name="password"
              id="password"
              type="password"
              placeholder="Escribe la contraseña"
            />
            <ErrorMessage name="password" component="div" />
            <Field
              onChange={handleChange}
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              placeholder="Repite la contraseña"
            />
            <ErrorMessage name="confirmPassword" component="div"
            />
            <button variant="secondary" type="submit">
              Registrar
            </button>
          </Form>
        )
        }
      </Formik >
    </>
  );
};

export default Register;


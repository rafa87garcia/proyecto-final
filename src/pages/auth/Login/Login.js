import React from 'react';

const handleSubmit = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const form = event.target;

  const [email, password] = new FormData(form).values();
  console.log(email);
  console.log(password);
}

const Login = () => {

  return (
    <form noValidate onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder="name@example.com"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Escribe la contraseña"
        required
      />
      <button type='submit'>Login</button>
    </form>
  );
}
export default Login;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorManager = (props) => {

  const { code } = props;
  const navigate = useNavigate();

  return (
    <>
      {code === "ERR_BAD_REQUEST" ? navigate('/login', { replace: true }) : (<div>dasdas</div>)}
    </>
  );
}

export default ErrorManager;

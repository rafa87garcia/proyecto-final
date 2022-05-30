import { useContext, useEffect, useState } from 'react';
import Context from '../context/StaticContext';
import { add, login } from '../shared/services/user';
import { useNavigate } from 'react-router-dom';

const useUser = () => {

  const navigate = useNavigate();
  const [userCurrent, setUserCurrent] = useState();
  const [token, setToken] = useState();
  const { userContext, setUserContext } = useContext(Context);
  const { tokenContext, setTokenContext } = useContext(Context);

  useEffect(() => {

    (!userContext || !tokenContext) && userLogin();
    userContext && setUserCurrent(userContext);
    tokenContext && setToken(userContext);

  }, [userContext, setUserContext, tokenContext, setTokenContext]);

  const userLogin = async (data) => {
    if (!data) { return; }
    try {
      const { data: { user, token } } = await login(data);

      localStorage.setItem("token", token);
      setTokenContext(token);
      setUserContext(user);
      navigate("/", { replace: true });
    } catch (error) { }
  }

  const userRegister = async (data) => {

    if (!data) { return; }
    try {
      await add(data);
      navigate("/", { replace: true });
    } catch (error) { }
  }

  return {
    userCurrent,
    token,
    userLogin,
    userRegister,
  }
}

export default useUser;
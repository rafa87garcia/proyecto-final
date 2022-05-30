import { useContext, useEffect, useState } from 'react';
import Context from '../context/StaticContext';
import { add, login } from '../shared/services/user';

const useUser = () => {

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

      const tokenStogare = localStorage.setItem("token", token);
      setTokenContext(tokenStogare);
      setUserContext(user);

    } catch (error) { }
  }

  const userRegister = async (data) => {
    if (!data) { return; }
    try {
     await add(data);

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
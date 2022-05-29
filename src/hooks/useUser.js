import { useContext, useEffect, useState } from 'react';
import Context from '../context/StaticContext';
import { login } from '../shared/services/user';

const useUser = () => {

  const [userCurrent, setUserCurrent] = useState();
  const [token, setToken] = useState();
  const { userContext, setUserContext } = useContext(Context);
  const { tokenContext, setTokenContext } = useContext(Context);

  useEffect(() => {
    
    setUserContext(userContext);
    
    userLogin();



  }, [userContext, setUserContext, tokenContext, setTokenContext]);

  const userLogin = async (data) => {
    if (!data) {
      return;
    }

    try {
      const { data: { user, token } } = await login(data);

      localStorage.setItem("token", token);
      setTokenContext(token);
      setUserContext(user);
      
      (!userContext || !tokenContext) && userLogin();
      userContext && setUserCurrent(userContext);
      tokenContext && setToken(userContext);

    } catch (error) { }
  }

  return {
    userCurrent,
    token,
    userLogin,
  }
}

export default useUser;
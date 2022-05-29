import { createContext, useState } from 'react'

const Context = createContext({});

export const StaticContext = ({ children }) => {

  const [productContext, setProductContext] = useState([]);
  const [orderContext, setOrderContext] = useState([]);
  const [userContext, setUserContext] = useState();
  const [tokenContext, setTokenContext] = useState();
  return (
    <Context.Provider
      value={{
        productContext,
        setProductContext,
        orderContext,
        setOrderContext,
        userContext,
        setUserContext,
        tokenContext,
        setTokenContext      
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context;
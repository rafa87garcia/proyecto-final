import { createContext, useState } from 'react'

const Context = createContext({});

export const StaticContext = ({ children }) => {

  const [productContext, setProductContext] = useState([]);
  const [orderContext, setOrderContext] = useState([]);
  const [cartContext, setCartContext] = useState([]);

  const [userContext, setUserContext] = useState();
  const [tokenContext, setTokenContext] = useState();
  return (
    <Context.Provider
      value={{
        productContext,
        setProductContext,
        orderContext,
        setOrderContext,
        cartContext, 
        setCartContext,
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
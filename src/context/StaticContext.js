import { createContext, useState } from 'react'

const Context = createContext({});

export const StaticContext = ({ children }) => {

  const [productContext, setProductContext] = useState([]);
  const [cartContext, setCartContext] = useState([]);

  return (
    <Context.Provider
      value={{
        productContext,
        setProductContext,
        cartContext, 
        setCartContext,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context;
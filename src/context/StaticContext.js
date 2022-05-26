import React, { createContext, useState } from 'react'

const Context = createContext({});

export const StaticContext = ({children}) => {

    const [orderContext, setOrderContext] = useState([]);
    const [productContext, setProductContext] = useState([]);
    const [userContext, setUserContext] = useState(null);

  return (
    <Context.Provider
        value={{productContext,
        setProductContext,
        orderContext,
        setOrderContext,
        userContext,
        setUserContext,}}
    >
        {children}
    </Context.Provider>
  )
}

export default Context
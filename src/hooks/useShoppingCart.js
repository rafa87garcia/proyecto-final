import { useContext, useEffect, useState } from 'react'
import Context from '../context/StaticContext';

const useShoppingCart = () => {

    const [cart, setCart] = useState([]);

    const { cartContext, setCartContext } = useContext(Context);

    useEffect( () => setCart(cartContext), [cartContext]); 

    const addItem = (cartItem) => {
      console.log(cartItem);
        const data = cart.filter(({_id}) => _id !== cartItem._id);
        setCartContext([...data, cartItem]);

    }

  return (
   { cart,
    addItem
  }
  )
}

export default useShoppingCart
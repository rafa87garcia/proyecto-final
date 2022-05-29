import { useContext, useEffect, useState } from 'react'
import Context from '../context/StaticContext';

const useShoppingCart = () => {

    const [cart, setCart] = useState([]);

    const { cartContext, setCartContext } = useContext(Context);

    useEffect( () => setCart(cartContext), [cartContext]); 

    const addItem = (cartItem) => {
     
      const data = cart.filter(({_id}) => _id !== cartItem._id);
      setCartContext([...data, cartItem]);

    }

    const removeItem = (itemID) => {
      const newCart = cart.filter(({_id}) => _id !==itemID)
      // setCartContext([...newCart])
      setCartContext(newCart);
    }

  return (
   { cart,
    addItem,
    removeItem
  }
  )
}

export default useShoppingCart
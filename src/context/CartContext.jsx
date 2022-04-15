import React, { useContext, useState } from 'react'

const CartContext = React.createContext();

export const useCartContext = () => {
    return useContext(CartContext);
}

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        const found = cartItems.find(cartItem => cartItem.ProductID === item.ProductID);

        if(!found) {
            const cartItem = {
                ...item,
                count: 1,
                price: item.Price
            }
            setCartItems([...cartItems, cartItem]);
        } else {
            found.count++;
            found.price = found.price * found.count;
            setCartItems([...cartItems]);
        }
    }

    const deleteItem = (id) => {
        setCartItems(cartItems.filter((item,index) => {
            return index!== id;
        }))
    }

    const store = {
        cartItems,
        setCartItems,
        addItem,
        deleteItem
    }
    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
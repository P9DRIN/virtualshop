import { createContext, useState } from 'react'
import propTypes from 'prop-types'

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [getProductsList, setGetProductsList] = useState([]);
    const [itemsSum, setItemsSum] = useState('');

    
    return(
        <CartContext.Provider value={{ products, setProducts, cartItems, setCartItems, getProductsList, setGetProductsList, itemsSum, setItemsSum }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider

CartProvider.propTypes = { 
    children: propTypes.any,
}.isRequired
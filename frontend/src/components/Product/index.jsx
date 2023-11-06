import { Container, Image, LinkToCart, CartIcon } from './style.js'
import { CartContext } from "../../contexts/cart.jsx";
import { useContext, useEffect } from 'react';



export default function Product({ data, link }){

    const { price } = data;

    const { 
        cartItems,
        setCartItems,
        setGetProductsList,
        getProductsList,
    } = useContext(CartContext)

    useEffect(() => {
        const getList = localStorage.getItem('cart')
        if(getList){
            setGetProductsList(JSON.parse(getList))
            console.log(JSON.stringify(getProductsList))
        }
    }, [])

    const handleAddCart  = () => {
        const localCart = localStorage.getItem('cart')

            cartItems.push(data)
            setCartItems((cartItems) => [...cartItems, data])
            localStorage.setItem('cart', JSON.stringify(cartItems))
            
            console.log(JSON.parse(localCart))

            
    }


    return(
        <>
            <Container>
                <Image>
                    <img src={link} alt='teste'></img>
                </Image>
                <h3>{price}</h3>
                <LinkToCart>
                    <button onClick={handleAddCart}>
                        <CartIcon/>
                    </button>
                </LinkToCart>
            </Container>
        </>
    )
}


import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Item from "../../components/Item";
import { Link } from 'react-router-dom'
import { Container, Layout } from './style.js'
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.jsx";

export default function CartPage(){

    const {
        getProductsList,
        setGetProductsList,
        itemsSum, 
        setItemsSum

    } = useContext(CartContext)

    useEffect(() => {
        const getList = localStorage.getItem('cart')
        if(getList){
            setGetProductsList(JSON.parse(getList))
            console.log(JSON.stringify(getProductsList))
        }
    }, [])

    const totalPrice = getProductsList.reduce((acc, item) => parseInt(item.price) + acc, 0);
    setItemsSum(totalPrice)

    return(
        <>
        <Header/>
            <Container>
                <Layout>
                    
                    {
                    getProductsList ?
                    getProductsList.map((product) => 
               <>
               <Item link={product.photo} key={product._id} data={product}/>
                </>
                    ) : <h1 className="cartEmpty">Cart is empty 😥</h1>
                    }
                {getProductsList ?
                <div className='centralizer'>
                <span className="span">Final price: R$ {itemsSum} </span>
                <Link to='/payment'> <button className="btn">Checkout</button> </Link>
               </div>
               : <></>
               }
                </Layout>
            </Container>
        <Footer/>
        </>
    )
}
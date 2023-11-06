import { useContext, useEffect, useState } from "react";
import Product from "../Product";
import { Container } from './style.js'
import { api }  from "../../services/api";
import { CartContext } from "../../contexts/cart";

export default function Products(){

    const { 
        products,
        setProducts,
    } = useContext(CartContext)

    useEffect(() => {
        api.get("product").then(({ data }) => { 
            setProducts(data.products)
            
    }) 
    },[]);

    return(
        <>
            <Container>
                {products?.map((product) => (
                    <Product
                    key={product._id}
                    data={product}
                    link={product.photo}
                    />
                ))}
           
            </Container>
        </>
    )
}
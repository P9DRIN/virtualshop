import { useEffect, useState } from "react";
import Product from "../Product";
import { Container } from './style.js'
import api from "../../services/api";

export default function Products(){
    const [products, setProduct] = useState([]);
    
    useEffect(() => {
        api.get("product").then(({ data }) => { 
            setProduct(data.products)

    }) //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
        console.log(products)

    return(
        <>
            <Container>
                {products?.map((product) => (
                    <Product
                    key={product._id}
                    price = {product.price}
                    link = {product.photo}
                    />
                ))}
           
            </Container>
        </>
    )
}
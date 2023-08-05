
import { Container, Image, LinkToCart, CartIcon } from './style.js'

export default function Product({ price, link }){
    return(
        <>
            <Container>
                <Image>
                    <img src={link} alt='teste'></img>
                </Image>
                <h3>{price}</h3>
                <LinkToCart>
                    <CartIcon/>
                </LinkToCart>
            </Container>
        </>
    )
}
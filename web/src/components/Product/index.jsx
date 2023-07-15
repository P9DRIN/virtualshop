
import { Container, Image, LinkToCart, CartIcon } from './style.js'

export default function Product(){
    return(
        <>
            <Container>
                <Image/>
                <h3>300$</h3>
                <LinkToCart>
                    <CartIcon/>
                </LinkToCart>
            </Container>
        </>
    )
}
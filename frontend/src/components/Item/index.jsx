import { Container, Image, CloseIcon } from './style.js'

export default function Item({ link, price, quantity }){
    return(
        <>
            <Container>
                <Image>
                    <img src={link} alt='item1' ></img>
                </Image>
                    <h3>Quantity: {quantity}</h3>

                    <h3>{price} $</h3>

                <button className='btn'> <CloseIcon/> </button>
            </Container>
        </>
    )
}
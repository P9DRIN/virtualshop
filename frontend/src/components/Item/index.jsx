import { Container, Image, CloseIcon } from './style.js'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/cart.jsx'


export default function Item({ data, link }){

    const {
        getProductsList,
    } = useContext(CartContext)

    const { id, name, price } = data;

    const handleRemove = () => {
        let selectedItem = getProductsList.findIndex(currentAcc => currentAcc._id == data._id )
        getProductsList.splice(selectedItem, 1)

        localStorage.removeItem('cart')

        localStorage.setItem('cart', JSON.stringify(getProductsList))
    }

    return(
        <>
            <Container key={id}>
                <Image>
                    <img src={link} alt='item1' ></img>
                </Image>
                    <h3>{name}</h3>

                    <h3>R$ {price}</h3>

                <button className='btnC' onClick={handleRemove}> <CloseIcon/> </button>
            </Container>
        </>
    )
}
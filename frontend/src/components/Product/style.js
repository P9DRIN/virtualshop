import styled from 'styled-components';
import { BsFillBagPlusFill } from 'react-icons/bs'


export const Container = styled.div`
    border: 2px solid #A5A5A5;
    height: 350px;
    width: 265px;
    display: flex;
    flex-direction: column;
    transition: 0.20s ease;

    &:hover{
        border: 2px solid #373737;
    }
    & h3{
        justify-content: center;
        display: flex;
        
    }
`
export const Image = styled.div`
    height: 280px;

    & img{
        max-height: 280px;
        max-width: 100%;
    }

`

export const LinkToCart = styled.a`
    display: block;
    height: 36px;
    border-radius: 5px;
    background-color: #4383FF;
    text-decoration: none;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:hover{
        background-color: #3CBC96;
        transition: 0.3s ease-out;
    }
`

export const CartIcon = styled(BsFillBagPlusFill)`
    font-size: 26px;
    color: #fff;
    
`


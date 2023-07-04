import styled from 'styled-components'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiUserCircle } from 'react-icons/bi'


export const Container = styled.header`
    width: 100%;
    height: 65px;
    background-color: #314D66;
    display: flex;
    justify-content: space-between;
    align-items: center;


    & h2{
        color: #fff;
        display: flex;
        
        display: flex;
        align-self: center;
        justify-content: center;
        margin-left: 30px;
        cursor: pointer;
        font-weight: 300;
    }
    & b{
        padding-left: 1px;
    }
`
export const ActionContainer = styled.div`
    
    width: 200px;
    height: 65px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const CartBuyIcon = styled(AiOutlineShoppingCart)`
    color: #bfbfbf;
    font-size: 32px;
    cursor: pointer;
    transition: 0.75s ease-out;
    background-color: #314d66;


    &:hover{
        color: #ffffff;
        
    }
`

export const UserIcon = styled(BiUserCircle)`
    color: #bfbfbf;
    font-size: 32px;
    cursor: pointer;
    transition: 1.25s ease-out;
    

    &:hover{
        color: #ffffff;
        
    }
`;
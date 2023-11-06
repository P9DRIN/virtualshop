import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'

export const Container = styled.div`
    border-top: 2px solid #ccc;
    
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom: 3%;

    & .btnC{
        height: 40px;
        width: 50px;
        justify-content: center;
        align-items: center;
        display: flex;
        background: #314D66;
        outline: 0;
        border: none;
        border-radius: 2px;
        color: #fff;
        margin-right: 5px;
    }
    & .btnC:hover{
        color: #314D66;
        background: #ff5770;
        transition: 0.3s ease-out;
    }
`

export const Image = styled.div`
    width: 100px;
    height: 60px;
    display: flex;
`

export const CloseIcon = styled(AiOutlineClose)`

`
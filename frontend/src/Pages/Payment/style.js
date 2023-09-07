import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const Layout = styled.main`
    padding: 1%;
    border: 2px solid #ccc;
    width: 70%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    & h1{
        font-weight: 300;
        color: #ccc;
    }
`

export const LayoutFooter = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2%;

    & .btn{
        height: 50px;
        width: 100px;
        background: #314D66;
        outline: 0;
        border: none;
        border-radius: 2px;
        color: #fff;
        margin-right: 5px;
    }
    & .btn:hover{
        color: #000;
        background: #3d9ef5;
        transition: 0.3s ease-out;
        cursor: pointer;
    }
    & .span{
        color: #314D66;
        font-weight: 400;
        border-bottom: 1px solid #e6e6e6;
    }
`
export const LayoutAddress = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    flex-direction: column;
    gap: 5px;
    
    & .input{
        width: 300px;
        height: 20px;
        outline: 0;
        border: 2px solid #ccc;
        background: none;
    }
`
export const LayoutPayament = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    flex-direction: column;
    gap: 5px;

    & .input{
        width: 300px;
        height: 20px;
        outline: 0;
        border: 2px solid #ccc;
        background: none;
    }
`
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
    flex-direction: column;
`
export const Layout = styled.main`
    border: 1px solid #ccc;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    & .cartEmpty{
        padding: 25%;
        color: #314D66;
    }
    & .centralizer{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        gap: 25px;
        margin-right: 15px;
        
        
    }
    & .btn{
        height: 50px;
        width: 100px;
        background: #314D66;
        outline: 0;
        border: none;
        border-radius: 2px;
        color: #fff;
        margin-right: 10px;
        margin-bottom: 5px;
        
        
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

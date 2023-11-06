import { styled } from 'styled-components'

export const Layout = styled.div`
    display: flex;
    height: 80vh;
    border: none;
    align-items: center;
    justify-content: center;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 35px;
    justify-content: center;
    align-items: center;

    width: 350px;
    height: 500px;

    background-color: #f5f3ed;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;

    & input{
        background: none;
        outline: none;
        border-bottom: 2px solid #ccc;
        border-top: none;
        border-left: none;
        border-right: none;

        padding: 2px;

    }

    & button{
        width: 125px;
        height: 30px;
        background: #314D66;
        border-radius: 5px;
        border: none;
        color: #fff;
        box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        
    }
    & button:hover{
        background: #5d778f;
    }
    
    & i{
        text-decoration: none;
        font-size: 10px;
        width: 170px;
        display: flex;
        gap: 5px;
        align-items: center;
        justify-content: center;
        
    }
`
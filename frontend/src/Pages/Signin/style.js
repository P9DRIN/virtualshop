import { styled } from 'styled-components'

export const Layout = styled.div`
    display: flex;
    height: 80vh;
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
        font-weight: 400;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
        cursor: pointer;

    }
    & button:hover{
        background: #5d778f;
    }
    & i{
        text-decoration: none;
        font-size: 10px;
        width: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

   
`

    export const RegisterBox = styled.div`
        display: flex;
        width: 80%;
        align-items: center;
        justify-content: center;

    & p{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-size: 12px;

    }
        & .signup{
        color: #314D66;
    }
    `
import styled from 'styled-components'
import { SlLogout } from 'react-icons/sl'


export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    gap: 20px;

& .teste{
    width: 30px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #314d66;
    color: #bfbfbf;
    transition: 1.25s ease-out;
    
    :hover{
        color: #ffffff;
    }
}
`
export const LogoutIcon = styled(SlLogout)`
    display: flex;
    justify-content: center;
    font-size: 20px;
    color: #ccc;
    cursor: pointer;
`

export const Layout = styled.main`
    display: flex;
    flex-direction: column;
    margin-right: 5%;
    padding: 40px 50px;

    width: 90%;
    height: 400px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid #ccc;


    & .name{
        font-size: 48px;
        border-bottom: 3px solid #ccc;
        padding-bottom: 5px;
    }
    & .form{
        display: flex;
        flex-direction: column;        
    }
    


    & .emailLayout{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-bottom: 10px;
        padding-top: 5px;
        width: fit-content;
    }
    & .addressLayout{
        display: flex;
        gap: 15px;
        flex-direction: column;
        justify-content: space-between;
        width: fit-content;
    }
    & .input{
        outline: 0;
        border: none;
        background-color: #ccc;
    }

    & .save{
        align-items: center;
        align-self: center;
        justify-content: center;
        width: 300px;
        height: 25px;

        outline: 0;
        border: none;
        border-radius: 5px;
        background-color: #314d66;
        color: #fff;
    }
    
  
`
import styled from 'styled-components'
import { SlLogout, SlRefresh } from 'react-icons/sl'


export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
   & .btnOut{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    background: transparent;
    
    color: #111;
    
    border: none;
    cursor: pointer;
   }
   & .btnOut:hover{
        color: rgba(0, 0, 0, 0.5);
   }

   
`
export const RefreshBox = styled.div`
    width: 100%;
    height:  8vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & .refresh{
    width: 4%;
    height: 40px;
    margin-right: 30px;
    background: #314D66;
    border: none;
    
   }
   
`
export const Refresh = styled(SlRefresh)`
    font-size: 26px;
    color: white;
    transition: 1s ease-in-out;
    cursor: pointer;

    &:hover{
        color: #a9b7c2;
        transform: rotate(0.6turn);
    }
`



export const LogOut = styled(SlLogout)`
`


export const ContentBox = styled.main`
    height: 70vh;
    width: 80%;
    border-top: 1px solid rgba( 0, 0, 0, 0.2);
    border-left: 1px solid rgba( 0, 0, 0, 0.2);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    
    
    
    & .layout{
        display: flex;
        flex-direction: column;
        margin-top: 5vh;
        margin-left: 3vw;
        color: #314D66;
        font-weight: 400;
        
    }
    & .name{
        font-size: 64px;
        padding-bottom: 1vh;
    }
    & .form{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    & .emailLayout{
        width: 90%;
        border-bottom: 1px solid #ccc;
        padding-bottom: 3vh;
    }
    & .addressLayout{
        width: 90%;
        padding-bottom: 8vh;
    }
    & .input{
        width: 100%;
        outline: 0;
        background: transparent;
        border: 1px solid #a5b6c4;
    }
    & .input:hover{
        border: 1px solid #314D66;
    }
    & .input:focus{
        border: 1px solid #314D66;
    }

    & .save{
        margin-left: 20vw;
        height: 4vh;
        width: 40vw;
        border: none;
        background: #314D66;
        color: white;
        transition: 0.3s ease-in-out;
        cursor: pointer;
    }
    & .save:hover{
        background: #a5b6c4;
        
    }
`


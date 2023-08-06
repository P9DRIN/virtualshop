import styled from 'styled-components'

export const Container = styled.div`
        margin: 0;
        padding: 0;

        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        font-family: 'Roboto Slab', serif;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 99vw;
        height: 98vh;

        overflow: hidden;
        
        & h1{
                font-size: 128px;
                color: #565656;
                
        }
        & p, i{
                color: #171717;
                
        }
        & p{
                
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 15px;
                padding-bottom: 15px;
                
        }
        & a{
                text-decoration: none;
                color: #424242;
                border: 2px solid #d6d6d6;
                background-color: #d6d6d6;
                border-radius: 15px;
                width: 155px;
                display: flex;
                justify-content: center;
                gap: 4px;
        }
        & a:hover{
                background-color: rgb(214,214,214);
                background: linear-gradient(4deg, rgba(214,214,214,1) 0%, rgba(237,237,237,1) 100%);
                border-color: rgb(214,214,214);
                transition: 2s ease;
        }
        
        & b{
                color: #242424;
        }
        
`
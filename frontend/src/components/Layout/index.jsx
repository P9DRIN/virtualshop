import React from 'react';
import Header from '../Header';
import Footer from '../Footer'
import { Container } from './style'
import Products from '../Products';

export default function Layout(){
    return(
        <>
            <Container>
            <Header/>
                <Products/>
            <Footer/>
            </Container>
        </>
    )
}
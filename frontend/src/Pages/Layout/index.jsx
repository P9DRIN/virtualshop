import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { Container } from './style'
import Products from '../../components/Products';

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
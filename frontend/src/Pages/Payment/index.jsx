import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, Layout, LayoutFooter, LayoutAddress, LayoutPayament } from './style.js'

export default function Payment(){
    return(
        <>
            <Header/>
                <Container>
                    <Layout>
                        <h1>Payament</h1>

                    <LayoutAddress>
                        Address
                        <input type='text' placeholder="street" className="input"/>
                        <input type='text' placeholder="street number" className="input"/>
                        <input type='text' placeholder="zipcode" className="input" />
                    </LayoutAddress>
                    <LayoutPayament>
                        Payament method
                    <input type='text' placeholder="cardNumber" className="input" />
                    
                    </LayoutPayament>
                    <LayoutFooter>
                        <span className="span">Final price: 300$</span>
                        <button className="btn">Pay</button>
                    </LayoutFooter>
                    </Layout>
                </Container>
            <Footer/>
        </>
    )
}
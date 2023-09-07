import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Item from "../../components/Item";
import { Link } from 'react-router-dom'
import { Container, Layout, FinalPriceCont } from './style.js'

export default function CartPage(){
    return(
        <>
        <Header/>
            <Container>
                <Layout>
                <Item link="https://images.tcdn.com.br/img/img_prod/451859/camiseta_adulta_manga_curta_gola_redonda_preta_10613733_1_5bceae3292d360141a0d4b872fbd46ec.jpg" quantity="2" price="30"/>
                <Item link="https://images.tcdn.com.br/img/img_prod/451859/camiseta_adulta_manga_curta_gola_redonda_preta_10613733_1_5bceae3292d360141a0d4b872fbd46ec.jpg" quantity="2" price="30"/>
                <Item link="https://images.tcdn.com.br/img/img_prod/451859/camiseta_adulta_manga_curta_gola_redonda_preta_10613733_1_5bceae3292d360141a0d4b872fbd46ec.jpg" quantity="2" price="30"/>
                <Item link="https://images.tcdn.com.br/img/img_prod/451859/camiseta_adulta_manga_curta_gola_redonda_preta_10613733_1_5bceae3292d360141a0d4b872fbd46ec.jpg" quantity="2" price="30"/>
                <Item link="https://images.tcdn.com.br/img/img_prod/451859/camiseta_adulta_manga_curta_gola_redonda_preta_10613733_1_5bceae3292d360141a0d4b872fbd46ec.jpg" quantity="2" price="30"/>
                <Item link="https://images.tcdn.com.br/img/img_prod/451859/camiseta_adulta_manga_curta_gola_redonda_preta_10613733_1_5bceae3292d360141a0d4b872fbd46ec.jpg" quantity="2" price="30"/>
                <Item link="https://images.tcdn.com.br/img/img_prod/451859/camiseta_adulta_manga_curta_gola_redonda_preta_10613733_1_5bceae3292d360141a0d4b872fbd46ec.jpg" quantity="2" price="30"/>
                <FinalPriceCont>
                    <span className="span">Final price: 300$</span>
                    <Link to='/payment'> <button className="btn">Checkout</button> </Link>
                </FinalPriceCont>
                </Layout>
            </Container>
        <Footer/>
        </>
    )
}
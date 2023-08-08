import { Container, CartBuyIcon, ActionContainer, UserIcon } from './style';
import { Link } from 'react-router-dom'


export default function Header(){
    return(
        <>
            <Container>
                <Link to="/"><h2>Virtual<b>SHOP</b></h2></Link>
                    <ActionContainer>
                       <Link to='/cart'> <CartBuyIcon/> </Link>
                        <Link to='/profile'> <UserIcon/> </Link>            
                    </ActionContainer>
                </Container>
        </>
    )
}
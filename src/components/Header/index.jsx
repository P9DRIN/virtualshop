import { Container, CartBuyIcon, ActionContainer, UserIcon } from './style'


export default function Header(){
    return(
        <>
            <Container>
                <h2>Virtual<b>SHOP</b></h2>
                    <ActionContainer>
                        <CartBuyIcon/>
                        <UserIcon/>            
                    </ActionContainer>
                </Container>
        </>
    )
}
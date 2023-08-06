
import { Container } from './errorStyle'

export default function ErrorPage(){
    

    return(
        <>
            <Container>
                <h1>...Ooops! 😓</h1>
                <p>Sorry, an unexpected error has ocurred: 
                <br/><i>Not found or you do not have permission. </i>
                </p>
                <a href="/">Back to <b>home</b></a>
            </Container>
        </>
    )
}
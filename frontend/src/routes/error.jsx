import { useRouteError } from 'react-router-dom';
import { Container } from './errorStyle'

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return(
        <>
            <Container>
                <h1>...Ooops! 😓</h1>
                <p>Sorry, an unexpected error has ocurred: 
                <br/><i> {error.statusText || error.message}</i>
                </p>
                <a href="/">Back to <b>home</b></a>
            </Container>
        </>
    )
}
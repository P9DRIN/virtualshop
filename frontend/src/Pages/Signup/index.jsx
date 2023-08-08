import Header from "../../components/Header";
import Footer from '../../components/Footer'
import { Layout, Form } from './style.js'
import { Link } from 'react-router-dom'

export default function SignupPage(){
    return(
        <>
            <Header/>
            <Layout>
                <Form>
                    <input type='text' name='email' placeholder="E-mail"/>
                    <input type="password" name='password' placeholder='Password'/>
                    <button type="submit">Register</button>
                    <i>Back to<Link to='/login'> Login</Link> page</i>
                </Form>
            </Layout>
            <Footer/>
        </>
    )
}
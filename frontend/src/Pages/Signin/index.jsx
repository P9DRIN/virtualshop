import Header from "../../components/Header";
import Footer from '../../components/Footer'
import { Layout, Form } from './style.js'
import { Link } from 'react-router-dom'

export default function SigninPage(){
    return(
        <>
            <Header/>
            <Layout>
                <Form>
                <label>
                    <input type='text' name='email' placeholder="E-mail"/>
                </label>
                <label>
                    <input type="password" name='password' placeholder='Password'/>
                </label>
                    <button type="submit">LOGIN</button>
                <i>Dont have an account?<Link to='/register'> Sign up!</Link></i>
                </Form>
            </Layout>
            <Footer/>
        </>
    )
}
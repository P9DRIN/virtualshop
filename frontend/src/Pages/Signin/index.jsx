import { useContext, } from "react";
import { Link } from 'react-router-dom';
import { Layout, Form, RegisterBox } from './style.js';
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import Footer from '../../components/Footer';

const SigninPage = () => {    
    
    const {
        setEmail,
        setPassword,
        handleLogin,
        error,
    } = useContext(AuthContext)

    function emailHandler(e){
        setEmail(e.target.value)
    }
    function passwordHandler(e){
        setPassword(e.target.value)
    }

    return(
        <>
            <Header/>
            <Layout>
                <Form>
                    <input type='text' placeholder="E-mail" onChange={emailHandler} autocomplete="username"
             required/>
                    <input type="password" placeholder='Password' onChange={passwordHandler} autocomplete="current-password" required/>
                    <button onClick={handleLogin}>LOGIN</button>
                <RegisterBox>
                <div>Dont have an account?<Link to='/register'> <p className='signup'> Sign up! </p></Link></div>

                </RegisterBox>
                <i>{error}</i>
                </Form>

            </Layout>
            <Footer/>
        </>
    )
}

export default SigninPage;
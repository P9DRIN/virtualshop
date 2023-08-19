import Header from "../../components/Header";
import Footer from '../../components/Footer'
import { Layout, Form } from './style.js'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from "../../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";


const SignupPage = () => {
    
        const { 
            handleSignup, 
            email,
            setEmail,
            password, 
            setPassword,
            error,
            setError  
        } = useContext(AuthContext);
    
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
                    <input type='text' placeholder="E-mail" onChange={emailHandler} />
                    <input type="password" placeholder='Password' onChange={passwordHandler} />
                    <button onClick={handleSignup} >Register</button>
                    <i>Back to <Link to='/login'> Login</Link> page</i>
                    <i>{error}</i>
                </Form>
            </Layout>
            <Footer/>
        </>
    )
}
export default  SignupPage;
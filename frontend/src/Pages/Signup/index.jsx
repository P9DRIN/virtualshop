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
            setEmail,
            setPassword,
            error,
            setError,
            setStreet,
            setHouseNumber,
            setZipcode,
            setName,
        } = useContext(AuthContext);
    
        function emailHandler(e){
            setEmail(e.target.value)
        }
        function passwordHandler(e){
            setPassword(e.target.value)
        }
        function streetHandler(e){
            setStreet(e.target.value)
        }
        function numberHandler(e){
            setHouseNumber(e.target.value)
        }
        function zipcodeHandler(e){
            setZipcode(e.target.value)
        }
        function nameHandler(e){
            setName(e.target.value)
        }



    return(
                <>
            <Header/>
            <Layout>
                <Form>
                    <input type='text' placeholder="E-mail" onChange={emailHandler} />
                    <input type="password" placeholder='Password' onChange={passwordHandler} />
                    <input type='text' placeholder='Name' onChange={nameHandler}/>
                    <input type='text' placeholder="Street" onChange={streetHandler}/>
                    <input type='text' placeholder='Street number' onChange={numberHandler}/>
                    <input type='text' placeholder='Zipcode' onChange={zipcodeHandler}/>
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
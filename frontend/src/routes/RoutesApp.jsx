import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../Pages/Layout';
import ErrorPage from './error'
import SigninPage from '../Pages/Signin'
import SignupPage from '../Pages/Signup';

const Private = ({ Item }) => {
    const signed = false;

    
}


const RoutesApp = () => {
    return(
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path='/' element={<Layout/>} errorElement={<ErrorPage/>}/>
                    <Route path='*' element={<ErrorPage/>}/>                    
                    <Route path='/login' element={<SigninPage/>}/>
                    <Route path='/register' element={<SignupPage/>}/>
                </Routes>
            </Fragment>
        </Router>
    )
}

export default RoutesApp;
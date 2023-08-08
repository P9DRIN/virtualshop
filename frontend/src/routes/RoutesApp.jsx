import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from '../Pages/Layout';
import ErrorPage from './error'
import SigninPage from '../Pages/Signin'
import SignupPage from '../Pages/Signup';
import CartPage from '../Pages/Cart';
import AccountPage from '../Pages/Account';

const Private = ({ Item }) => {
    const signed = false;
    
    return signed > 0 ? <Item/> : <SigninPage/>;
}


const RoutesApp = () => {
    return(
        <Router>
            <Fragment>
                <Routes>

                    <Route path='*' element={<ErrorPage/>}/>                    
                    <Route exact path='/' element={<Layout/>} />
                    
                    <Route exact path='/login' element={<SigninPage/>}/>
                    <Route exact path='/register' element={<SignupPage/>}/>
                    <Route exact path='/cart' element={<Private Item={CartPage}/>}/>
                    <Route exact path='/profile' element={<Private Item={AccountPage}/>}/>

                </Routes>
            </Fragment>
        </Router>
    )
}

export default RoutesApp;
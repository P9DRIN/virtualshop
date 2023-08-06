import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import ErrorPage from './error'

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>} />
                    
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Container, ContentBox, LogOut, RefreshBox, Refresh } from './style.js'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AccountPage(){

    const { user, Logout, UpdateUser, updateAccount } = useContext(AuthContext);
    
    const [ userEmail, setUserEmail ] = useState(user.email)
    const [ userStreet, setUserStreet ] = useState(user.street)
    const [ userHouseNumber, setUserHouseNumber] = useState(user.housenumber)
    const [ userZipCode, setUserZipCode ] = useState(user.zipcode)
    
        const handleLogout = () => {
            Logout();
        }

        function handleStreetInput(e){
            setUserStreet(e.target.value)
        }
        function handleHouseNumberInput(e){
            setUserHouseNumber(e.target.value)
        }
        function handleZipCodeInput(e){
            setUserZipCode(e.target.value)
        }

        function handleSave(e){
            e.preventDefault()
            UpdateUser(user._id, userEmail, userStreet, userHouseNumber, userZipCode)
            
        }

    return(
        <>
        <Container>
        
        <Header/>
            <button className='btnOut' onClick={handleLogout}><LogOut/></button>
        
            
        <ContentBox>
        <RefreshBox>
            <button className='refresh' onClick={updateAccount} ><Refresh/></button>
        </RefreshBox>
        <div key={user._id} className='layout'>
        <h1 className='name' >{user.name}</h1>
        <form className='form'>
            <label className='addressLayout'>
                Address<p>Street</p><input value={userStreet} onChange={handleStreetInput} className='input'/>
                <p>Number</p><input value={userHouseNumber} onChange={handleHouseNumberInput} className='input'/>
                <p>Zipcode</p><input value={userZipCode} onChange={handleZipCodeInput} className='input'/>
            </label>
            <button className='save' onClick={handleSave}>Save</button>
        </form>
        </div>


        </ContentBox>

        <Footer/>
        </Container>
        
        </>
        
            
        

    )
}
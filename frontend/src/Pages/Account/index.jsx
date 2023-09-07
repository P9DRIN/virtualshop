import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Container, LogoutIcon, Layout } from './style.js'
import { getUsers } from '../../services/api';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function AccountPage(){

    const { Logout, email, user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUsers().then(({ data }) => {
            setUsers(data.account)
            setLoading(false)
        }) 
    }, [])

        const handleLogout = () => {
            Logout()
        }

        if(loading){
            return <div className="loading">Loadin...</div>
        }
    
    return(
        <>
        <Header/>
            <Container>
                <button onClick={handleLogout} className='teste'> <LogoutIcon/></button>

            <Layout>

            { 
            Array.isArray(users) 
                ? users?.map((value) => (
                    

                 <div key={user._id} className='layout'>
                <h1 className='name'>{value.name}</h1>
                
                <form className='form'>
                <label className='emailLayout'>
                    Email<input value={value.email} className='input'></input>
                </label>
                <label className='addressLayout'>Address
                    <p>Street:</p><input value={value.street} className='input'></input>
                    Number: <input value={value.housenumber} className='input'></input>
                    Zipcode: <input value={value.zipcode} className='input'></input>
                </label>
                <button className='save'>Save</button>
                </form>
                </div>
                
                
            )
            )
            : <h1>Account not found</h1>
        }
    

            </Layout>
            
            </Container>
        <Footer/>
        
        </>
        
            
        

    )
}
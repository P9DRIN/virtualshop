import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';


export default function AccountPage(){

    const { Logout } = useContext(AuthContext);

    const handleLogout = () => {
        Logout()
    }

    return(
        <div>
            Pagina da conta do usuario
            <button onClick={handleLogout}>Logout</button>    
        </div>

    )
}
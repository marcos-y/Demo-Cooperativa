import React from 'react'
import {
    Navigate,
} from "react-router-dom";

const PrivateRoute = ({children}) =>{

    const useAuth = () =>{       
        const isAuth = sessionStorage.getItem('isAuth');
        if (isAuth){
            return true;
        }
    }

    const auth = useAuth();
    return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;
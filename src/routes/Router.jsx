import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login/Login';
import Menu from '../pages/Menu/Menu';
import KilosFinales from '../pages/Tablas/KilosFinales';
import Autorizaciones from '../pages/Tablas/Autorizaciones';
import EstadoCuentas from '../pages/Tablas/EstadoCuentas';
import Ayuda from '../pages/Ayuda/Ayuda';

const Router = () => {

    const listRoutes = [
        {
            id: 1,
            path:"/menu",
            component: <Menu/>,
        },
        {
            id: 2,
            path:"/kilos-finales",
            component: <KilosFinales/>,
        },
        {
            id: 3,
            path:"/autorizaciones",
            component:   <Autorizaciones/>,
        },
        {
            id: 4,
            path:"/estado-cuentas",
            component: <EstadoCuentas/>,
        },
        {
            id: 5,
            path:"/ayuda",
            component: <Ayuda/>,
        }
    ] 
    
    //console.log(listRoutes);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    
                    {/*
                    listRoutes.map((route)=>{
                        <Route key={route.id} path={route.path} element={
                        <PrivateRoute>
                            {route.component}
                        </PrivateRoute>
                        }/>
                    })
                    */}

                    <Route  path={"/menu"} element={
                    <PrivateRoute>
                        <Menu/>
                    </PrivateRoute>
                    }/>

                    <Route path={"/kilos-finales"} element={
                    <PrivateRoute >
                        <KilosFinales />
                    </PrivateRoute>
                    }/>

                    <Route path={"/autorizaciones"} element={
                    <PrivateRoute>
                        <Autorizaciones />
                    </PrivateRoute>
                    }/>

                    <Route path={"/estado-cuentas"} element={
                    <PrivateRoute>
                        <EstadoCuentas/>
                    </PrivateRoute>
                    }/>

                    <Route path={"/ayuda"} element={
                    <PrivateRoute >
                        <Ayuda/>
                    </PrivateRoute>
                    }/>

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;
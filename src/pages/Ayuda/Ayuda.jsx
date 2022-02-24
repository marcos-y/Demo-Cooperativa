import React from 'react';
import Drawer from '../../Components/Drawer/Drawer';
import CancelIcon from '@mui/icons-material/Cancel';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BuildIcon from '@mui/icons-material/Build';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '../../Images/logosmall.jpg';

const Ayuda = () => {

    const isDarkMode = sessionStorage.getItem('isDarkMode');

    const icons = [
        {
            ico: <CancelIcon style={{fontSize:'150px'}}></CancelIcon>,
            text:'Darme de baja',
        },
        {
            ico: <LockOpenIcon style={{fontSize:'150px'}}></LockOpenIcon>,
            text:'Cambiar mi contraseña o nombre de usuario',
        },
        {
            ico: <QuestionAnswerIcon style={{fontSize:'150px'}}></QuestionAnswerIcon>,
            text:'Consultas mas frecuentes',
        },
        {
            ico: <BuildIcon style={{fontSize:'150px'}}></BuildIcon>,
            text:'Soporte técnico',
        },
        {
            ico: <MenuBookIcon style={{fontSize:'150px'}}></MenuBookIcon>,
            text:'Libro de quejas',
        },
        {
            ico: <SettingsApplicationsIcon  style={{fontSize:'150px'}}></SettingsApplicationsIcon>,
            text:'Otros servicios',
        },
        {
            ico: <WhatsAppIcon style={{fontSize:'150px'}}></WhatsAppIcon>,
            text: 'WhatsApp'
        },
    ]

    const handleClick = () =>{
        alert('hola');
    }

    return (
        <>
        <div style={{display:'flex',flexDirection:'column',backgroundColor: isDarkMode? 'black' : null}}>

            <Drawer style={{float:'left',align:'left'}}></Drawer>

            <h1 style={{fontFamily:'roboto', color: isDarkMode? 'white' : null}}>¿Como podemos ayudarte?</h1>

            <div style={{display:'flex',justifyContent:'space-around'
            ,flexWrap:'wrap',maxWidth:'1200px',margin:'auto',marginBottom:'50px'}}>
                {
                    icons.map((index) => (
                        <div key={index.text} onClick={handleClick} style={{cursor:'pointer',
                        marginLeft:'10px',marginRight:'10px',backgroundColor:'white',marginTop:'30px',
                        boxShadow: '4px 3px 5px 1px #969696', maxWidth:'200px',width:'100%'
                        ,borderRadius:5,padding:'20px'}}>
                            {index.ico}                
                        <h3 style={{fontFamily:'roboto'}}>{index.text}</h3>
                </div>
                ))}
                
                <div onClick={handleClick} style={{cursor:'pointer',marginTop:'30px',
                backgroundColor:'white',marginLeft:'10px',marginRight:'10px',
                boxShadow: '4px 3px 5px 1px #969696', maxWidth:'200px',width:'100%'
                ,borderRadius:5,padding:'20px'}}>
                    <img src={logo} style={{maxWidth:'150px'}}></img>
                    <h3 style={{fontFamily:'roboto'}}>Acerca de Nosotros</h3>
                </div>
            </div>
        </div>

        </>
    )
}

export default Ayuda;
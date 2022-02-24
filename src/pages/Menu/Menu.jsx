import { display, textAlign } from '@mui/system';
import React from 'react';
import Drawer from '../../Components/Drawer/Drawer';
import Background from '../../Images/logotitle.jpg';

const Menu = () =>{

    const isDarkMode = sessionStorage.getItem('isDarkMode');

    return(
        <>
        <div style={{display:'flex',flexDirection:'column', backgroundColor: isDarkMode ? 'black' : null}}>
            <Drawer style={{float:'left',align:'left', backgroundColor: isDarkMode ? 'black' : null}}>
            </Drawer>
            <img src={Background} style={{maxWidth:'500px',
            margin:'auto',padding:'20px',textAlign:'center',marginTop:'100px'}}></img>
        </div>
        </>
    )
}

export default Menu;
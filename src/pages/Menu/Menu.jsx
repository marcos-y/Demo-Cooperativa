import React from 'react';
import Drawer from '../../Components/Drawer/Drawer';
import Background from '../../Images/logotitle.jpg';

const Menu = () =>{

    return(
        <>
        <div style={{display:'flex',flexDirection:'column'}}>
            <Drawer style={{float:'left',align:'left'}}>
            </Drawer>
            <img alt="logo" src={Background} style={{maxWidth:'500px',
            margin:'auto',padding:'20px',textAlign:'center',marginTop:'100px'}}></img>
        </div>
        </>
    )
}

export default Menu;
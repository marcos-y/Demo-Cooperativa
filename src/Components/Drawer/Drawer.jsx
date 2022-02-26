import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HelpIcon from '@mui/icons-material/Help';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import Logo from '../../Images/logosmall.jpg';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };

    const icons = [{
        index: 0,
        icon: <AttachMoneyIcon />, 
        text: 'Kilos finales',
        route: '/kilos-finales'
    },
    {
        index:1,
        icon: <MailIcon/>,
        text: 'Autorizaciones',
        route:'/autorizaciones',
    },
    {
        index:2,
        icon: <AccountBalanceWalletIcon/>,
        text: 'Estado de cuentas',
        route:'/estado-cuentas'
    }
    ]

    const icons2 = [
        {
            index:3,
            icon: <HelpIcon/>,
            text:'Ayuda',
            route:'/ayuda',
        },
        {
            index:4,
            icon:<ExitToAppIcon/>,
            text:'Cerrar sesión',
            route: '/',
        },
    ]

    const handleClick2 = () =>{
        sessionStorage.clear();
    }
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {icons.map((index) => (
            <Link  key={index.text} style={{textDecoration:'none',color:'black'}}
             to={index.route}>
            <ListItem button>
              <ListItemIcon>
                {index.icon}
              </ListItemIcon>
              <ListItemText primary={index.text} />
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {icons2.map((index) => (
            <Link  key={index.text} style={{textDecoration:'none',color:'black'}}
             to={index.route}>
            <ListItem button onClick={index.index===4 ? handleClick2 : null }>
              <ListItemIcon>
                {index.icon}
              </ListItemIcon>
              <ListItemText primary={index.text} />
            </ListItem>
            </Link>
          ))}
        </List>
        <img alt="logo" src={ Logo} style={{maxWidth:'210px',marginTop:'55px'}}></img>
        <div  style={{padding:'10px',margin:'auto'}} >
        <h4 style={{fontFamily:'roboto',fontWeight:'bold' }}
        >Cooperativa agropecuaria unión y progreso LTDA.
        </h4>
        </div>
      </Box>
    );
  
    return (
      <div style={{float:'left'}}>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button variant="outlined" style={{marginBottom:'10px',marginTop:'10px',marginLeft:'10px'
            ,float:'left'}} size="large" onClick={toggleDrawer(anchor, true)}>{'Menu Principal'}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  }
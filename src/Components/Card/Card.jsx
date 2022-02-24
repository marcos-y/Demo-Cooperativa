import React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Logo from '../../Images/logosmall.jpg';
import TextField from '@mui/material/TextField';
import TextfieldPassword from '../../Components/Textfields/TextfieldPassword';
import { Link } from 'react-router-dom';
  
const Card = (props) =>{

  return(
    <Box sx={{backgroundColor:'white', maxWidth:320, borderRadius:5,marginTop:2,marginBottom:5,
    boxShadow: '4px 3px 5px 1px #969696'}}>
    <React.Fragment>
      <CardContent style={{backgroundColor:'white', borderRadius:5}}>
        <Typography variant="h5" component="div" fontFamily='roboto'>
          Bienvenido!
        </Typography>
        <Typography variant="h6" fontFamily='roboto'>
        Acceso para Productores, Corredores, Cooperativas, Acopiadores y Consignatarios.
        </Typography>
        <CardMedia
        component="img"
        height="250"
        image={Logo}
        alt="Paella dish"
      />
      </CardContent>
      <TextField onChange={props.handleChangeUser} value={props.userEmail}
       id="outlined-basic" label="Email" variant="outlined" style={{marginTop:'5px'}} />
      <TextfieldPassword onClick={props.onClick} password={props.password} setPass={props.setPass}></TextfieldPassword>
      <CardActions style={{display:'flex',justifyContent:'center',martinTop:'10px'}}>
            <Button onClick={props.onClick}  color="success" variant="contained" size="large">Entrar</Button>
      </CardActions>
    </React.Fragment>
    <div style={{marginBottom:'15px'}}>
    <Link  to="/recuperar-contraseña">Olvidaste tu contraseña?</Link>
    </div>
    </Box>
    )
}
  
export default Card;



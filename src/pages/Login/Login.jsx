import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Card from '../../Components/Card/Card';

const Login = () =>{

    const [password,setPassword] = useState('');
    const [userEmail,setUserEmail] = useState('');

    const navigate = useNavigate();

    const handleChangeUser = (event) => setUserEmail(event.target.value);

    const setPass = (props) =>{
        setPassword(props);
    }

    const handleClick = () =>{
      if((userEmail==='marcos@gmail') && (password==='123')){        
        sessionStorage.setItem('userEmail', userEmail);
        sessionStorage.setItem('password', password);
        sessionStorage.setItem('isAuth',true);
        navigate('/menu');
      }else{
          alert('contraseña o usuario incorrectos');
      }
    }

return(
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#F2F2F2',padding:'10px'}}>
        <Card password={password} userEmail={userEmail}
        handleChangeUser={handleChangeUser} onClick={handleClick} setPass={setPass}>
        </Card>
    </div>
)
}

export default Login;
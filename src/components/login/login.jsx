import React from 'react'
import { Checkbox, Container,Container1,Container2,Input, Inputs, Registration, Title, Username } from './style';
import { useNavigate,NavLink } from 'react-router-dom';
import hero from '../../assets/images/propertyHero.png' 


export const Login = () => {

    const navigate = useNavigate();

  return (
 <Container>

 <Container1 style={{background:`url(${hero})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', }}>
 <h2 >My Account</h2>
 </Container1>   
      <Title>
 <h5>Home/My account</h5>
      
      </Title>
    <Container2>
     <Input>
     <h4>SIGN IN</h4>
     <h5>Login</h5>
        <input type='text' placeholder='Ali Tufa...' />
        <input type='text' placeholder='Password' />
   <Checkbox>
        <input type='checkbox' />
        <h6>Remember me</h6> 
        <h4>Forgot</h4>
    </Checkbox>

    <button onClick={()=>navigate('/Myprofile')} >SIGN IN</button>
        <Username>
        <h5>Username: agency or agent</h5>
        <h5>Password: demo</h5>
        </Username>
        </Input>
     <Registration>
     <h4>Registration</h4>
       <Inputs>
          <input type='text' placeholder='Login' />
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='User code' />
          <input type='text' placeholder='Password' />
          <input type='text' placeholder='Re-enter password' />
          <button>Register</button>
       </Inputs>
     </Registration>
     </Container2>
 </Container>
  )
}

export default Login;

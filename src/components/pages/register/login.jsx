import React from 'react'
import { Checkbox, Container,Container1,Container2,Input, Inputs, Registration, Title, Username } from './style';
import { useNavigate} from 'react-router-dom';
import {useState} from 'react';
import hero from '../../../assets/images/propertyHero.png' 

const {REACT_APP_BASE_URL: url} = process.env
console.log(process.env)

export const Login = () => {
    
    const [register,setRegister] = useState({
      firstname:'',
      lastname:'',
      email:'',
      roleIdSet: [
        0
      ],
      password:'',
        }) 

    const [login,setLogin] = useState({
      email:'',
      password:'',
    })   

    const navigate = useNavigate();
    // useEffect(()=>{
    //   fetch('https://houzing-app.herokuapp.com',{
    //     method:'POST',
    //     headers:{'Content-Type':'application/json'},
    //     body:JSON.stringify(register)
    //   })
    // })

    const onChange = (e)=>{
      
       const {value,name} = e.target;
       setRegister({
          ...register,[name]:value
          })  
        }
    const onChangeLogin = (e)=>{
      const {value,name} = e.target;
    setLogin({
     ...login,[name]:value
    })
    console.log(login)
   }
      const onAdd = ()=>{
        fetch(`${url}/api/public/auth/register`,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(login)
        })
        .then((res)=>res.json())
        .then(res => {
          localStorage.setItem('Token',res?.data);
          if(res?.success && res?.data){
            navigate('/Myprofile')
          }       
        } )
      }
 
      const onLogin =() =>{
        fetch('https://houzing-app.herokuapp.com/api/public/auth/login',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(register)
        })
        .then((res)=>res.json())
        .then(res => {
          localStorage.setItem('Token',res?.data) 
          if(res?.success && res?.data){
            navigate('/Myprofile')}
         } )
      }

  return (
 <Container>

 <Container1 style={{background:`url(${hero})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', }}>
 <h2 >My Account</h2>
 <h5>Home/My account</h5>
 </Container1>   
      <Title>
      
      </Title>
    <Container2>
     <Input>
     <h4>SIGN IN</h4>
     <h5>Login</h5>
        <input name='email' onChange={onChangeLogin} value={login.email} type='email' placeholder='Ali Tufa...' />
        <input name='password' onChange={onChangeLogin} value={login.password} type='password' placeholder='Password' />
   <Checkbox>
        <input type='checkbox' />
        <h6>Remember me</h6> 
        <h4>Forgot</h4>
    </Checkbox>

    <button onClick={onLogin} >SIGN IN</button>
        <Username>
        <h5>Username: agency or agent</h5>
        <h5>Password: demo</h5>
        </Username>
        </Input>
     <Registration>
     <h4>Registration</h4>
       <Inputs>
          <input name='firstname' onChange={onChange} value={register.firstname} type='text' placeholder='First Name' />
          <input name='lastname' onChange={onChange} value={register.lastname}  type='text' placeholder='Last Name' />
          <input name='email' onChange={onChange} value={register.email}  type='email' placeholder='Email' />
          <input name='password' onChange={onChange} value={register.password}  type='password' placeholder='Password' />
          <button onClick={()=>onAdd} >Register</button>
       </Inputs>
     </Registration>
     </Container2>
 </Container>
  )
}

export default Login;

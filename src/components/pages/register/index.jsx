import React from 'react'
import { Container } from './style';
import {NavLink} from 'react-router-dom';


export const Register = () => {
  return (
    <Container>
    <NavLink to={'/Register'}>Register</NavLink>
    
    </Container>
  )
}
export default Register;
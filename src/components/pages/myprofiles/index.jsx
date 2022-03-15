import React from 'react'
import { Container } from './style';
import {NavLink} from 'react-router-dom';


export const Myprofile = () => {
  return (
    <Container>
    <NavLink to={'/Myprofile'}>Myprofile</NavLink>
    
    </Container>
  )
}
export default Myprofile;
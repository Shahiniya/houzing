import React from 'react'
import { Container } from './style';
import Navbar from '../../../components/navbar/navbar'
import {NavLink} from 'react-router-dom';

export const Logout = () => {
  return (
    <Container>
    <Navbar/>
      <NavLink to='/login' className='Navlink'>LOGOUT</NavLink>
    </Container>
  )
}
export default Logout;
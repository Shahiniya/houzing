import React from 'react'
import { Container } from './style';
import {NavLink} from 'react-router-dom';


export const Rent = () => {
  return (
    <Container>
    <NavLink to={'/Rent'}>Rent</NavLink>
    </Container>
  )
}
export default Rent;
import React from 'react'
import { Container } from './style';
import {NavLink} from 'react-router-dom';

export const Buy = () => {
  return (
    <Container>
    <NavLink to={'/Buy'}>Buy</NavLink>
  
    </Container>
  )
}
export default Buy;
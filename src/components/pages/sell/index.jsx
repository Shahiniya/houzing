import React from 'react'
import {NavLink} from 'react-router-dom';
import { Container } from './style';

export const Sell = () => {
  return (
    <Container>
    
    <NavLink to={'/Sell'}> Sell</NavLink>
   </Container>
  )
}
export default Sell;
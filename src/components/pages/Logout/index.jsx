import React from 'react'
import { Container } from './style';
import Navbar from '../../../components/navbar/navbar'
export const Logout = () => {
  return (
    <Container>
    <Navbar/>
      <button>LOGOUT</button>
    </Container>
  )
}
export default Logout;
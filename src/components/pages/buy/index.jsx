import React from 'react'
import { Card, Container, ContainerWrapper, Img } from './style';
import {NavLink} from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import { Footer } from '../../footer';
import { shop } from '../../../utils/shop';

export const Buy = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <h5>We found 14 products avaiable for you</h5>
      
      <ContainerWrapper>
            {
              shop.map((value)=>{
               return(
                  <Card>
                <Img src={value.src} />
                <h4>{value.title}</h4>
                <h5>{value.price}</h5>
                </Card>
               ) })
            }
      </ContainerWrapper>


      <Footer></Footer>
    </Container>
  )
}
export default Buy;
import React from 'react'
import {Saidbars,Container,Container1,Image, WrapperContainer} from './style'
import {saidbar} from '../../utils/saidbar';
import { NavLink,Outlet} from 'react-router-dom';
import { BigContainer } from '../pages/favorite/style';

export const Saidbar = () => {
  return (
  <WrapperContainer>
      <BigContainer>
    <Container>
    <Container1>
   {    
       saidbar.map((value)=>{
           return(
               <NavLink className='Saidbars' to={value.path} key={value.id} style={({isActive})=>{
                 return{
                  color: isActive ? 'blue' : 'black'}
               }
               }>
                    <Image src={value.icon}/>
                    <h3>{value.title}</h3>
               </NavLink>
           )
       })
   }
   </Container1>

   </Container>
  <Outlet/>
  </BigContainer>
   </WrapperContainer>
  )
}

import React from 'react'
import {Saidbars,Container,Container1,Image} from './style'
import {saidbar} from '../../utils/saidbar';
import { NavLink } from 'react-router-dom';

export const Saidbar = () => {
  return (
    <Container>
    <Container1>
   {    
       saidbar.map((value)=>{
           return(
               <NavLink className='Saidbars' to={value.path} key={value.id} style={({isActive})=>{
                 return{
                  // background: isActive ? 'blue' : 'black'

                 }
               }
               }>
                    <Image style={{fill:'red',color:'red'}} src={value.icon}/>
                    <h3>{value.title}</h3>
               </NavLink>
           )
       })
   }
   </Container1>
   </Container>
  )
}

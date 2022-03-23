import React from 'react'
import {Saidbars,Container,Container1,Image} from './style'
import {saidbar} from '../../utils/saidbar'

export const Saidbar = () => {
  return (
    <Container>
    <Container1>
   {    
       saidbar.map((value)=>{
           return(
               <Saidbars>
                    <Image src={value.icon}/>
                    <h3>{value.title}</h3>
               </Saidbars>
           )
       })
   }
   </Container1>
   </Container>
  )
}

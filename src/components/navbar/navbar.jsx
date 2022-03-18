import React from 'react';
import {navbar} from '../../utils/navbar.js'
import {Container, Img, Navbarleft, Navbarright} from './style';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
// console.log(process.env) 


export const Navbar = () => {
  return (
    <Container >
    <Navbarleft>
    <Img src={logo} alt='test'/>
    <NavLink  to = {'/Home'} style={()=>{
      return{
        fontFamily: 'Cerebri Sans',
        fontStyle: 'normal',
        fontWeight:'700',
        fontSize: '25px',
        lineHeight: '32px',
        margin:'11px',
        color:'white',
            }
          }}>Housing</NavLink>
    </Navbarleft>
    <Navbarright >
    {navbar.map((value) =>{
        return(
            <NavLink key={value.id} style={({isActive}) => {
                  return{
                      color: isActive ? 'coral' : 'black',
                      
                  }}}
                   className='navbar' 
                   to={value.path}
                   >{value.title}</NavLink>
        )
    })}
    </Navbarright>
           
    </Container>
  )
}
export default Navbar;
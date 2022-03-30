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
        background: '/Home' ? 'none' : 'white',
        fontFamily: 'Cerebri Sans',
        fontStyle: 'normal',
        fontWeight:'700',
        fontSize: '25px',
        lineHeight: '32px',
        margin:'11px',
        color:'#0D263B',
            }
          }}>Housing</NavLink>
    </Navbarleft>
    <Navbarright >
    {navbar.map((value) =>{
        return(
            <NavLink key={value.id} style={({isActive}) => {
                  return{
                      color: isActive ? 'blue' : 'black',
                      
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
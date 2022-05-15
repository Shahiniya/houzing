import React from 'react';
import {navbar} from '../../utils/navbar.js'
import {Container, Img, Navbarleft, Navbarright} from './style';
import {NavLink,Outlet} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { WrapperContainer } from '../navbar/style.js';
// console.log(process.env) 


export const Navbar = () => {
  return (
    <WrapperContainer>
    <Outlet/>

    <Container >
    <Navbarleft>
    <Img src={logo} alt='test'/>
    <NavLink  to = {'/Home'} style={()=>{
      return{
        fontFamily: 'Cerebri Sans',
        fontStyle: 'normal',
        fontWeight:'700',
        fontSize: '25px',
        margin:'11px',
        color:'white',
        textDecoration:'none',

            }
          }}>Housing</NavLink>
    </Navbarleft>
    <Navbarright >
    {navbar.map((value) =>{
        return(
            <NavLink key={value.id} style={({isActive}) => {
                  return{
                      color: isActive ? 'white' : 'white',
                      fontFamily: 'Cerebri Sans',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      color: 'white'
                  }}}
                   className='navbar' 
                   to={value.path}
                   >{value.title}</NavLink>
        )
    })}
    </Navbarright>
    </Container>
    </WrapperContainer>
  )
}
// salom
export default Navbar;
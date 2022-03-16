import React from 'react'
import { Container,Title,Box,Link ,Input, Search} from './style';
import landing from '../../assets/images/landing.jpg' 
// import Navbar from '../navbar/navbar';
import {NavLink} from 'react-router-dom';



export const Home = () => {
  return (
    <Container style={{background:`url(${landing})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', }}>
              <Title>
        <h5>IT'S GREAT TO BE HOME</h5>
        <p>FIND YOUR PERFECT HOME</p>
      </Title>
        <Link>
        <NavLink  style={{fontSize:'20px', margin:'20px', color:'white'}} to={'/Buy'}>Buy</NavLink>
        <NavLink  style={{fontSize:'20px', margin:'20px',color:'white'}} to={'/Rent'}>Rent</NavLink>
        <NavLink  style={{fontSize:'20px', margin:'20px',color:'white'}} to={'/Sell'}>Sold</NavLink>
        </Link>
       
      <Box>
      <Input>
      <h3>TYPE</h3>
      <input placeholder='Property Type'/>
      </Input>
      <Input>
      <h3>LOCATION</h3>
      <input placeholder='All cities'/>
      </Input>
      <Input>
      <h3>SEARCH</h3>
      <input placeholder='Enter keywords'/>
      <Search/>
      </Input>
      </Box>
    </Container>
  )
}

export default Home;
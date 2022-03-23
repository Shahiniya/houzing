import React from 'react'
import {Search1,Input0,Input1, Container,Title,Box,Link ,Input, Search, Container1, Advanced, Button} from './style';
import landing from '../../assets/images/landing.jpg' 
// import Navbar from '../navbar/navbar';
import {NavLink} from 'react-router-dom';



export const Home = () => {
  return (
    <Container >
      <Container1>          
    <Title>
        <h6>IT'S GREAT TO BE HOME</h6>
        <p>FIND YOUR PERFECT HOME</p>
      </Title>
        <Link>
        <NavLink  style={{fontSize:'15px', margin:'20px', color:'white'}} to={'/Buy'}>Buy</NavLink>
        <NavLink  style={{fontSize:'15px', margin:'20px',color:'white'}} to={'/Rent'}>Rent</NavLink>
        <NavLink  style={{fontSize:'15px', margin:'20px',color:'white'}} to={'/Sell'}>Sold</NavLink>
        </Link>
       
      <Box>
      <Input>
      <h5>TYPE</h5>
      <input placeholder='Property Type'/>
      </Input>

      <Input>
      <h5>LOCATION</h5>
      <input placeholder='All cities'/>
      </Input>

      <Input0>
      <h5>SEARCH</h5>
      <input placeholder='Enter keywords'/>
      <Search/>
      </Input0>

      <Input1>
      <Advanced/>
     <h6>Advanced <br/>Search</h6>
      </Input1>

      <Button>
        <Search1/>
        <button>Search</button>
      </Button>
      </Box>
      </Container1>
    </Container>
  )
}

export default Home;
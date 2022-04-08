import React from 'react'
import {Search1,Card,Card1,Img,Input0,IconTitle,Input1, Container,Title,Box,Link ,Input, Search, Container1, Advanced, Button, Discover, Discover1, CardWrapper, Icons, Img1, Price, Heart, PriceWrapper} from './style';
import landing from '../../assets/images/landing.jpg' 
import {Footer} from '../footer/index';
import {NavLink} from 'react-router-dom';
import {shops} from '../../utils/shop'



export const Home = () => {
  return (
    <Container >
      <Container1>          
    <Title>
        <h6>IT'S GREAT TO BE HOME</h6>
        <p>FIND YOUR PERFECT HOME</p>
      </Title>
        <Link>
        <NavLink  style={{fontSize:'15px', margin:'20px', color:'white', textDecoration:'none'}} to={'/Buy'}>Buy</NavLink>
        <NavLink  style={{fontSize:'15px', margin:'20px',color:'white' , textDecoration:'none'}} to={'/Rent'}>Rent</NavLink>
        <NavLink  style={{fontSize:'15px', margin:'20px',color:'white' , textDecoration:'none'}} to={'/Sell'}>Sold</NavLink>
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
      
    <Discover>
    <Discover1>
    <h3>Discover Our Featured Listings</h3>
    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h5>
  </Discover1>
        <CardWrapper>
        {
          shops.map((value)=>{
           return(
             <Card1 key={value.id}>
              <Card>
            <Img src={value.src0} />
            <h4>{value.title}</h4>
            <h5>{value.title1}</h5>
            <Icons>
            <IconTitle>
                <Img1 src={value.src}/>
                <h6>4 beds</h6>
            </IconTitle>
            <IconTitle>
                <Img1 src={value.src1}/>
                <h6>5 baths</h6>
            </IconTitle>
            <IconTitle>
                <Img1 src={value.src2}/>
                <h6>1 Garage</h6>
            </IconTitle>
            <IconTitle>
                <Img1 src={value.src4}/>
                <h6>1200 Sq Ft</h6>
            </IconTitle>
            </Icons>

          <PriceWrapper>
            <Price>
              <h6>{value.price}</h6>
              <h5>{value.price1}</h5>
            </Price>
            
           <Heart>
              <Img1 src={value.src4}/>
              <Img1 src={value.src5}/>
              <Img1 src={value.src6}/>
           </Heart>
           </PriceWrapper>
            </Card>
            </Card1>
           ) })
        }
        </CardWrapper>
    </Discover>

      <Footer/>
    </Container>
  )
}

export default Home;
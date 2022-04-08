import React from 'react'
import { WrapperContainer,Saidbar,CardWrapper,
  Card1,Card,Img,Icons,IconTitle,Img1,Price,PriceWrapper,
  Heart,BigContainer,Title, BodyContainer } from './style';
import {Footer} from '../../../components/footer';
import {rent} from '../../../utils/shop'


export const Rent = () => {
  return (
    <WrapperContainer>
        <BigContainer>
            <Title>
               <h2>NY Real Estate & Homes For Sale</h2>
               <h5>Home/Grid/Default</h5>
            </Title>

            <BodyContainer>
                <Saidbar>
                <h4>Find Your New Home</h4>
                    <input type='text' placeholder='Enter keyword' />
                    <input type='text' placeholder='Status' />
                    <input type='text' placeholder='Type' />
                    <h5>All Cities</h5>
                    <input type='text' placeholder='New York' />
                    <input type='text' placeholder='Bedrooms' />
                    <input type='text' placeholder='Min.area' />
                    <input type='text' placeholder='Max.area' />
                    <input type='text' placeholder='Property ID' />
                    <h5>Price Range</h5>
                    <input type='range' style={{color:'blue'}} />
               
               </Saidbar>
            
               <CardWrapper>
        {
          rent.map((value)=>{
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
            </BodyContainer>
        </BigContainer>
        <Footer/>
    </WrapperContainer>
  )
}
export default Rent;
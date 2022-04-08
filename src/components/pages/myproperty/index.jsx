import React from 'react'
import { BigContainer,Img,Img1,Title1,Input, Search,BodyContainer, Card, CardContainer, Title, WrapperContainer, TitleWrapper, Body1,Body2,BodyWrapper, Card2 } from './style';
import { inbox } from '../../../utils/search';
import Navbar from '../../../components/navbar/navbar';
import {property} from '../../../utils/shop'

 const Myproperty = () => {
  return (
    <WrapperContainer>
    <Navbar/>
          <BigContainer>
            <BodyContainer>

                <Title>
                   <h2>My properties</h2>
                   <h5>Ready to jump back in?</h5>
                </Title>

                <BodyWrapper>
                <Body1>   
                  <Input>          
                  <input value='Order By:Date - New to old' />
                  <input value='Filter by Status:All' placeholder='All' />
                  <input className="last" value='Search a Listing' />
                  </Input> 
                  
                  <Title1>
                    <h4>Listing title</h4>
                    <h3>Date published</h3>
                    <h3>Status</h3>
                    <h3>View</h3>
                    <h5>Action</h5>

                  </Title1>
                  </Body1>

                <Body2>
                 {
                   property.map((value)=>(
                     <Card>
                        <Img src={value.src0} alt='test' />
                       <TitleWrapper>
                        <h3>{value.title}</h3>
                        <h5>{value.title1}</h5>
                        <h5>{value.price1}</h5>
                        <h4>{value.price}</h4>
                        </TitleWrapper>
                      <button>FOR SALE</button>
                  <Card2>
                  <h3>{value.data}</h3>
                  <h3>{value.status}</h3>
                  <h3 price >{value.price2}</h3>
                  <Img1 src={value.src1} alt='test' large/>
                  <Img1 src={value.src2} alt='test' />


                  </Card2>
                     </Card>
                   ))
                 }
                  
                  
                </Body2>
                </BodyWrapper>
            </BodyContainer>
        </BigContainer>
    
    
  </WrapperContainer>
  )
}
export default Myproperty;
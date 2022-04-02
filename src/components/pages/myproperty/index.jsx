import React from 'react'
import { BigContainer,Img, Search,BodyContainer, Card, CardContainer, Title, WrapperContainer, TitleWrapper, Body1,Body2,BodyWrapper } from './style';
import { inbox } from '../../../utils/search';
import Navbar from '../../../components/navbar/navbar'

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
                  <option value='Order'>Order By:Date - New to old</option>
                </Body1>

                <Body2>
                 
                  
                  
                </Body2>
                </BodyWrapper>
            </BodyContainer>
        </BigContainer>
    
    
  </WrapperContainer>
  )
}
export default Myproperty;
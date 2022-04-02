import React from 'react'
import { BigContainer,Img, Search,BodyContainer, Card, CardContainer, Title, WrapperContainer, TitleWrapper, Body1,Body2,BodyWrapper } from './style';
import { inbox } from '../../../utils/search';
import Navbar from '../../../components/navbar/navbar'

export const Inbox = () => {
  return (
    <WrapperContainer>
    <Navbar/>
          <BigContainer>
            <BodyContainer>

                <Title>
                   <h2>Inbox</h2>
                   <h5>Ready to jump back in?</h5>
                </Title>

                <BodyWrapper>
                <Body1>
                <Search/>
                  <input type='text' placeholder='           Search'/>
                   {
                     inbox.map((value)=>(
                      <Card>
                        <Img src={value.src} alt='test' />
                        <TitleWrapper>
                        <h3>{value.name}</h3>
                        <h4>{value.status}</h4>
                        </TitleWrapper>
                        <h3>{value.time}</h3>

                     </Card>
                     ))
                     
                   }
                </Body1>

                <Body2>
                 
                  
                  
                </Body2>
                </BodyWrapper>
            </BodyContainer>
        </BigContainer>
    
    
  </WrapperContainer>
  )
}
export default Inbox;
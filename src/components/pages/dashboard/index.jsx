import React from 'react'
import { BigContainer,Img,BodyChild1,BodyChild2,ImgWrapper, Search,BodyContainer, Card, CardContainer, Title, WrapperContainer, TitleWrapper, Body1,Body2,BodyWrapper } from './style';
import { dashboard } from '../../../utils/search';
import Navbar from '../../../components/navbar/navbar'

// import {Saidbar} from '../../../components/saidbar/index';


export const Dashboard = () => {
  return (
    <WrapperContainer>
    <Navbar/>
          <BigContainer>
            <BodyContainer>

                <Title>
                   <h2>Howdy, Darell!</h2>
                   <h5>Ready to jump back in?</h5>
                </Title>

                <BodyWrapper>
                <Body1>
              
                 {
                     dashboard.map((value)=>(
                      <Card>
                      <ImgWrapper>
                        </ImgWrapper>
                        <Img src={value.src} alt='test' />

                        <TitleWrapper>
                        <h3>{value.number}</h3>
                        <h4>{value.status}</h4>
                        </TitleWrapper>
                        
                     </Card>
                     ))
                       }
                </Body1>

                <Body2>
                 <BodyChild1>
                  <h1>Listing views</h1>
                 </BodyChild1>
                  
                 <BodyChild2>
                   <h2>Recent Activities</h2>
                 </BodyChild2>
                  
                </Body2>
                </BodyWrapper>
            </BodyContainer>
        </BigContainer>
    
    
  </WrapperContainer>
  )
}
export default Dashboard;
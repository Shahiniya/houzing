import React from 'react'
import { BigContainer,Img, BodyContainer, Card, CardContainer, Title, WrapperContainer, Title2 } from './style';
import {Saidbar} from '../../../components/saidbar/index'
import {shops} from '../../../utils/shop'

 const Myproperties = () => {
  return (
    <WrapperContainer>
    <BigContainer>
      <Saidbar/>
        <BodyContainer>

            <Title>
               <h2>Favorites</h2>
               <h5>Ready to jump back in?</h5>
            </Title>

            <CardContainer>
              {
                shops.map((value)=>(
                  <Card key={value.id}>
                  <Img  src={value.src0} alt='test' />
                  <Title2>
                  <h3>{value.title}</h3>
                  <h5>{value.title1}</h5>
                  <h5>{value.price1}</h5>
                  <h4>{value.price}</h4>
                  </Title2>
                  <button>FOR SALE</button>
              </Card>
                ))
                
              }
            </CardContainer>
        </BodyContainer>
    </BigContainer>
    </WrapperContainer>

  )
}

export default Myproperties;
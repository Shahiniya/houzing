import React from 'react'
import { BigContainer,Img, BodyContainer, Card, CardContainer, Title, WrapperContainer, Title2, ImgWrapper, CardTitle, CardWrapper } from './style';
import {Saidbar} from '../../../components/saidbar/index'
import { invoice } from '../../../utils/search';
import Navbar from '../../../components/navbar/navbar'

export const Invoice = () => {
  return (
    <WrapperContainer>
    <Navbar/>
          <BigContainer>
            <BodyContainer>

                <Title>
                   <h2>My Invoices</h2>
                   <h5>Ready to jump back in?</h5>
                </Title>

                <CardWrapper>
                <CardTitle>
                    <h3>#</h3>
                    <h5>Payment Method</h5>
                    <h4>Status</h4>
                    <h4>Transaction</h4>
                    <h4>Amount</h4>
                    <h4>Created</h4>
                    <h4>Updated</h4>

                </CardTitle>

                <CardContainer>
                  {
                    invoice.map((value)=>(
                      <Card key={value.id}>
                      <h4>{value.hesh}</h4>
                      <h5>{value.payment}</h5>
                      <h5>{value.status}</h5>
                      <h5>{value.trans}</h5>
                      <h5>{value.amount}</h5>
                      <h5>{value.data1}</h5>
                      <h5>{value.data2}</h5>
                         
                      </Card>
                    ))
                  }
                  
                  
                </CardContainer>
                </CardWrapper>
            </BodyContainer>
        </BigContainer>
    
    
  </WrapperContainer>
  )
}

export default Invoice;
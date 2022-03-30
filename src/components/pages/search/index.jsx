import React from 'react'
import { BigContainer,Img, BodyContainer, Card, CardContainer, Title, WrapperContainer, Title2, ImgWrapper, CardTitle, CardWrapper } from './style';
import {Saidbar} from '../../../components/saidbar/index'
import { search } from '../../../utils/search';

export const Search = () => {
  return (
    <WrapperContainer>
        <BigContainer>
          <Saidbar/>
            <BodyContainer>

                <Title>
                   <h2>Saved Search</h2>
                   <h5>Ready to jump back in?</h5>
                </Title>

                <CardWrapper>
                <CardTitle>
                    <h3>Search</h3>
                    <h4>Created</h4>
                    <h5>Action</h5>
                </CardTitle>

                <CardContainer>
                  {
                    search.map((value)=>(
                      <Card>
                          <h3>{value.title}</h3>
                         <h4>{value.data}</h4>
                          <ImgWrapper>
                          <Img src={value.icon} />
                          <Img src={value.icon2} />
                          <Img src={value.icon1} />
                          </ImgWrapper>
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
export default Search;
import React from 'react'
import { BigContainer,Img, BodyContainer, Card, CardContainer, Title, WrapperContainer, Title2 } from './style';
import {Saidbar} from '../../../components/saidbar/index';
import {Footer} from '../../../components/footer/index';

import {shops} from '../../../utils/shop'

 const Myproperties = () => {
  return (
    <WrapperContainer>
    <BigContainer>
      <Saidbar/>
      <Footer/>
    </BigContainer>
    </WrapperContainer>

  )
}

export default Myproperties;
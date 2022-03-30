import React from 'react'
import { BigContainer, BodyContainer, WrapperContainer } from './style';
import {NavLink} from 'react-router-dom';
import Navbar from '../../navbar/navbar';
// import {Saidbar} from '../../../components/saidbar/index';


export const Dashboard = () => {
  return (
    <WrapperContainer>
     <Navbar/>
       <BigContainer>
        
          <BodyContainer>
                 
          </BodyContainer>
       </BigContainer>
    </WrapperContainer>
  )
}
export default Dashboard;
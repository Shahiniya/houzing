import React from 'react'
import { Container } from './style';
import {Route,Routes } from 'react-router-dom';
import Navbar from '../components/navbar/navbar.jsx'
import Home from '../components/home/index.jsx'
// import Buy from '../components/pages/buy';
import { navbar } from '../components/utils/navbar';

export const Root = () => {
  return (
    <Container>
   <Navbar/>

    <Routes>
    {
      navbar.map((value)=> {
        return <Route path={value?.path} element={value.element}/>;
      })}
      
    </Routes>
    </Container>
    
  )
}
export default Root;
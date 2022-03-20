import React from 'react'
import { Container } from './style';
import {Route,Routes } from 'react-router-dom';
import Navbar from '../components/navbar/navbar.jsx'
// import Home from '../components/home/index.jsx'
// import Buy from '../components/pages/buy';
import { navbar } from '../utils/navbar';
import Private from './private';
export const Root = () => {
  return (
    <Container>
   <Navbar/>

    <Routes >
    {
      navbar.map((value)=> {
        return <Route key={value.id} path={value?.path} element={value.element}/>;
      })}
      <Private>
        {Myprofile}
      </Private>
    </Routes>

    </Container>
    
  )
}
export default Root;
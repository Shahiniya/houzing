import React from 'react'
import { Container } from './style';
import {Route,Routes } from 'react-router-dom';
import Navbar from '../components/navbar/navbar.jsx'
import {Saidbar} from '../components/saidbar/index'
import Home from '../components/home/index.jsx'
// import Buy from '../components/pages/buy';
import { navbar } from '../utils/navbar';
// import Private from './private';
// import Myprofile from '../components/pages/myprofiles/index';

export const Root = () => {
  return (
    <Container>
  
  
   <Navbar/>

    <Routes>
    <Route>
    <Route  path='/' element={<Home/>} />
    {
      navbar.map((value)=> {
        return <Route key={value.id} path={value?.path} element={value.element}/>;
      })}
     
      </Route>
    </Routes>

    </Container>
    
  )
}
export default Root;
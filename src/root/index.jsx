import React from 'react'
import { Container } from './style';
import {Route,Routes} from 'react-router-dom';
import Navbar from '../components/navbar/navbar.jsx'
// import {Myprofile} from '../components/pages/myprofiles/index'
import Home from '../components/home/index.jsx'
import {saidbar} from '../utils/saidbar';
import { navbar } from '../utils/navbar';
import Myprofile from '../components/pages/Myprofiles';
import { ToastContainer } from 'react-toastify'

export const Root = () => {
  return (
     <Container>
    <Navbar />
    <ToastContainer/>
      <Routes>
      <Route  >
      <Route path='/' element={<Home/>} />
             {navbar.map((item)=>(
                     <Route key={item.id} path={item.path} element={item.element} />
                  
                ))}
      </Route>

      
      <Route  >
      <Route path='/Myprofile' element={<Myprofile/>} />
             {saidbar.map((item)=>(
                     <Route key={item.id} path={item.path} element={item.element} />
                  
                ))}
      </Route>
      </Routes>
    </Container>
  )
}
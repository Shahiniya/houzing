import React from 'react'
import { Container } from './style';
import {Route,Routes,Navigate} from 'react-router-dom';
import Navbar from '../components/navbar/navbar.jsx'
import {Saidbar} from '../components/saidbar/index'
import Home from '../components/home/index.jsx'
import {saidbar} from '../utils/saidbar';
import { navbar } from '../utils/navbar';
import Myprofile from '../components/pages/Myprofiles';
import { ToastContainer } from 'react-toastify'

export const Root = () => {
  return (
     <Container>
    
    <ToastContainer/>
      <Routes>
      <Route element={<Navbar />} >
        
           <Route path='/' element={<Home/>}/>
             {navbar.map((item)=>(
                     <Route exact key={item.id} path={item?.path} element={item.element} />
                  
                ))}
      </Route>
    
      <Route element={<Saidbar />}  >
     
             {saidbar.map((item)=>(
                     <Route key={item.id} path={item.path} element={item.element} />
                  
                ))}
      </Route>
      </Routes>
    </Container>
  ) 
}
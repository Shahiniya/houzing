import React from 'react'
import { Route } from 'react-router-dom';
import Myprofile from '../components/pages/myprofiles';
import { useEffect,useState } from 'react';
export const Private = ({children}) => {
    const [token,setToken] = useState(localStorage.getItem('Token'));
    useEffect(() => {
      setToken(localStorage.getItem('Token'));
    },[])
    return (
    <div>
    <Route path={'./Myprofile'} element={Myprofile} />
    </div>
  )
}
export default Private;
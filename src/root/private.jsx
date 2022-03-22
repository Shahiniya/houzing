import React from 'react'
import { BrowserRouter as Redirect ,Route,useLocation} from 'react-router-dom';
// import Myprofile from '../components/pages/myprofiles';
import { useEffect,useState } from 'react';
export const Private = ({children,pathname}) => {
    const [token,setToken] = useState(localStorage.getItem('Token'));
    const location = useLocation();
    useEffect(() => {
      setToken(localStorage.getItem('Token'));
    },[])
    return (
    <Route exact path={'./Myprofile'} >
   {token ? (children) : (
       <Redirect to = {{pathname:'/login',
    from:location?.pathname}}/>
    )}
    </Route>
  )
}
export default Private;
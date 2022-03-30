import React from 'react'
import { useNavigate,Route,useLocation} from 'react-router-dom';
// import Myprofile from '../components/pages/myprofiles';
import { useEffect,useState } from 'react';
// export const Private = ({children,pathname}) => {
//     const [token,setToken] = useState(localStorage.getItem('Token'));
//     const location = useLocation();
//     const navigate = useNavigate();
//     useEffect(() => {
//       setToken(localStorage.getItem('Token'));
//     },[])
//     return (
//     <Route exact path={'./Myprofile'} >
//    {token ? (children) : (
//        navigate()
//     </Route>
//   )
// }
// export default Private;
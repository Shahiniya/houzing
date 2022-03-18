import Buy from '../components/pages/buy/index';
import Myprofile  from '../components/pages/myprofiles/index';
import Register from '../components/pages/registerss/index';
import Rent from '../components/pages/rent/index';
import Sell from '../components/pages/sell/index';
import Home from '../components/home/index';
import Login from '../components/pages/register/login'


export const navbar =[
{
   id:1,
        title:'Home',
        path:'/Home',
        element:<Home/>,
        icon: '',
        child:[],
        }, 
     {  
id:2,
title:'Buy',
path:'/Buy',
element:<Buy/>,
icon: '',
child:[],
},

{
    id:3,
    title:'My Profile',
    path:'/Myprofile',
    element:<Myprofile/>,
    icon: '',
    child:[],
    },
  // {
  //  id:4,
  //  title:'Register',
  //  path:'/Register',
  //  element:<Register/>,
  //  icon: '',
  //  child:[],
  //  },
 {
    id:5,
    title:'Rent',
    path:'/Rent',
    element:<Rent/>,
    icon: '',
    child:[],
    }, 
{
    id:6,  
    title:'Sell',
    path:'/Sell',
    element:<Sell/>,
    icon: '',
    child:[],
      },
      {
        id:7,  
        title:'REGISTER',
        path:'/login',
        element:<Login/>,
        icon: '',
        child:[],
          },
// 
]
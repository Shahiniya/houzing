import  dashboard  from "../assets/icons/dashboard.svg";
import profile  from "../assets/icons/property.svg";
import favorite  from "../assets/icons/favorite.svg";
import  search  from "../assets/icons/search.svg";
import invoice from "../assets/icons/invoice.svg";
import inbox  from "../assets/icons/inbox.svg";
import logout  from "../assets/icons/logout.svg";
import msg  from "../assets/icons/msg.svg";
import  pdf from "../assets/icons/pdf.svg";
import Dashboard from '../components/pages/dashboard/index'
import Myprofile from "../components/pages/Myprofiles";
import  Myproperty  from "../components/pages/myproperty/index";
import  Newproperty  from "../components/pages/newproperty/index";
import  Favorite  from "../components/pages/favorite/index";
import  Search  from "../components/pages/search/index";
import  Invoice  from "../components/pages/invoice/index";
import  Inbox from "../components/pages/inbox/index";
import  Logout  from "../components/pages/Logout/index";

export const saidbar = [
    {
        id:1,
        icon:dashboard,
        title:'Dashboard',
        path:'/Dashboard',
        element:<Dashboard/>
    },    
    {
        id:2,
        icon:profile,
        title:'My Property List',
        path:'/Myproperty',
        element:<Myproperty/>,
    },
    {
        id:3,
        icon:msg,
        title:'My profile',
        path:'/Myprofile',
        element:<Myprofile/>,
  
        
    },
    {
        id:4,
        icon:pdf,
        title:'Add New Property',
        path:'/NewProperty',
        element:<Newproperty/>
    },
    {
        id:5,
        icon:favorite,
        title:'Favorites',
        path:'/Favorite',
        element:<Favorite/>,
    },
    {
        id:6,
        icon:search,
        title:'Saved Searches',
        path:'/Search',
        element:<Search/>
    },
    {
        id:7,
        icon:invoice,
        title:'My invoices',
        path:'/Invoice',
        element:<Invoice/>
    },
    {
        id:8,
        icon:inbox,
        title:'/Inbox',
        path:'/Inbox',
        element:<Inbox/>
    },
    {
        id:9,
        icon:logout,
        title:'Logout',
        path:'/Logout',
        element:<Logout/>
    },
]





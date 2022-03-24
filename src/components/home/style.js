import styled from 'styled-components';
import {ReactComponent as search} from '../../assets/icons/search.svg'
import landing from '../../assets/images/landing.jpg' 
import {ReactComponent as advanced} from '../../assets/icons/advancedSearch.svg'
const Container = styled.div`
height: 100%;
overflow: hidden;
width:100%;
`;
const Container1 = styled.div`
 display: flex;
  background-color: #7a8691;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 51em;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${landing});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 85vh;
  overflow: hidden;
`;

const Title = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:700px;
height:50px;
/* background-color:red; */
text-decoration:none;
margin-top:100px;

h6{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 12px;
/* line-height: 20px; */
text-align: center;
text-transform: uppercase;
color:white;
text-decoration:none;
margin:20px 0;
}
p{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 76px;
text-align: center;
color:white;
text-decoration:none;

}
`;
const Link = styled.div`
display:flex;
width:300px;
height:70px;
/* background-color:red; */
margin:70px 200px;
justify-content:center;
align-items:center;

`;
const Box = styled.div`
width:1150px;
height:100px;
background-color:#ffff;
display:flex;
justify-content:center;
`;
const Input = styled.div` 
width:200px;
height:80px;
background:white;
margin-top:15px;
opacity:0.7;

input{
margin-top:10px;    
height:30px;
opacity:0.7;
width:180px;
}
h5{
    font-size:15px;
}

`;
const Input1 = styled.div` 
width:150px;
height:60px;
background:white;
margin-top:35px;
margin-left:10px;
display:flex;
h6{
    font-size:15px;
    opacity:0.7;
    margin-top:3px;
}
`;

const Advanced = styled(advanced)`
width:20px;
height:20px;
margin:15px;
`;

const Input0 = styled.div`
width:300px;
height:50px;
background:white;
margin-top:15px;
display:flex;
position:relative;
flex-direction:column;
opacity:0.7;
h5{
    font-size:15px;
}
input{
margin-top:20px;
width:280px;
border:none;
border-bottom:solid 5px #E6E9EC;
}
`; 

const Search = styled(search)`
width:20px;
height:20px;
position:absolute;
top:17px;
left:250px;
opacity:0.5;
/* z-index:3; */
`;

const Button = styled.div`
width:200px;
height:50px;
border-radius:3px;
/* background-color:blue; */
color:white;
margin-top:30px;
display:flex;
position: relative;
button{
background-color:blue;
color:white;
width:200px;
height:50px;
font-size:20px;
border-radius:3px;
}

`;
const Search1 = styled(search)`
path{
fill: white
}
opacity:1;
width:20px;
height:20px;
position:absolute;
left:40px;
top:15px;
`;

export {Search1,Button,Input0,Advanced,Input1,Container1,Search,Input,Container,Title,Box,Link};
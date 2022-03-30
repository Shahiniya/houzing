import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Container = styled.div`
width:350px;
height:100%;
/* background-color:red; */
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px 
rgba(13, 38, 59, 0.05);
`;

const Container1 = styled.div`
margin-top:100px;
margin-left:30px;
.Saidbars{
    display:flex;
margin:20px;
:hover{
    background-color:blue;
}
h3{
    font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #0D263B;

}
}
`;
const Image = styled.img`
margin:0 10px;
path{
fill:red;
}

`;
const Saidbars = styled(NavLink)`
display:flex;
margin:20px;
h3{
    font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #0D263B;

}
`;

export {Saidbars,Image,Container,Container1};
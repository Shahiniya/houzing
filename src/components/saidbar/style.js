import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const WrapperContainer = styled.div`
width:100%;;
height:1400px;;
display:flex;
background: #FFFFFF;
/* background:red;  */
/* justify-content:center;
align-items:center; */
margin-top:120px;
/* border: 1px solid #E6E9EC; */

`;

const BigContainer = styled.div`
/* width:100px;;
height:100%;
background: #FFFFFF;
background-color:blue; */

`;

const Container = styled.div`
width:350px;
height:100%;
background: #FFFFFF;
/* border: 1px solid #E6E9EC; */
box-shadow: 0px 10px 30px 
rgba(13, 38, 59, 0.05);
/* background-color:red; */

`;

const Container1 = styled.div`
margin-top:100px;
margin-left:30px;
width:250px;
height:40px;
.Saidbars{
display:flex;
margin:20px;
border-radius:5px;
text-decoration:none;
width: 240px;
height: 50px;
/* background: #0061DF; */
border-radius: 3px;
:hover{
    background-color:rgba(0, 97, 223, 1);
}
h3{
    font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #0D263B;
margin-top:10px;
}
}
`;
const Image = styled.img`
margin:10px 10px;
width:18px;
height:18px;
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

export {BigContainer,WrapperContainer,Saidbars,Image,Container,Container1};
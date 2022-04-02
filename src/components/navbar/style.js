import styled from 'styled-components';

const WrapperContainer = styled.div`
display:flex;
position:absolute;
top:0;
left:0;
width:100%;
height:150px;
/* z-index:5; */
/* margin: 500px; */

`;
const Container = styled.div`
display:flex;
position:absolute;
top:0;
left:0;
width:100%;
height:150px;
/* z-index:5; */
/* margin: 500px; */

`;

const Navbarleft = styled.div`
display:flex;
justify-content:right;
margin:60px 30px 0 30px;
h2{
    font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 32px;
margin:11px;
text-decoration:none;

}
`;
 
const Img = styled.img`
/* background-color:black; */
margin-left:110px;
width:40px;
height:48px;
fill{
    color:blue;
}
`;

const Navbarright = styled.div`
display:flex;
justify-content:center;
margin-left: 700px;
margin-top:65px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
color:#ffffff;
text-transform: uppercase;
`;

export {WrapperContainer,Container,Img,Navbarleft,Navbarright};
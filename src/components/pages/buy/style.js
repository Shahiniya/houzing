import styled from 'styled-components';

const WrapperContainer = styled.div`
width:100%;;
height:2600px;
overflow:hidden;
background-color: #E5E5E5;;
/* display:flex; */
/* /* justify-content:center;
align-items:center; */

`;

const Container = styled.div`
width:100%;;
height:1950px;
/* overflow:hidden; */
background-color: #E5E5E5;;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-bottom:80px;
h5{
  text-align:center;
    margin:200px 10px 0 100px;
}
`;
const ContainerWrapper = styled.div`
width:80%;
background-color: #E5E5E5;;
height:1830px;
display:flex;
flex-wrap:wrap;
gap:20px;
justify-content:space-between;
margin:20px 20px 10px 20px;
/* flex-direction:column; */
`;
const Card1 = styled.div`
background:white;
width:645;
height:580;

`;

const Card = styled.div`
width:545;
height:480;
background:white;
margin:20px;
display:flex;
flex-direction:column;
justify-content:color-interpolation-filters;
align-items:color-interpolation-filters;
h4{
  text-align:center;
  margin-top:15px;
  font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #0D263B;
}
h5{
    margin:5px;
    font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
/* text-align: right; */
color: #696969;
}
button{
  width:200px;
  height:50px;
  align-items:center;
  margin:20px 0 10px 40px;;
  border-radius:3px;
  font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 13px;
text-transform: uppercase;
color: #0061DF;
}
`;

const Img = styled.img`
width:280px;
height:220px;
`;

export {Card1,WrapperContainer,Container,Img,Card,ContainerWrapper};
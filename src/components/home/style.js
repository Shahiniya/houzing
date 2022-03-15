import styled from 'styled-components';

const Container = styled.div`
width:100%;
height:1200px;
filter:brightness(0.5);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;


`;
const Title = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:700px;
height:100px;
/* background-color:red; */
text-decoration:none;

h5{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
/* line-height: 20px; */
text-align: center;
text-transform: uppercase;
color:white;
text-decoration:none;
margin:30px 0;
}
p{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 76px;
text-align: center;
color:white;
text-decoration:none;

}
`;
const Link = styled.div`
display:flex;
width:300px;
height:100px;
/* background-color:red; */
margin:70px 200px;
justify-content:center;
align-items:center;

`;
const Box = styled.div`
width:1500px;
height:300px;
background-color:red;
display:flex;
`;
const Input = styled.div` 
width:25%;
height:200px;
background:blue;
`;
export {Input,Container,Title,Box,Link};
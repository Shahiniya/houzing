import styled from 'styled-components';

const WrapperContainer = styled.div`
width:100%;
height:2300px;
background-color:#e5e5e5;
display:flex;
flex-direction:column;
overflow:hidden;
justify-content:center;
align-items:center;
`;
const BigContainer = styled.div`
width:100%;
height:100%;
/* background-color:red; */
/* display:flex; */
/* margin-top:100px; */
`;

const Title = styled.div`
width:100%;
height:100px;
text-align:center;
/* background-color:blue; */
margin-top:200px ;
h2{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 30px;
color: #0D263B;
}
h5{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #696969;
margin-top:20px;
}

`;
const BodyContainer = styled.div`
width:100%;
height:1400px;;
background-color:#E5E5E5;;
display:flex;
justify-content:center;
/* align-items:center; */
/* margin-top:200px; */
`;

const Saidbar = styled.div`
width: 20%;
height: 800px;
background: #ffffff;
border-radius: 3px ;
display:flex;
flex-direction:column;
margin:0 30px;
input{
width:270px;
height:50px;
margin:10px 10px 10px 50px;
background: #ffffff;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #0D263B;
border:none;
border-bottom:2px solid #0D263B;
}
h4{
    margin-top:30px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #0D263B; 
margin-left:50px;
}
h5{
    margin-top:30px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #0D263B; 
margin-left:50px; 
}

`;
const CardWrapper = styled.div`
width:60%;
background-color: #E5E5E5;;
height:390px;
display:flex;
flex-wrap:wrap;
gap:30px;
margin-left:60px;
/* justify-content:space-between; */
/* margin-bottom:30px; */
`;
const Card1 = styled.div`
background:#FFFFFF;
width:325px;
height:428px;
border-radius:2px;

`;

const Card = styled.div`
width:545;
height:350px;
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
text-align: left;
color: #0D263B;
}
h5{
    margin:5px 0;
    font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: left;
color: #696969;
}`;

const Img = styled.img`
width:280px;
height:220px;
`;
const Icons = styled.div`
display:flex;
margin:0px;
justify-content:center;
align-items:center;
`;
const Img1 = styled.img`
width:19px;
height:14px;
margin:5px;

`;
const IconTitle = styled.div`
margin:8px;
h6{
  font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #696969;

}
`;
const PriceWrapper = styled.div`
display:flex;
width:280px;
height:50px;
margin-top:10px;
/* background-color:red; */

border-top:2px solid #E6E9EC;
/* margin:20px; */

`;
const Price = styled.div`
margin-top:10px;
margin-right:20px;
`;
const Heart = styled.div`
margin-left:100px;
margin-top:20px;


`;


export {Heart,Card1,Price,PriceWrapper,
    IconTitle,Icons,Img1,CardWrapper,Card,
    Img,BodyContainer,WrapperContainer,
    BigContainer,Title,Saidbar};
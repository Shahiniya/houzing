import styled from 'styled-components';

const WrapperContainer = styled.div`
width:100%;
height:1300px;
background-color:white;
overflow:hidden;
`;
const BigContainer = styled.div`
width:100%;
height:100%;
background-color:#E5E5E5;
display:flex;
margin-top:150px;
`;
const BodyContainer = styled.div`
width:100%;
height:1300px;;
background-color:#E5E5E5;;
/* margin-top:200px; */
`;
const Title = styled.div`
width:100%;
height:100px;
/* background-color:blue; */
margin:80px 50px 30px 50px;
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

}

`;
const CardContainer = styled.div`
/* width:100%;
height:800px;
background-color:brown; */
margin-left:50px;
width: 1500px;
height: 800px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
`;

const Card = styled.div`
width:100%;
height:200px;
/* background-color:blue; */
display:flex;
border-bottom:2px solid #E6E9EC;
button{
padding: 5px 12px;
width: 71px;
height: 23px;
background: #0D263B;
border-radius: 3px;
font-size:7px;
color:#fff;
margin-top:50px;
}
`;
const Title2 = styled.div`
width:300px;
height:80px;
margin-top:50px;

h3{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #0D263B;
}
h5{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #696969;

}
`;
const Img = styled.img`
width:100px;
height:100px;
margin:30px;
`;
export {Title2,Card,Img,BodyContainer,WrapperContainer,BigContainer,Title,CardContainer};
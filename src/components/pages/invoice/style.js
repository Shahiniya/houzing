import styled from 'styled-components';

const WrapperContainer = styled.div`
width:100%;
height:1000px;
background-color:white;
display:flex;
flex-direction:column;
overflow:hidden;
`;
const BigContainer = styled.div`
width:100%;
height:100%;
background-color:#E5E5E5;
display:flex;
/* margin-top:100px; */
`;
const BodyContainer = styled.div`
width:100%;
height:1000px;;
background-color:#E5E5E5;;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
/* margin-top:200px; */
`;
const Title = styled.div`
width:100%;
height:100px;
/* background-color:blue; */
margin:40px 0px 0px 150px;
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
const CardWrapper = styled.div`
width: 1600px;
height: 750px;
background: #ffffff;
border-radius: 3px ;
/* margin-left:50px; */
/* margin-top:50px; */
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`;

const CardTitle = styled.div`
width: 1500px;
height: 80px;
display:flex;
background: #E6E9EC;
border-radius: 3px ;
/* margin-left:50px; */
/* justify-content:space-around; */

h3{
margin-top:30px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #0D263B;
margin-left:70px;
margin-right:80px;
}
h4{
    margin-top:30px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #0D263B; 
margin-right:100px;
margin-left:60px;
}
h5{
    margin-top:30px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #0D263B; 
margin-right:70px;
margin-left:40px; 
}

`;

const CardContainer = styled.div`
margin-left:0px;
/* margin-top:20px; */
width: 1500px;
height: 450px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
h5{

}
`;

const Card = styled.div`
width:100%;
height:90px;
/* background-color:blue; */
display:flex;
border-bottom:2px solid #E6E9EC;
h4{
margin-left:60px;
margin-top:20px;

}
h5{
    margin-left:150px; 
    margin-top:20px;
}
`;


;
const ImgWrapper = styled.div`
/* margin-left:1000px; */
 
`;
const Img = styled.img`
width:16px;
height:16px;
margin:50px 0 50px 20px;
`;
export {CardWrapper,ImgWrapper,Card,Img,BodyContainer,WrapperContainer,BigContainer,Title,CardContainer,CardTitle};
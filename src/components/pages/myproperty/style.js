import styled from 'styled-components';
import {ReactComponent as search} from '../../../assets/icons/search.svg';

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
margin-top:50px;
`;
const Title = styled.div`
width:100%;
height:120px;
/* background-color:blue; */
margin:100px 0px 0px 150px;
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
const BodyWrapper = styled.div`
width: 1550px;
height: 1450px;
background:#ffffff;
border-radius: 3px ;
margin:50px;
/* margin-top:50px; */
/* display:flex; */
justify-content:center;
align-items:center;


`;

const Body1 = styled.div`
width: 1451px;
height: 174px;
background: #ffffff;
border: none ;
position: relative;
margin-left:80px;
margin-top:30px;
`;

const Input = styled.div`
display:flex;
width: 90%;
height: 74px;
input{
width:230px;
height: 50px;
border:none;
border-bottom:2px solid grey;
margin:20px 0 20px 40px;
/* text-align:center; */
margin-top:10px;
opacity:0.5;
}
.last{
    margin-left:800px;
    opacity:0.9;
}

h3{
    margin-top:30px;
    font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #0D263B;

}
`;
const Title1 = styled.div`
width:1440px;;
height:60px;
background-color:#E6E9EC;
margin:10px 5px;
display:flex;
h4{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size:14px;
color: #0D263B;
margin:30px 550px 20px 30px;
}
h3{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color:  #0D263B;
margin:30px 80px 20px 50px;

}
h5{
    font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color:  #0D263B; 
margin:30px 50px 20px 80px;

}
`;
const Search = styled(search)`
width:20px;
height:20px;
position:absolute;
top:35px;
left:50px;
fill{
    color:black;
}
`;

const Body2 = styled.div`
margin-left:80px;
margin-bottom:30px;
width: 1451px;
height: 653px;
background: #FFFFFF;
border-bottom: 1px solid #E6E9EC;
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
margin-right:100px;
}
`;


;
const TitleWrapper = styled.div`
width:210px;
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
width:200px;
height:150px;
margin:30px;
`;

const Card2 = styled.div`
display:flex;
width:1000px;
height:100px;
margin:40px;
h3{
    margin-top:20px;
    margin-left: ${({price})=>( price ? '80px' : '100px' )}
}
`;
const Img1 = styled.img`
width:16px;
height:16px;
margin-top:20px ;
margin-left:${({large})=>(large? '150px' : '20px')};
`;
export {Input,Img1,Card2,Title1,TitleWrapper,Search,Card,Img,BodyContainer,WrapperContainer,BigContainer,Title,BodyWrapper,Body1,Body2,};
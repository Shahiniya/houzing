import styled from 'styled-components';
import {ReactComponent as search} from '../../../assets/icons/search.svg';

const WrapperContainer = styled.div`
width:100%;
height:1000px;
background-color:#e5e5e5;
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
const BodyWrapper = styled.div`
width: 1800px;
height: 850px;
/* background:violet; */
border-radius: 3px ;
margin-right:50px;
/* margin-top:50px; */
/* display:flex; */
justify-content:center;
align-items:center;


`;

const Body1 = styled.div`
width: 1700px;
height: 224px;
background: #e5e5e5;
border-radius: 3px solid grey;
position: relative;
/* background:red; */
display:flex;
justify-content:center;
h3{
    margin-top:30px;
    font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #0D263B;

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

const Card = styled.div`
width: 350px;
height: 150px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
/* background-color:blue; */
margin:20px;
display:flex;
position:relative;

border-radius:4px solid #E6E9EC;
h4{
margin-left:50px;
margin-top:20px;

}
h5{
    margin-left:140px; 
    margin-top:20px;
}
`;


;
const TitleWrapper = styled.div`
width:250px;
height:10px;
/* margin-left:20px; */

h3{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 30px;
/* text-align: center; */
color: #0061DF;
margin-left:55px;

}
h4{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 20px;
color: #0D263B;

}
 
`;
const ImgWrapper = styled.div`
width:80px;
height:80px;
margin-top:20px;
margin-left:10px;
background: #0061DF;
opacity: 0.07;
border-radius:50%;
`;
const Img = styled.img`
width:30px;
height:30px;
margin:20px 0 50px 20px;
position: absolute;
top:25px;
left:15px;

`;

const Body2 = styled.div`
margin-left:80px;
/* margin-top:20px; */
width: 1530px;
height: 774px;
/* background: #FFFFFF; */
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
display:flex;
justify-content:center;
`;

const BodyChild1 = styled.div`
width: 1000px;
height: 544px;
background:red;
margin-right:50px;

`;
const BodyChild2 = styled.div`
width: 470px;
height: 544px;
background:blue;

`;



export {BodyChild1,BodyChild2,ImgWrapper,TitleWrapper,Search,Card,Img,BodyContainer,WrapperContainer,BigContainer,Title,BodyWrapper,Body1,Body2,};
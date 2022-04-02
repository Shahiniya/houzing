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
width: 100%;
height: 174px;
background: #ffffff;
border-radius: 3px ;
position: relative;
/* background:red; */
input{
width: 388px;
height: 50px;
background: #F6F8F9;
border-radius: 8px;
margin:20px 0 20px 40px;
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
margin-left:30px;
/* margin-top:20px; */
width: 1200px;
height: 774px;
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
margin-left:20px;

h3{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 14px;
color: #222222;
margin-left:48px;

}
h4{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #696969;
}
 
`;
const Img = styled.img`
width:56px;
height:64px;
margin:20px 0 50px 20px;
`;
export {TitleWrapper,Search,Card,Img,BodyContainer,WrapperContainer,BigContainer,Title,BodyWrapper,Body1,Body2,};
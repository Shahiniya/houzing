import styled from 'styled-components';
import {ReactComponent as doc} from '../../../assets/icons/document.svg'
const Wrapper = styled.div`
width:100%;
height:1700px;
/* background: #E5E5E5; */
display:flex;
`;
const Container = styled.div`
width:100%;
height:1600px;
background: #E5E5E5;
background-color:#ffff;
margin:50px 20px 0 30px;


`;
const Title = styled.div`
margin:144px 20px 0 55px;
h5{
margin-bottom:60px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #696969;
opacity:0.7;

}
h2{
margin-bottom:20px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
color: #0D263B;

}
`;
const Box = styled.div`
width:90%;
height:930px;
margin:50px 20px 0 30px;

`;
const Contact = styled.div`
background-color:#ffff;
display:flex;
/* flex-direction:column; */
`;
const ContactInformation = styled.div`
display:flex;
flex-direction:column;
margin:20px;
height: 866px;
width: 1140px;
border-radius: 3px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
`;

const MiddleWrapper = styled.div`
display:flex;
width:100%;
height:500px;
/* background-color:blue; */
`;


const First = styled.div`
width:50%;
height:500px;
/* background-color:red; */
h3{
width: 153px;
height: 20px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #0D263B;
margin:15px;

}
input{
width: 525px;
height: 30px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
margin:15px;
border:none;
border-bottom:2px solid grey;;
}
`;
const Last = styled.div`
width:50%;
height:500px;
h4{
width: 153px;
height: 20px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
color: #0D263B;
margin:15px;

}
input{
width: 525px;
height: 30px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
margin:15px;
border:none;
border-bottom:2px solid grey;;
}
`;
const AboutMe = styled.div`
width:90%;
/* background-color:blue; */
height:200px;
h5{
    font-size:15px;
    margin:15px;
    opacity:0.7;
}
input{
    width:100%;
    height:150px;
    border:none;
    border-bottom:2px solid grey;
    margin-left:15px;
}
`;
const Update = styled.div`

button{
margin:30px;
width: 220px;
height: 55px;
background: #0061DF;
border-radius: 3px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
text-transform: uppercase;
color:#ffffff;
}
`;
const Photo = styled.div`
width: 330px;
height: 580px;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
margin:20px;
h3{
margin:15px;
width: 45px;
height: 20px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #0D263B;
}
h6{
 width: 160px;
height: 18px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 10px;
color: #696969;
opacity:0.8;
margin:20px 0 10px 100px;;
}

`;
const BoxWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
position: relative;
button{
width: 230px;
height: 45px;
background: #FFFFFF;
border: 1px solid #0061DF;
box-sizing: border-box;
border-radius: 3px;
color:#0061DF;
margin-left:10px;
}

`;
const Doc = styled(doc)`
width:15px;
height:15px;
position:absolute;
top:435px;
left:60px;
`;

const Image = styled.img`
width:250px;
height:400px;
margin-bottom:20px;

`;

const ChangePassword = styled.div`
width: 1140px;
height: 316px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
margin:0px 20px 0 45px;
h3{
width: 136px;
height: 20px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #0D263B;
margin:15px;
}
input{
width: 1080px;
height: 30px;
/* background: ; */
margin:15px;
margin-top:25px;
border:none;
border-bottom:2px solid #E6E9EC;
}
button{
width: 230px;
height: 55px;
background: #0061DF;
border-radius: 3px;
margin:25px;
color:#fff;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 13px;
}

`;

const NewPassword = styled.div`
display:flex;
width:1110px;
`;


export {NewPassword,Doc,Image,Photo,BoxWrapper,MiddleWrapper,AboutMe,Wrapper,Last,First,Update,ContactInformation,Contact,Container,Title,Box,ChangePassword,};
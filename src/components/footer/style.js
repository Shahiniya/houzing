import styled from 'styled-components';
import { ReactComponent as telg } from '../../assets/icons/twitter.svg';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';
const BigWrapper = styled.div`
width:100%;
height:580px;
background-color:#0D263B;
margin:20px 20px 60px 0px;
position:relative;

`;

const MiddleWrapper = styled.div`
display:flex;
margin:0px 20px 60px 150px;
/* background-color:green; */
width:1700px;
height:430px;

`;

const ContactUs = styled.div`
width:250px;
height:300px;
/* background-color:red; */
margin:60px 20px 0px 20px;
display:flex;
flex-direction:column;
h4{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color:#ffffff;
margin:10px;
}
`;
const Contacts = styled.div`
/* background-color:green; */
width:250px;
height:30px;
display:flex;
margin:20px 0 15px 6px;
h6{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
margin-left:10px;

}
`;
const LinksWrapper = styled.div`
display:flex;
width:150px;
height:30px;
`;
const Links = styled.div`
/* flex-direction:row;s */
/* background-color:green; */
width:100px;
height:30px;

`;

const Img = styled.img`
width:15px;
height:15px;
path{
    fill:#ffff;
}
/* background:white; */
`;
const Logo = styled(logo)`
width:423px;
height:520px;
position:absolute;
left:80px;
top:20px;
opacity:0.2;
:hover{
    color:rgba(255, 255, 255, 1);
}
`;
const Discover = styled.div`
width:250px;
height:300px;
/* background-color:red; */
margin:60px 20px 0px 100px;
h3{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #FFFFFF;
margin:13px
}
h4{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
margin:30px;
}
`;
const ListCategory = styled.div`
width:250px;
height:300px;
/* background-color:red; */
margin:60px 20px 0px 20px;
h3{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #FFFFFF;
margin:13px
}
h4{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
margin:30px;
}
`;
const QuickLinks = styled.div`
width:250px;
height:300px;
/* background-color:red; */
margin:60px 20px 0px 20px;
h3{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #FFFFFF;
margin:13px
}
h4{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
margin:30px;
}
`;
const Subscribe = styled.div`
width:250px;
height:300px;
/* background-color:red; */
margin:60px 20px 0px 20px;
h3{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
color: #FFFFFF;
margin:13px
}
h4{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
margin:30px;
}
input{
    width:469px;
    height:60px;
    border-radius:3px;
    margin:20px;
}
`;

const LastWrapper = styled.div`
width:100%;
height:150px;
display:flex;
justify-content:space-around;
border-top:2px solid rgba(255, 255, 255, 0.15);;
/* opacity: 0.2;; */
h6{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
width:347;
height:18px;
margin:40px 60px;
opacity:0.7;


}
`;
const LastWrapper1 = styled.div`
width:300px;
height:100px;
display:flex;
margin:10px 50px;
h4{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 700;
font-size: 25px;
color: #FFFFFF;
margin:20px 0px;

}
`;
const Logos = styled(logo)`
width:40px;
height:48px;
margin:10px;
margin-left:60px;

path{
    fill:white
}

`;

const LastWrapper2 = styled.div`
width:400px;
height:100px;
display:flex;
margin:40px 30px;
h5{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
margin:0px 10px;
opacity:0.7;
}
`;



export {Logos,LastWrapper1,LastWrapper2,LinksWrapper,Links,Img,Contacts,BigWrapper,MiddleWrapper,
    ContactUs,Logo,Discover,ListCategory,
    QuickLinks,Subscribe,LastWrapper};
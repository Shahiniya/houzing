import styled from 'styled-components';


const WrapperContainer = styled.div`
width:100%;
height:1000px;
/* background-color:red; */
display:flex;
flex-direction:column;
overflow:hidden;
/* margin-top:50px; */
/* padding-top:50px; */

`;
const BigContainer = styled.div`
width:100%;
height:100%;
/* background-color:blue; */
display:flex;
/* margin-top:80px; */

`;
const BodyContainer = styled.div`
width:100%;
height:1300px;;
background-color:#E5E5E5;;
/* background:red; */
margin-left:80px;
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
const CardWrapper = styled.div`
width: 1500px;
height: 750px;
background: #ffffff;
border-radius: 3px ;
margin-left:50px;
margin-top:30px;
display:flex;
flex-direction:column;

`;

const CardTitle = styled.div`
width: 1400px;
height: 80px;
display:flex;
background: #E6E9EC;
border-radius: 3px ;
margin-left:50px;
margin-top:50px;

h3{
    margin:50px 100px;
}
h4{
    margin:50px 0 50px 700px;

}
h5{
    margin:50px 0 50px 150px;
    
}
`;

const CardContainer = styled.div`
margin-left:50px;
/* margin-top:20px; */
width: 1400px;
height: 500px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
`;

const Card = styled.div`
width:100%;
height:100px;
/* background-color:blue; */
display:flex;
border-bottom:2px solid #E6E9EC;
h3{
margin:50px 800px 0 50px;
}
h4{
    margin:50px 50px 50px 0; 
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
const ImgWrapper = styled.div`
/* margin-left:1000px; */
 
`;
const Img = styled.img`
width:16px;
height:16px;
margin:50px 0 50px 20px;
`;
export {CardWrapper,ImgWrapper,Title2,Card,Img,BodyContainer,WrapperContainer,BigContainer,Title,CardContainer,CardTitle};
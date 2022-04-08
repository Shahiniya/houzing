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
/* justify-content:center; */
align-items:center;
margin-top:80px;
`;
const Title = styled.div`
width:100%;
height:120px;
/* background-color:blue; */
margin:0px 0px 0px 230px;
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
margin-top:10px;
}
`;
const Container1 = styled.div`
width:1500px;
height:341px;
background:violet;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
input{
    width:48%;
    height:120px;
    margin:10px 10px;
    /* text-align:; */
    border:none;
    border-bottom:2px solid #E6E9EC;
    padding-top:80px;

}
.secondInput{
    width:96%;
    height:150px;
    font-size:16px;
    margin-top:20px;
    padding-top:100px;
    color:#0D263B;
}
`;

const Container2 = styled.div`
width:1500px;
height:341px;
background:violet;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
margin-top:30px;
display:flex;
`;

const Container2child1 = styled.div`
width:32%;
height:300px;
/* background-color:red; */
margin:10px;
h4{
    margin-top:20px;
    margin-bottom:40px;
}
input{
    width:96%;
    height:25px;
    margin:4px;
    margin-bottom:20px;
    border:none;
    border-bottom:2px solid grey;
    opacity:0.5;
}
`;

const Container2child2 = styled.div`
width:32%;
height:300px;
/* background-color:green; */
margin:10px;
h4{
    margin-top:20px;
    margin-bottom:40px;
}
input{
    width:96%;
    height:25px;
    margin:4px;
    border:none;
    border-bottom:2px solid grey;
    opacity:0.5;
    margin-top:20px;

}
`;

const Container2child3 = styled.div`
width:32%;
height:300px;
/* background-color:blue; */
margin:10px;
h3{
    margin-top:35px;
    margin-bottom:78px;
}

input{
    width:96%;
    height:25px;
    margin:4px;
    margin-top:20px;
    border:none;
    border-bottom:2px solid grey;
    opacity:0.5;
}
`;
export {Container1,Container2child1,Container2child2,Container2child3,Container2,Title,WrapperContainer,BigContainer,BodyContainer};
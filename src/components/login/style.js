import styled from 'styled-components';

const Container = styled.div`
width:100%;
height:3000px;
background-color:#E5E5E5;
display:flex;
flex-direction:column;
`;
const Container1 = styled.div`
width:100%;
height:300px;
background-color:blue;
z-index:3;
filter:brightness(0.6);
margin-top:150px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h2{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 38px;
text-align: center;
margin-bottom:20px;
color:white;
}
h5{
    font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: center;
color:white;
z-index:5;

}
`;
const Title = styled.div`
z-index:5;
h5{
    font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: center;
color:white;
z-index:5;

}
`; 

const Container2 = styled.div`
width:100%;
height:900px;
display:flex;
`;

const Input = styled.div`
width:720px;
height:508px;
justify-content:center;
background-color:#ffff;
display:flex;
flex-direction:column;
margin:60px 0 0 300px;
h4{
margin:20px 30px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
color: #0D263B;

}
h5{
width: 34px;
height: 17px;
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 13px;
line-height: 17px;
color: #0D263B;
margin:5px 30px;

}
input{
    margin:5px 30px;
    width:650px;
    height:40px;
    border-radius:5px;
    border:none;
    border-bottom:3px solid #E6E9EC;
}
button{
    width:660px;
    height:55px;
    margin:30px;
    border-radius:3px;
    background: #0061DF;
}
`;
const Checkbox = styled.div`
width:720px;
height:70px;
display:flex;
margin:5px;
/* justify-content:space-around; */
input{
    margin:20px 10px 10px 30px;
    width:15px;
    height:15px;
}
h6{
    margin:10px 20px 10px 0px;
    font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 38px;
color: #696969;
}
h4{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
text-decoration-line: underline;
color: #0061DF;
margin:20px 0 5px 480px;


}
`;

const Username = styled.div`
width: 660px;
height: 100px;
background: #F6F8F9;
border-radius: 3px;
margin:30px;
h5{
    width:200px;
    margin:20px 0 0px 20px;;
}
`;
const Registration = styled.div`
width:720px;
height:675px;
margin:60px 255px 0 30px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
h4{
font-family: 'Cerebri Sans';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
color: #0D263B;
margin:27px 0 60px 30px;;
}
button{
    width:660px;
    height:55px;
    margin:30px;
    background-color:#0D263B;
    color:white;
    border-radius:3px;
}

`;
const Inputs = styled.div`
display:flex;
flex-direction:column;
width:700px;
height:600px;
input{
width:660px;
height:20px;
border:none;
border-bottom:3px solid #E6E9EC;
margin:20px 30px;
}
`;

export {Title,Inputs,Registration,Username,Checkbox,Container2,Container,Container1,Input};
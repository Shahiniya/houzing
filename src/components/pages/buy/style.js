import styled from 'styled-components';


const Container = styled.div`
width:100%;
height:2200px;
background-color:grey;
display:flex;
flex-direction:column;
h5{
    margin:200px 10px 0 100px;
}
`;
const ContainerWrapper = styled.div`
width:1145px;
height:1430px;
background-color:red;
display:flex;
flex-wrap:wrap;
gap:20px;
justify-content:space-between;
margin:20px 20px 10px 20px;
/* flex-direction:column; */
`;

const Card = styled.div`
width:245;
height:130;
/* background:blue; */
margin:20px;
display:flex;
flex-direction:column;
h4{
    margin:10px;
}
h5{
    margin:10px;
}
`;

const Img = styled.img`
width:100px;
height:180px;
`;

export {Container,Img,Card,ContainerWrapper};
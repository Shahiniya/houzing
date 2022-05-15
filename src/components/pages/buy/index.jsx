import {React,useEffect,useState} from 'react'
import { Card, Card1, Container, ContainerWrapper, Img, WrapperContainer } from './style';
import {NavLink} from 'react-router-dom';
import Navbar from '../../navbar/navbar';
import { Footer } from '../../footer';
import { shop } from '../../../utils/shop';
const {REACT_APP_BASE_URL: url} = process.env

export const Buy = () => {
 
   const [data,setData] = useState([]);

   useEffect(()=>{
      fetch(`${url}api/v1/houses`,{
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify(data)
      }).then((res)=>res.json())
        .then((res)=>{
          localStorage.setData('Token',res?.data)
        })
   },[])

  return (
    <WrapperContainer>
    <Container>
      <Navbar></Navbar>
      <h5>We found 14 products avaiable for you</h5>
      
      <ContainerWrapper>
            {
              shop.map((value)=>{
               return(
                 <Card1 key={value.id}>
                  <Card>
                <Img src={value.src} />
                <h4>{value.title}</h4>
                <h5>{value.price}</h5>
                <button>Add to Card</button>
                </Card>
                </Card1>
               ) })
            }
      </ContainerWrapper>


    </Container>
    <Footer></Footer>

    </WrapperContainer>
  )
}
export default Buy;
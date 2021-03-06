import {React,useState} from 'react'
import {useEffect} from 'react-router-dom';
import { BigContainer,Img, BodyContainer, Card, CardContainer, Title, WrapperContainer, Title2 } from './style';
import Navbar from '../../../components/navbar/navbar'
import {shops} from '../../../utils/shop'
// import { getValue } from '@testing-library/user-event/dist/utils';
const {REACT_APP_BASE_URL: url} = process.env

export const Favorite = () => {
  const [state,setState] = useState({});
     
  //   useEffect(()=>{
  //       fetch(`${url}/api/v1/houses/me`,{
  //         method:'GET',

  //       }
  //       .then((res)=>res.json())
  //       .then(res => {})
  // },[])
  return (
    <WrapperContainer>
    <Navbar/>
        <BigContainer>
         
            <BodyContainer>

                <Title>
                   <h2>Favorites</h2>
                   <h5>Ready to jump back in?</h5>
                </Title>

                <CardContainer>
                  {
                    shops.map((value)=>(
                      <Card key={value.id}>
                      <Img  src={value.src0} alt='test' />
                      <Title2>
                      <h3>{value.title}</h3>
                      <h5>{value.title1}</h5>
                      <h5>{value.price1}</h5>
                      <h4>{value.price}</h4>
                      </Title2>
                      <button>FOR SALE</button>
                  </Card>
                    ))
                    
                  }
                </CardContainer>
            </BodyContainer>
        </BigContainer>
    
    
  </WrapperContainer>
  )
}
export default Favorite;
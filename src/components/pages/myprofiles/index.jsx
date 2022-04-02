import {React,useState} from 'react'
import { Doc,Image,Last,Box, Contact, ContactInformation, Container, First, Title, Update, Wrapper, AboutMe, MiddleWrapper, BoxWrapper, Photo, ChangePassword, NewPassword } from './style';
import {NavLink} from 'react-router-dom';
// import {Saidbar} from '../../saidbar/index'
import hero from '../../../assets/images/propertyHero.png'
import { BigContainer } from '../favorite/style';
import Navbar from '../../../components/navbar/navbar'


export const Myprofile = () => {

  const [change,setChange] = useState({
    text:'',
    email:'',
    number:'',
  });
   
  const onChange = (e) =>{
    const {value,name} = e.target;
      setChange({
        ...change,[name]:value
      })
  }

  const onAdd = ()=>{
    
  }
  return (
    <Wrapper>
    <Navbar/>
    <BigContainer>
        
    <Container>
      <Title>
        <h2>My Profile</h2>
        <h5>Ready to jump back in?</h5>
      </Title>
  
    <Box>
        <Contact>
          <ContactInformation>
          <MiddleWrapper>
             <First>
                <h3>Contact Information</h3>
                <input value={change.text} name='text' onChange={onChange} type='text' placeholder='First Name' />
                <input value={change.email} name='email' onChange={onChange} type='email' placeholder='Email' />
                <input value={change.number} name='number' onChange={onChange} type='number' placeholder='Mobile' />
                <h3>Social media</h3>
                <input type='link' placeholder='Facebook Url' />
                <input type='link' placeholder='Linkedin Url' />
                <input type='link' placeholder='Pinterest Url' />                </First>
             <Last>
              <h4>Last Name</h4>
              <input type='text' placeholder='Tufan' />
              <input type='number' placeholder='Phone' />
              <input type='text' placeholder='Skype' />
              <h4>Twitter Url</h4>
              <input type='text' placeholder='Tufan' />
              <input type='text' placeholder='Instagram Url' />
              <input type='text' placeholder='Website Url (without http)' />
            </Last>
            </MiddleWrapper>
            <AboutMe>
            <h5>About Me</h5>
              <input type='text'  />
              </AboutMe>
              <Update>
               <button onClick={()=>onAdd}>UPDATE PROFILE</button>
            </Update>
          </ContactInformation>
         
         
          <Photo>
          <h3>Photo</h3>
          <BoxWrapper>
          <Image src={hero} alt='test' />
          <Doc/>
          <button>UPLOAD PROFILE PHOTO</button>
          </BoxWrapper>
          <h6>minimum size 500px x 500px</h6>
          </Photo>
        </Contact>
        
    </Box>
        
    <ChangePassword>
        <h3>Change Password</h3>
        <input type='text' placeholder='Old Password' />
      <NewPassword>
        <input type='text' placeholder='New Password' />
        <input type='text' placeholder='Confirm New Password' />
      </NewPassword>
   <button>CHANGE PASSWORD</button>
        </ChangePassword>

   </Container>
   </BigContainer>

    </Wrapper>
  )
}
export default Myprofile;
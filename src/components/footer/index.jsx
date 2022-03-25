import React from 'react'
import { Logo,Logos,BigWrapper, Contacts, ContactUs,Discover,Img, Links, LinksWrapper, ListCategory, MiddleWrapper, QuickLinks, Subscribe, LastWrapper, LastWrapper1, LastWrapper2 } from './style'
import {footer, footer1} from '../../utils/footer'

export const Footer = () => {
  return (
    <BigWrapper>
        <MiddleWrapper>
        <Logo/>
           <ContactUs>
            <h4>Contact Us</h4>
                {
                    footer.map((value)=>{
                        return(
                            <Contacts key={value.id}>
                            <Img src={value.src} alt='tets'/>
                            <h6>{value.title}</h6>
                            </Contacts>
                        )
                    })
                }
                <LinksWrapper>
                {
                    footer1.map((value)=>{
                        return(
                            <Links key={value.id}>
                                <Img src={value.src}/>
                            </Links>
                        )
                    })
                }
                </LinksWrapper>
           </ContactUs>
          
           <Discover>
                <h3>Discover</h3>
                <h4>Chicago</h4>
                <h4>Los Angeles</h4>
                <h4>Miami</h4>
                <h4>NewYork</h4>
           </Discover>

           <ListCategory>
                <h3>List by Category</h3>
                <h4>Apartments</h4>
                <h4>Condos</h4>
                <h4>Houses</h4>
                <h4>Offices</h4>
                <h4>Retail</h4>
                <h4>Villas</h4>
            </ListCategory>

            <QuickLinks>
                <h3>Quick Links</h3>
                <h4>About us</h4>
                <h4>Term & Conditions</h4>
                <h4>User's Guide</h4>
                <h4>Support Center</h4>
                <h4>Press Info</h4>
                <h4>Contact Us</h4>
            </QuickLinks>

            <Subscribe>
                <h3>Subscribe</h3>
                <h4>We don't send spassm don't worry</h4>
                <input type='text' placeholder='Enter your email' />
           </Subscribe>
        </MiddleWrapper>

        <LastWrapper>
            <h6>Copyright 2021 CreativeLayers.All Right Reserved</h6>
             <LastWrapper1>
            <Logos/>
            <h4>Houzing</h4>
            </LastWrapper1>

            <LastWrapper2>
                <h5>Home</h5>
                <h5>Site Map</h5>
                <h5>Privacy Policy</h5>
                <h5>Cookie Policy</h5>
            </LastWrapper2>
         </LastWrapper>
    </BigWrapper>

    
  )
}

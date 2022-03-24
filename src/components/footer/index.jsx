import React from 'react'
import { BigWrapper, Contacts, ContactUs,Img, Links, MiddleWrapper } from './style'
import {footer, footer1} from '../../utils/footer'

export const Footer = () => {
  return (
    <BigWrapper>
        <MiddleWrapper>
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
                {
                    footer1.map((value)=>{
                        return(
                            <Links key={value.id}>
                                <Img src={value.src}/>
                            </Links>
                        )
                    })
                }
           </ContactUs>
        </MiddleWrapper>
    </BigWrapper>
  )
}

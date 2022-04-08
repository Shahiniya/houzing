import React from 'react'
import {WrapperContainer,Container2child1,Container2child2,Container2child3,Container2,BigContainer,BodyContainer,Title,Container1} from './style'
import Navbar from '../../../components/navbar/navbar'


export const Newproperty = () => {
  return (
    <WrapperContainer>
      <Navbar/>
      <BigContainer>
        <BodyContainer>
        <Title>
        <h2>Add New Property</h2>
        <h5>Ready to jump back in?</h5>
        </Title>
            <Container1>
              <input first type='text' placeholder='    Property Type *' />
              <input type='text' placeholder='    Type 12' />
              <input className='secondInput' type='text' placeholder='  Property Description *' />
            </Container1>

              <Container2>
                <Container2child1>
                <h4>Additional</h4>
                    <input type='text' placeholder='Property ID' />
                    <input type='text' placeholder='Label' />
                    <input type='text' placeholder='Beds' />
                    <input type='text' placeholder='Year built' />
                    <input type='text' placeholder='Lot area (sqft)' />
                </Container2child1>

                <Container2child2>
                <h4>Parent Property</h4>
                    <input type='text' placeholder='12' />
                    <input type='text' placeholder='Material' />
                    <input type='text' placeholder='Baths' />
                    <input type='text' placeholder='Home area(sqft)' />
                </Container2child2>

                <Container2child3>
                <h3></h3>
                    <input type='text' placeholder='Status' />
                    <input type='text' placeholder='Rooms' />
                    <input type='text' placeholder='Garages' />
                    <input type='text' placeholder='Lot dimensions' />
                </Container2child3>
              </Container2>
        </BodyContainer>
      </BigContainer>
    </WrapperContainer>
  )
}
export default Newproperty;
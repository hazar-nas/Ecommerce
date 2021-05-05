import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import CheckOutSteps from '../components/CheckOutSteps'
import FormContainer from '../components/FormContainer'


const ShippingScreen = ({ history }) => {

    const cart = useSelector(state=> state.cart)
    const {shippingAddress} = cart

    const dispatch = useDispatch();

    const[address, setAddress] = useState(shippingAddress.address || "" );
    const[city, setCity] = useState(shippingAddress.city || "");
    const[postalCode, setpostalCode] = useState(shippingAddress.postalCode || "");
    const[country, setCountry] = useState(shippingAddress.country || "");
    
    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(saveShippingAddress({address,city,postalCode,country}))
        history.push('/payment') // islemden sonra bu route a atacak bizi
    } 


    return (
        <>
        {/* asagidaki componentin implementasyonu önemli sadece 2 propunu kullanıyorum */}
        <CheckOutSteps step1 step2/>
        <h1>Shipping </h1>
        <FormContainer>
            <Form onSubmit={submitHandler} >

                <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                type='text'
                placeholder='Address'
                value={address}
                required
                onChange={(e)=>setAddress(e.target.value)}
                ></Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                    type='text'
                    value={city}
                    required
                    placeholder='Enter City'
                    onChange={(e)=>setCity(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                    type='text'
                    value={postalCode}
                    required
                    placeholder='Enter Postal Code'
                    onChange={(e)=>setpostalCode(e.target.value)}
                    ></Form.Control>
                </Form.Group>
               
                <Form.Group controlId='Enter Country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                    type='text'
                    value={country}
                    required
                    placeholder='Enter Country'
                    onChange={(e)=>setCountry(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
     </>
    )
}

export default ShippingScreen

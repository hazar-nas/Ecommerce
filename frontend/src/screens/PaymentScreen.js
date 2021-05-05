import React, { useState } from 'react'
import { Form, Button,Col } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'
import CheckOutSteps from '../components/CheckOutSteps'
import FormContainer from '../components/FormContainer'


const PaymentScreen = ({ history }) => {

    const[paymentMethod, setPaymentMethod] = useState('PayPal')

    const cart = useSelector(state=> state.cart)
    const {shippingAddress} = cart

    if(!shippingAddress){
        history.push('/shipping')
    }

    const dispatch = useDispatch();

    
    const submitHandler = (e)=>{
        e.preventDefault()
       dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder') // islemden sonra bu route a atacak bizi
    } 


    return (
        <>
        {/* asagidaki componentin implementasyonu önemli sadece 2 propunu kullanıyorum */}
        <CheckOutSteps step1 step2 step3/>
        <h1>Shipping </h1>
        <FormContainer>
            <Form onSubmit={submitHandler} >
            <Form.Group>
                <Form.Label as='legend'>Select a Method</Form.Label>
                  <Col>
                    <Form.Check
                    type='radio'
                    label='Paypal or Credit Card'
                    id='PayPal'
                    name='paymentMethod'
                    value={paymentMethod}
                  
                    onChange={(e)=> setPaymentMethod(e.target.value) }
                    >
                    </Form.Check>

                    <Form.Check
                    type='radio'
                    label='Stripe'
                    id='Stripe'
                    name='paymentMethod'
                    value={paymentMethod}
                    
                    onChange={(e)=> setPaymentMethod(e.target.value) }
                    >
                    </Form.Check>
                 </Col>
            </Form.Group>

            <Button type='submit' variant='primary'>
                Continue
            </Button>

            </Form>
        </FormContainer>
     </>
    )
}

export default PaymentScreen


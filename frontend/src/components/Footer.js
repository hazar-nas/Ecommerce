import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return <footer>
            <Container>
                <Row>
                    <Col className='footer text-center py-3'> 
                        Copyright &copy; Nashop
                    </Col>
                </Row>
            </Container>
    </footer>
    
}

export default Footer

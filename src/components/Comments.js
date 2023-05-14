import React from 'react';
import { Container , Row , Col , Form } from 'react-bootstrap';


const Comments = () => {
  return (
    <section id='contact' className='bg-light'>
         <div className="text-center my-3  py-3" >
            <h2 className=' text-primary'> Comments  <i class="bi bi-chat-left-heart"></i></h2>
        </div>
        <Container>
            <Row>
                <Col md={6}>
                    <Form>
                        
                    </Form>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Comments
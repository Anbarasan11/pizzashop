
import React from 'react';
import { Container , Row , Col ,Button  } from 'react-bootstrap';

const PickOfTheWeek = () => {
  return (
    <section id='mustry' className='my-2'>
        <div className="text-center my-3  py-3" >
            <h2 className='display-5 text-primary'><i class="bi bi-search-heart"></i>Pick Of The Week!</h2>
        </div>
        <Container>
            <Row className='align-items-center'>
                <Col md={7}>
                    <img src={require('../assets/center.jpg')} fluid={true} />
                </Col>
                <Col md={5}>
                    <div className='p-3'>
                    <h2 className='h1'>Double Cheeese Fijita</h2>
                    <p className='lead text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                    <Button varient='primary'> <i class="bi bi-basket"></i>  Buy Now</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default PickOfTheWeek
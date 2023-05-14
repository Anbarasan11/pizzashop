import React from 'react';
import { Container , Row , Col  } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
  return (
    <Container  >
       <Row  className='justify-content-center  align-items-center' >
        <Col lg={8}>
        <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../assets/one.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Pizza</h3>
          <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../assets/two.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Cheese Pizza</h3>
          <p  className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../assets/one.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Chicken Pizza</h3>
          <p  className='d-none d-sm-block'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>
        </Row> 
         <div className="text-center">
            <h2 className='display-5 mt-3'>Pizzas for every occasion </h2>
            <p className='lead text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
         </div>
    </Container>
  )
}

export default Banner
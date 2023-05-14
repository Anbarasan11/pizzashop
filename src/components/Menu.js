import { useState } from 'react';
import React from 'react';
import PizzaCard from './PizzaCard';
import { Container , Row , Col  } from 'react-bootstrap';

const Menu = () => {
    const [menu] = useState([1,2,3,4,5,6]);
  return (
    <section id='menu' className='bg-light'>
        <Container>
        <div className="text-center">
            <h3 className='text-primary my-3  py-5'  >
                Treat Yourself With our Everyday Menu <i class="bi bi-tiktok"></i>
            </h3>
        </div>
        <Row>
            {menu.map((item) => <Col md={6}  lg={4}>
                <PizzaCard />
                
            </Col> )}
           
            
        </Row></Container>
    </section>
    
  )
}

export default Menu
import React from 'react'
import { Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';

const ProductDetail = () => {

  const { getProductById } = useProducts();
  const { id } = useParams();
  const product = getProductById(id);


  if (!product) return ""



 

  const { description, image, price, name } = product;

  console.log(image);

  


  const handlerAdd = () => {

  }

  const handlerChange = () => {

  }


  return (
    <Container className="mt-5" style={{height: '100vh'}}>
      <Link to="/">Go back</Link>
      <Row>
        <Col>
          <Card.Img variant="top" src={image} />
        </Col>
        <Col>
          <Card.Title>{name}</Card.Title>
          <hr />
          <h4>{price}€</h4>
          <hr />
          <Card.Text>{description}</Card.Text>
          <hr />
          <Stack>
            <div>Quantity:</div>
            <Form.Select size="sm" onChange={handlerChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>
            <div className="vr" />
            <Button onClick={handlerAdd} variant='outline-primary'>
              Add
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
    
       
  )
}

export default ProductDetail;
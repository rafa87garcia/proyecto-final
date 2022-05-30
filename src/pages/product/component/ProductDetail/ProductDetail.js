import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';
import useShoppingCart from '../../../../hooks/useShoppingCart';

const ProductDetail = () => {

  const { getProductById } = useProducts();
  const { _id } = useParams();
  const product = getProductById(_id);
  const { addItem } = useShoppingCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) return "";
  const { description, image, price, name, category } = product;

  const handleAdd = () => {
    addItem({_id, quantity});
  }

  const handleChange = ({target}) => {
    const { selectedIndex } = target;
    const { value } = target[selectedIndex];
    setQuantity(value);
  }

  return (
    <Container className="mt-5" style={{'min-height': '100vh'}}>
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
          <Card.Text>{category}</Card.Text>
          <hr/>
          <Stack >
            
            <div>Quantity:</div>
            <Form.Select size="sm" onChange={handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>
            
            <Button onClick={handleAdd} variant='outline-primary' style={{'margin-top': '20px'}}>
              Add
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>


  )
}

export default ProductDetail;
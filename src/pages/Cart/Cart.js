import React from 'react'
import useShoppingCart from '../../hooks/useShoppingCart'
import { Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';


const Cart = () => {

  const { cart, removeItem, addItem } = useShoppingCart();
  const { getProductById } = useProducts();

  if (!cart.length) {
    return (<div style={{'minHeight': '100vh'}}>There are no items in the Shopping cart</div>);
  }

  const handleChange = (_id, {target}) => {
    const { selectedIndex } = target;
    const { value: quantity } = target[selectedIndex];
    addItem({ _id, quantity });
  }

  const handleRemove = (_id) => {
    removeItem(_id);
  }

  return (
    <Container className="mt-5" style={{'minHeight': '100vh'}}>
    <Row style={{ rowGap: "2rem" }}>
    {cart.map(({_id, quantity}) => {
      const {image, price, name } = getProductById(_id);

      return (
        
        <Card key={_id} style= {{width:'24rem', margin:'1rem'}}>
          <Card.Body>
            <Row>
              <Col xs={6}>
                <Card.Img variant='top' src={image} />
              </Col>
              <Col>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{price}€</Card.Text>
                <Stack>
                  <div>Size:</div>
                  <Form.Select
                    size="sm"
                    defaultValue={quantity}
                    onChange={handleChange.bind(this, _id)}
                  >
                    <option value="1">39</option>
                    <option value="2">40</option>
                    <option value="3">41</option>
                    <option value="4">42</option>
                    <option value="4">43</option>
                    <option value="4">44</option>
                  </Form.Select>
                  <div>Quantity:</div>
                  <Form.Select
                    size="sm"
                    defaultValue={quantity}
                    onChange={handleChange.bind(this, _id)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </Form.Select>
                  {/* <div className="vr" /> */}

                  
                  <Card.Link
                    href="#"
                    onClick={handleRemove.bind(this, _id)}
                   

                    style={{'marginTop':'20px'}}
                  >
                    Delete
                  </Card.Link>
                  </Stack>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        
      )
     })
    }
    </Row>
    <Row>
      <Col>
        <Button variant='outline-primary'>Buy</Button>

      </Col>
    </Row>

    </Container>
  )
}

export default Cart
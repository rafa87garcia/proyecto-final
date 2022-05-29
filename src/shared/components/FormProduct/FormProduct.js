import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Col, Row, Form, Button, Container } from 'react-bootstrap';

const FormProduct = (product) => {

  const save = (data) => {

    console.log(data);
  }

  return (
    <Container style={{ height: '100vh' }}>
      <Formik
        initialValues={{
          name: '',
          description: '',
          image: '',
          price: '',
          category: ''
        }}
        onSubmit={save}
      >
        {(handleSubmit, handleChange, errors) => (
          <Form noValidate onSubmit={handleSubmit} >
            <Row className='justify-content-md-center mt-5'>
              {product._id ? (<h1>Edit product {product.name} </h1>) : (<h1>Create product </h1>)}
            </Row>
            <Row className>
              <Form.Group as={Col} controlId="formGridEmail">
                <Col>
                  <Form.Label>Name</Form.Label>
                </Col>
                <Col >
                  <Form.Control id="name" name="name"
                    type='text'
                    value={product.name}
                    onChange={handleChange}
                  />
                </Col>
                <ErrorMessage name="name" component="div" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Col>
                  <Form.Label>Description</Form.Label>
                </Col>
                <Col >
                  <Form.Control id="description" name="description"
                    type='text'
                    value={product.description}
                    onChange={handleChange}
                  />
                </Col>
                <ErrorMessage name="description" component="div" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Col>
                  <Form.Label>image</Form.Label>
                </Col>
                <Col >
                  <Form.Control id="image" name="image"
                    type='text'
                    value={product.image}
                    onChange={handleChange}
                  />
                </Col>
                <ErrorMessage name="image" component="div" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Col>
                  <Form.Label>price</Form.Label>
                </Col>
                <Col >
                  <Form.Control id="price" name="price"
                    type='number'
                    value={product.price}
                    onChange={handleChange}
                  />
                </Col>
                <ErrorMessage name="price" component="div" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Col>
                  <Form.Label>category</Form.Label>
                </Col>
                <Col >
                  <Form.Control id="category" name="category"
                    type='text'
                    value={product.category}
                    onChange={handleChange}
                  />
                </Col>
                <ErrorMessage name="category" component="div" />
              </Form.Group>
            </Row>
            <Row className='form__button '>
              <Col className='form__button--padding'>
                <Button type='submit' variant='outline-primary'> {product._id ? (<>Edit</>) : (<>Create</>)}</Button>
              </Col>

            </Row>
          </Form>
        )}

      </Formik>
    </Container>
  );
}

export default FormProduct;

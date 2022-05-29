import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Col, Row, Form, Button, Container } from 'react-bootstrap';

const FormProduct = (product) => {

  return (
    <Container style={{ height: '100vh' }}>
    <Formik
      initialValues={{
        name: product.name,
      }}
    >
      {(handleSubmit, handleChange, errors) => (
        <Form noValidate onSubmit={handleSubmit} >
          <Row className='justify-content-md-center mt-5'>
            {!!product.id ? (<h1>Edit product {product.name} </h1>) : (<h1>Create product </h1>)} 
          </Row>
          <Row className="">
            <Form.Group as={Col} controlId="formGridEmail">
              <Col>
                <Form.Label>Name</Form.Label>
              </Col>
              <Col >
                <Form.Control id="name" name="name"
                  type='text'
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
                <Form.Control name="description"
                  type='text'
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
                <Form.Control name="image"
                  type='text'
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
                <Form.Control name="price"
                  type='numbre'
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
                <Form.Control name="category"
                  type='text'
                  onChange={handleChange}
                />
              </Col>
              <ErrorMessage name="category" component="div" />
            </Form.Group>
          </Row>
          <Row className='form__button '>
            <Col className='form__button--padding'>
              <Button type='submit' variant='outline-primary'> {!!product.id ? (<>Edit</>) : (<>Create</>)}</Button>
            </Col>

          </Row>
        </Form>
      )}

    </Formik>
    </Container>
  );
}

export default FormProduct;

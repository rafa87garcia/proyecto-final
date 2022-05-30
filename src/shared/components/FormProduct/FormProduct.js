import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import * as yup from "yup";
import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import { useNavigate } from "react-router-dom";

const FormProduct = (product) => {
  const { createProduct, editProduct } = useProducts();
  
  let navigate = useNavigate();
  const save = (data) => {
    if (!!data.id) {
      editProduct(data);
      navigate(`/productDetail/${data.id}`, { replace: true });
    } else {
      createProduct(data);
    }
  }

  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    image: yup.string().required(),
    price: yup.number().required(),
    category: yup.string().required()
  });

  return (
    <Container style={{ height: '100vh' }}>
      <Formik
        initialValues={{
          id: product._id,
          name: product.name,
          description: product.description,
          image: product.image,
          price: product.price,
          category: product.category
        }}
        onSubmit={save}
        validationSchema={schema}
      >
        {({ handleSubmit, handleChange, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className='justify-content-md-center mt-5'>
              {product._id ? (<h1>Edit product {product.name} </h1>) : (<h1>Create product </h1>)}
            </Row>
            <Row className>
              <Form.Group as={Col} controlId="formGridName">
                <Col>
                  <Form.Label>Name</Form.Label>
                </Col>
                <Col >
                  <Form.Control name="name"
                    type='text'
                    defaultValue={product.name}
                    onChange={handleChange}
                  />
                </Col>
                <ErrorMessage name="name" component="div" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridDescription">
                <Col>
                  <Form.Label>Description</Form.Label>
                </Col>
                <Col >
                  <Form.Control name="description"
                    type='text'
                    defaultValue={product.description}
                    onChange={handleChange}
                  />
                </Col>
                <ErrorMessage name="description" component="div" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridImage">
                <Col>
                  <Form.Label>image</Form.Label>
                </Col>
                <Col >
                  <Form.Control name="image"
                    type='text'
                    defaultValue={product.image}
                    onChange={handleChange}
                  />
                </Col>
                <ErrorMessage name="image" component="div" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPrice">
                <Col>
                  <Form.Label>price</Form.Label>
                </Col>
                <Col >
                  <Form.Control name="price"
                    type='number'
                    defaultValue={product.price}
                    onChange={handleChange}
                  />
                </Col>
                <ErrorMessage name="price" component="div" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCategory">
                <Form.Label>Category</Form.Label>
                <Form.Select defaultValue={product.category} name="category" onChange={handleChange}>
                  <option>Choose...</option>
                  <option value="Man">Man</option>
                  <option value="Woman">Woman</option>
                  <option value="Child">Child</option>
                </Form.Select>
              </Form.Group>
              <ErrorMessage name="category" component="div" />
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

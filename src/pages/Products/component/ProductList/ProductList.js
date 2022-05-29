import React, { useState, useEffect } from 'react';
import useProducts from '../../../../hooks/useProducts';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../../../../shared/components/Product/Product';

import "./productList.scss"
import { Link } from 'react-router-dom';

const ProductList = () => {

  const { products } = useProducts();


  if (!products.length) {
    return (<div>No se han encontrado productos</div>);
  }

  return (
    <Container fluid='md' className='mt-5'>
      <Row>
        <Col>
          <Link to="/productcreate">Create product</Link>
        </Col>
      </Row>
      <Row style={{ rowGap: "2rem" }}>
        {products.map((data) => (
          <Col key={data._id}>
            <Product {...data} />
          </Col>
        ))}

      </Row>
    </Container>

  )
}

export default ProductList;
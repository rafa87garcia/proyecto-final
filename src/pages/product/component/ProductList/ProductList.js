import React, { useState, useEffect } from 'react';
import useProducts from '../../../../hooks/useProducts';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../../../../shared/components/Product/Product';

import "./productList.scss"

const ProductList = () => {


  const { products } = useProducts();

  if (!products.length) {
    return (<div>No se han encontrado productos</div>);
  }

  return (
    <Container fluid='md' className='mt-5'>
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
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../../../../shared/components/Product/Product';

import "./productList.scss"

function ProductList() {

    const BASEURL = "https://fakestoreapi.com/products";
    
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(BASEURL)
        .then ((response) => response.json())
        .then(
            (response) => {
                console.log(response);
                setProducts(response);
            }
        )

    },[])
   
    return (
      <Container fluid='md' className='mt-5'>
        <Row style={{rowGap: "2rem"}}>
        {products.map((data) => (
              <Col key={data.id}>
                <Product {...data} />
              </Col>
            ))}
          
        </Row>
    </Container>
    
  )
}

export default ProductList
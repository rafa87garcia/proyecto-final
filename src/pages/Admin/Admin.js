import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <Row>
        <Col>
          <Link to="produclist" basename="/">Product list</Link>
        </Col>
        <Col>
          <Link to="orderlist" basename="/">Order list</Link>
        </Col>
      </Row>
    </div>
  );
}

export default Admin;

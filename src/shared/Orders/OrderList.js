import { Col, Container, Row } from 'react-bootstrap';
import Order from './Order.js';
import "./_Orderlist.scss";
const OrderList = () => {
    const orders = [{id:"01", name:"zapatillas", description:"False Order", pvp:300, total:300},{id:"02", name:"mocasines", description:"saltarines ", pvp:350, total:350}];
 
  if (!orders.length) {
    return (<div>No se han encontrado pedidos</div>);
  }
    
  return (
    <div>
        <h1 className='title'>My Orders</h1>
        <Container fluid='md' className='mt-5'>
          <Row style={{ rowGap: "2rem" }}>
              {orders.map((data) => (
                  <Col key={data.id}>
                      <Order {...data} />
                  </Col>
              ))}
          </Row>
        </Container>
    </div>

  )
}

export default OrderList;
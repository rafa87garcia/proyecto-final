import { Card, Stack } from 'react-bootstrap'
import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useShoppingCart from '../../../hooks/useShoppingCart';
import './_product.scss'

const Product = ({ _id, name, image, price }) => {

  const { addItem } = useShoppingCart();

  const handlerAdd = () => {
    const quantity = 1;
    addItem({ _id, quantity });
  }

  return (
    <Card>
      <Link to={`productdetail/${_id}`}>
        <Card.Img variant="top" src={image} className='card--image' />
        <Card.Body style={{ height: '88px' }}>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Link>
      <Link to={`productedit/${_id}`} basename="/">
        Edit
      </Link>
      <Card.Footer>
        <Stack direction="horizontal">
          <Card.Text style={{ margin: "0" }}>{price}€</Card.Text>
          <FaCartArrowDown
            className="ms-auto"
            style={{ fontSize: "30px" }}
            onClick={handlerAdd}
          />
        </Stack>
      </Card.Footer>
    </Card>
  );
};

export default Product;

import { useContext, useState, useEffect } from 'react';
import Context from '../context/StaticContext';
import { orderAPI } from '../shared/services';

function useOrders() {

  const [orders, setOrders] = useState([]);
  const [productsError, setProductsError] = useState(null);
  const { orderContext, setOrderContext } = useContext(Context);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await orderAPI.get();
        setOrderContext(data);
      } catch (error) {
        setProductsError(error);
      }
    };
    if (!orderContext.length) {

      getData();
    }
    else {
      setOrders(orderContext);
    }
  }, [orderContext, setOrderContext]);



  return {
    orders,
    productsError,
    
  }
}

export default useOrders;
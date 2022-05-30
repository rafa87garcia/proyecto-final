import { useContext, useState, useEffect } from 'react';
import Context from '../context/StaticContext';
import { productAPI } from '../shared/services';

function useProducts() {

  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState(null);
  const { productContext, setProductContext } = useContext(Context);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await productAPI.get();
        setProductContext(data);
      } catch (error) {
        setProductsError(error);
      }
    };
    if (!productContext.length) {

      getData();
    }
    else {
      setProducts(productContext);
    }
  }, [productContext, setProductContext]);


  const getProductById = (id) => products.find(({ _id }) => _id === id);

  const createProduct = (data) => {
    productAPI.add(data);
    setProductContext([...products, data]);
  }

  const editProduct = async (data) => {
    const { data: ProductEdited } = await productAPI.edit(data);
    const product = products.filter(({ _id }) => _id !== data.id)
    setProductContext([...product, ProductEdited]);
    return product;
  }

  const deleteProduct = (data) => {

  }

  return {
    products,
    productsError,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct,
  }
}

export default useProducts;
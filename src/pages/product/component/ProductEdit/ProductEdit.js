import React from 'react';

import { useParams } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';
import FormProduct from '../../../../shared/components/FormProduct/FormProduct';

const ProductEdit = () => {

  const { getProductById } = useProducts();
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) return "";

  return (
    <FormProduct product={product} />
  );
}

export default ProductEdit;

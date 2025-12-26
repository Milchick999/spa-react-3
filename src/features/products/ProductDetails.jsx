import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from './productsApi';

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
    </div>
  );
}

export default ProductDetails;
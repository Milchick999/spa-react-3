import { Link } from 'react-router-dom';
import { useGetProductsQuery } from './productsApi';

function Products() {
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <h2>Products</h2>

      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.title}, {product.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../api/productsApi';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function Products() {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) return <CircularProgress />;

  return (
    <Grid container spacing={3} sx={{ maxWidth: 1200, margin: '0 auto'}}>
      {data.products.map((product) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id} >

            <Card
              component={Link}
              to={`/products/${product.id}`}
              sx={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%',  borderRadius: 3}}
            >
              <CardMedia
                component="img"
                image={product.thumbnail}
                alt={product.title}
                sx={{ objectFit: 'contain', height: 200 }}
              />

              <CardContent sx={{ display: 'flex', flexDirection: 'column'}}>

                <Typography variant="h6" noWrap>
                  {product.title}
                </Typography>

                <Typography color="text.secondary">
                  ${product.price}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1}}>
                  <StarIcon sx={{ fontSize: 20, color: 'gold' }} />
                  {Number(product.rating).toFixed(1)}
                </Typography>

              </CardContent>
            </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;

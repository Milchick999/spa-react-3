import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from './productsApi';
import {
  Box,
  Typography,
  CircularProgress,
  Container,
  Alert,
  AlertTitle,
} from '@mui/material';
import StarIcon from "@mui/icons-material/Star";

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);

  if (isLoading) {
    return (
      <Container maxWidth="md" sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }
  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Alert severity="error">
          <AlertTitle>Error loading product</AlertTitle>
          Please try again later
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 4,
          borderRadius: 2,
        }}
      >
        <Box
          component="img"
          src={data.thumbnail}
          alt={data.title}
          sx={{
            width: '100%',
            maxWidth: 360,
            borderRadius: 2,
            objectFit: 'contain',
          }}
        />
      </Box>

      <Box>
        <Typography variant="h4">{data.title}</Typography>

        <Typography variant="h5" color="text.secondary" mt={1}> ${data.price} </Typography>

        <Typography variant="body1" color="text.primary" sx={{ mt: 3, lineHeight: 1.7 }}>
          {data.description}
        </Typography>

        <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
          Brand: {data.brand}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', fontSize: 20, gap: 0.5, mt: 2}}>
          <StarIcon sx={{ fontSize: 30, color: 'gold' }} />
          {Number(data.rating).toFixed(1)}
        </Typography>
      </Box>
    </Container>
  );
}

export default ProductDetails;
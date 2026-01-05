import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetProductByIdQuery } from '../../api/productsApi';
import {
  Box,
  Typography,
  CircularProgress,
  Container,
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemText,
  Rating,
  Divider,
} from '@mui/material';
import StarIcon from "@mui/icons-material/Star";

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);

  const [showRewiews, setShowRewiews] = useState(false);
  const handleToggleRewiews = () => {
    setShowRewiews(state => !state)
  };

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
        <Typography variant="h4">
          {data.title}
        </Typography>

        <Typography variant="h5" color="text.secondary" mt={1}>
          ${data.price}
        </Typography>

        <Typography variant="body1" color="text.primary" sx={{ mt: 3, lineHeight: 1.7 }}>
          {data.description}
        </Typography>

        {data.brand ? (
          <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
          Brand: {data.brand}
          </Typography>)
        : ''}

        <Box
          onClick={handleToggleRewiews}
          sx={{ cursor: 'pointer',
            width: 'fit-content',
            fontSize: 15,
            boxShadow: '4px 4px 8px -3px Gray',
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            mt: 3,
            pr: 1,
            pl: 1,
            borderRadius: 1,
            transition: '0.3s',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                boxShadow: '6px 6px 12px -3px Gray',
              }
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', fontSize: 20, gap: 0.5}}>
            <StarIcon sx={{ fontSize: 30, color: 'gold' }} />
            {Number(data.rating).toFixed(1)}
          </Typography>

          <Typography variant="body2" color="text.secondary" >
            Show rewiews ({data.reviews.length})
          </Typography>
        </Box>
      </Box>


      {showRewiews && (
        <Box sx={{ mt: 3 }}>
          {data.reviews && data.reviews.length ? (
            <List>
              {data.reviews.map((review, index) => (
                <Box key={index}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
                          <Typography>{review.reviewerName}</Typography>
                          <Rating value={review.rating} readOnly size="small" />
                        </Box>
                      }
                      secondary={review.comment}
                    />
                  </ListItem>

                  {index < data.reviews.length - 1 && (
                    <Divider variant="middle" />
                  )}
                </Box>
              ))}
            </List>
          ) : (
            <Typography>No reviews yet</Typography>
          )}
        </Box>
      )}
    </Container>
  );
}

export default ProductDetails;
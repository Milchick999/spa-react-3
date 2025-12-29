import {
  Box,
  Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ pt: 2, pb: 2, mt: 3, textAlign: 'center', background: 'AliceBlue' }}
    >
      <Typography variant="body2" color="text.secondary">
        2025 My Store
      </Typography>
    </Box>
  );
}

export default Footer;
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import Footer from './Footer';

function MainLayout( {children} ) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/products">
            Products
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4, minHeight: '80vh' }}>
        {children}
      </Container>

      <Footer />
    </>
  );
}

export default MainLayout;
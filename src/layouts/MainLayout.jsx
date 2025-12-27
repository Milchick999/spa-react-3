import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

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

      <footer style={{ textAlign: 'center', padding: '16px 0' }}>
        <p>Footer</p>
      </footer>
    </>
  );
}

export default MainLayout;
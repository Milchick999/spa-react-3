import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

function MainLayout() {
  return (
    <>
      <Header />

      <Container sx={{ mt: 4, minHeight: '80vh' }}>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}

export default MainLayout;
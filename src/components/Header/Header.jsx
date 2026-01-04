import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
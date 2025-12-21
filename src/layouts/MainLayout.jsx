import { Outlet, Link } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/login">Login</Link> {" "}
          <Link to="/products">Products</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}

export default MainLayout;
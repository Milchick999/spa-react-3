import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h2>404 — Page not found</h2>
      <Link to="/login">Back to Login</Link>
    </div>
  )
}

export default NotFound;
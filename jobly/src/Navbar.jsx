import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAuth } from './AuthContext'; // Import useAuth hook

const Navbar = () => {
  const { user, logout } = useAuth(); // Destructure user and logout function from AuthContext

  return (
    <AppBar position="static" style={{ backgroundColor: '#2196f3' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            My App
          </Link>
        </Typography>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/companies">Companies</Button>
            <Button color="inherit" component={Link} to="/jobs">Jobs</Button>
            <Button color="inherit" component={Link} to="/profile">Profile</Button>
            <Button color="inherit" onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

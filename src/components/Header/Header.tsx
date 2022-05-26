import { AppBar, Button, Toolbar } from '@mui/material';
import React, { FC, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { selectAuth } from 'src/store/profile/selectors';
// import { changeAuth } from 'src/store/profile/slice';
import { logOut } from 'src/services/firebase';
import { ThemeContext } from 'src/utils/ThemeContext';

import './Header.css';
import { changeAuth } from 'src/store/profile/slice';

const navigate = [
  {
    id: 1,
    to: '/',
    name: 'Home',
  },
  {
    id: 2,
    to: '/profile',
    name: 'Profile',
  },
  {
    id: 3,
    to: '/chats',
    name: 'Chats',
  },
  {
    id: 4,
    to: '/about',
    name: 'About',
  },
  {
    id: 5,
    name: 'Articles',
    to: '/articles',
  },
];

export const Header: FC = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  const [error, setError] = useState('');

  const handleSignOut = async () => {
    setError('');
    try {
      await logOut();
    } catch (err) {
      setError((err as Error).message);
    }
  };
  return (
    <header className="header">
      <AppBar
        position="static"
        className={theme === 'light' ? '' : 'header-dark'}
      >
        <Toolbar className="header__wrapper">
          <div>
            {navigate.map((link) => (
              <Button key={link.id} color="inherit">
                <NavLink
                  className="header__link"
                  to={link.to}
                  style={({ isActive }) => ({
                    borderBottom: isActive ? '1px solid #fff' : 'none',
                  })}
                  id={link.name}
                >
                  {link.name}
                </NavLink>
              </Button>
            ))}
          </div>
          {auth ? (
            <button onClick={handleSignOut}>logout</button>
          ) : (
            <>
              <Link to="/signin">SingIn</Link> |<Link to="/signup">SingUp</Link>
            </>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Toolbar>
      </AppBar>
      <main className={theme === 'light' ? '' : 'main-dark'}>
        <Outlet />
      </main>
    </header>
  );
};

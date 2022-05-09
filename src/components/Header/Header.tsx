import { AppBar, Button, Toolbar } from '@mui/material';
import React, { FC, useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { ThemeContext } from 'src/utils/ThemeContext';
import './Header.css';

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
];

export const Header: FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <header className="header">
      <AppBar
        position="static"
        className={theme === 'light' ? '' : 'header-dark'}
      >
        <Toolbar>
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
        </Toolbar>
      </AppBar>
      <main className={theme === 'light' ? '' : 'main-dark'}>
        <Outlet />
      </main>
    </header>
  );
};

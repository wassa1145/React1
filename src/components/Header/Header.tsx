import { AppBar, Button, Toolbar } from '@mui/material';
import React, { FC } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
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
];

export const Header: FC = () => (
  <header className="header">
    <AppBar position="static">
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
    <main>
      <Outlet />
    </main>
  </header>
);

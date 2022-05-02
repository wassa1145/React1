import React, { FC, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeContext } from './../utils/ThemeContext';
import { changeName, toggleProfile } from '../store/profile/actions';
import { Button, TextField } from '@mui/material';
import { selectName, selectVisible } from './../store/profile/selectors';

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const visible = useSelector(selectVisible);
  const name = useSelector(selectName);

  return (
    <>
      <h2>Profile</h2>
      <div className="box">
        <div className="profile-row">
          <span>Тема: {theme === 'light' ? '🌞 Светлая' : '🌙 Темная'}</span>
          <Button variant="outlined" onClick={toggleTheme}>
            Изменить тему
          </Button>
        </div>
      </div>
      <div className="box">
        <p>Имя: {name}</p>
        <div className="profile-row">
          <TextField
            variant="outlined"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Введите имя"
            value={value}
          />
          <Button
            variant="outlined"
            onClick={() => dispatch(changeName(value))}
          >
            Изменить имя
          </Button>
        </div>
      </div>
      <div className="box">
        <input type="checkbox" checked={visible} />
        <Button variant="outlined" onClick={() => dispatch(toggleProfile())}>
          change visible
        </Button>
      </div>
    </>
  );
};

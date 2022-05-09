import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AboutWithConnect } from 'src/pages/About';
import { Home } from 'src/pages/Home';
import { Profile } from 'src/pages/Profile/Profile';
import { ChatList } from 'src/components/ChatList/ChatList';
import { Header } from 'src/components/Header/Header';

const Chats = React.lazy(() =>
  import('src/pages/Chats/Chats').then((module) => ({
    default: module.Chats,
  }))
);

export const AppRouter: FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />

        <Route path="chats">
          <Route index element={<ChatList />} />
          <Route path=":chatId" element={<Chats />} />
        </Route>

        <Route path="about" element={<AboutWithConnect />} />
      </Route>

      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  </Suspense>
);

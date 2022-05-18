import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AboutWithConnect } from 'src/pages/About';
import { Home } from 'src/pages/Home';
import { Profile } from 'src/pages/Profile/Profile';
import { Chats } from 'src/pages/Chats/Chats';
import { ChatList } from 'src/components/ChatList/ChatList';
import { Header } from 'src/components/Header/Header';
import { Articles } from 'src/pages/Articles';
import { SignIn } from 'src/pages/SignIn';
import { SignUp } from 'src/pages/SignUp';
import { PrivateRoute } from '../PrivateRoute';
import { PublicRoute } from '../PublicRoute';

// const Chats = React.lazy(() =>
//   import('src/pages/Chats/Chats').then((module) => ({
//     default: module.Chats,
//   }))
// );

export const AppRouter: FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route path="chats">
          <Route
            index
            element={
              <PrivateRoute>
                <ChatList />
              </PrivateRoute>
            }
          />
          <Route
            path=":chatId"
            element={
              <PrivateRoute>
                <Chats />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="about" element={<AboutWithConnect />} />

        <Route path="articles" element={<Articles />} />
        <Route
          path="signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  </Suspense>
);

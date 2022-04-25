import React, { FC, useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeContext, defaultContext } from './utils/ThemeContext';
import { nanoid } from 'nanoid';
import './App.css';
import { store } from './store';
import { ChatList } from './components/ChatList/ChatList';
import { CONSTANTS } from './constants';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Chats } from './pages/Chats';

export interface Chat {
  id: string;
  name: string;
}

interface Message {
  id: string;
  author: string;
  message: string;
  systemMessage?: boolean;
}

export interface Messages {
  [key: string]: Message[];
}

const initialMessage: Messages = {
  default: [
    {
      id: '1',
      author: CONSTANTS.USER,
      message: 'Hello geekbrains',
    },
  ],
};

export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>(initialMessage);
  const [theme, setTheme] = useState(defaultContext.theme);

  const chatList = useMemo(
    () =>
      Object.entries(messages).map((chat) => ({
        id: nanoid(),
        name: chat[0],
      })),
    [Object.entries(messages).length]
  );

  const onAddChat = (chat: Chat) => {
    setMessages({
      ...messages,
      [chat.name]: [],
    });
  };
  const deleteChat = (chatName: string) => () => {
    const newMessages = { ...messages };
    delete newMessages[chatName];
    setMessages(newMessages);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="chats">
                <Route
                  index
                  element={
                    <ChatList
                      chats={chatList}
                      onAddChat={onAddChat}
                      deleteChat={deleteChat}
                    />
                  }
                />
                <Route
                  path=":chatId"
                  element={
                    <Chats
                      messages={messages}
                      setMessages={setMessages}
                      chatList={chatList}
                      onAddChat={onAddChat}
                      deleteChat={deleteChat}
                    />
                  }
                />
              </Route>
            </Route>
            <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </Provider>
  );
};

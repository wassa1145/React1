import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { Chats } from './Chats';
import { store } from 'src/store';
describe('Chats', () => {
  it('Render component', async () => {
    render(
      <Provider store={store}>
        <React.Suspense fallback="test loading">
          <MemoryRouter>
            <Chats />
          </MemoryRouter>
        </React.Suspense>
      </Provider>
    );
    const lazyElement = await screen.findByText(/Список чатов/);
    expect(lazyElement).toBeInTheDocument();
  });
});

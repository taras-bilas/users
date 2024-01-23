import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { UserCard } from '../UserCard';

const mockStore = configureStore();

test('renders user card with correct information', () => {
  const user = {
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
  };

  const store = mockStore({});

  render(
    <Provider store={store}>
      <Router>
        <UserCard user={user} />
      </Router>
    </Provider>
  );

  const userNameElement = screen.getByText(user.name);
  const phoneElement = screen.getByText(user.phone);
  const emailElement = screen.getByText(user.email);

  expect(userNameElement).toBeInTheDocument();
  expect(phoneElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
});

test('dispatches setUserInfo action on "Details" link click', () => {
  const user = {
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
  };

  const store = mockStore({});

  render(
    <Provider store={store}>
      <Router>
        <UserCard user={user} />
      </Router>
    </Provider>
  );

  const detailsLink = screen.getByText('Details');
  fireEvent.click(detailsLink);

  const actions = store.getActions();
  expect(actions).toHaveLength(1);
  expect(actions[0].type).toEqual('SET_USER_INFO');
  expect(actions[0].payload).toEqual(user);
});
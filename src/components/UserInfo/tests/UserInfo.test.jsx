import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { UserInfo } from '../UserInfo';

const mockStore = configureStore();

test('renders user information correctly', () => {
  const user = {
    name: 'John Doe',
    company: {
      name: 'ABC Company',
      catchPhrase: 'Lorem Ipsum',
      bs: 'Business Strategy',
    },
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 4',
      city: 'Cityville',
    },
    website: 'www.example.com',
  };

  const store = mockStore({ userInfo: user });

  render(
    <Provider store={store}>
      <Router>
        <UserInfo />
      </Router>
    </Provider>
  );

  const userNameElement = screen.getByText(user.name);
  const companyNameElement = screen.getByText(`Works at ${user.company.name}`);
  const phoneElement = screen.getByText(user.phone);
  const emailElement = screen.getByText(user.email);
  const addressElement = screen.getByText(`${user.address.street}, ${user.address.suite}, ${user.address.city}`);
  const websiteElement = screen.getByText(user.website);
  const companyCatchPhraseElement = screen.getByText(user.company.catchPhrase);
  const companyBusinessStrategyElement = screen.getByText(user.company.bs);

  expect(userNameElement).toBeInTheDocument();
  expect(companyNameElement).toBeInTheDocument();
  expect(phoneElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(addressElement).toBeInTheDocument();
  expect(websiteElement).toBeInTheDocument();
  expect(companyCatchPhraseElement).toBeInTheDocument();
  expect(companyBusinessStrategyElement).toBeInTheDocument();
});
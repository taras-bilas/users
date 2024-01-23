import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Header } from '../Header';

test('renders header with correct title', () => {
  const title = 'My Header Title';
  render(<Header title={title} />);
  const titleElement = screen.getByText(title);
  expect(titleElement).toBeInTheDocument();
});

test('renders header children', () => {
  render(
    <Header title="Title">
      <div data-testid="child-element">Child Element</div>
    </Header>
  );
  const childElement = screen.getByTestId('child-element');
  expect(childElement).toBeInTheDocument();
});

test('applies custom class to header element', () => {
  const customClass = 'header';
  render(<Header title="Title" />, { wrapper: ({ children }) => <div className={customClass}>{children}</div> });
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toHaveClass(customClass);
});
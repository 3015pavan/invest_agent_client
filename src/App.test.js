import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the API module to avoid network calls during tests
jest.mock('./api/api', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

// Mock the socket module to avoid WebSocket connections during tests
jest.mock('./api/socket', () => ({
  __esModule: true,
  default: {
    auth: {},
    connect: jest.fn(),
    on: jest.fn(),
    off: jest.fn(),
    disconnect: jest.fn(),
  },
}));

test('renders App component', () => {
  render(<App />);
  // Check that the App div is present
  const appElement = document.querySelector('.App');
  expect(appElement).toBeInTheDocument();
});

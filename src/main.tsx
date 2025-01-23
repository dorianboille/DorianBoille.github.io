import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Application starting...');
console.log('Current URL:', window.location.href);
console.log('Document base URL:', document.baseURI);

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Failed to find root element!');
  throw new Error('Failed to find the root element');
}

console.log('Root element found:', rootElement);

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
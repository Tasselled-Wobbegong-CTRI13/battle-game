import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx';
import { AuthProvider } from './components/AuthProvider.jsx';
import './styles/main.scss'

const domNode = document.getElementById('root');
const root = createRoot(domNode);

// render(<App />, domNode);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
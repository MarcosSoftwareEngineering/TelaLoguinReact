import React, { StrictMode } from 'react'; // Import React and StrictMode for highlighting potential issues
import { createRoot } from 'react-dom/client'; // Import createRoot from React DOM for rendering the app
import './index.css'; // Import global CSS styles
import App from './App.jsx'; // Import the main App component

// Create a root element and render the App component inside it
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Wrap App in StrictMode to enable additional checks and warnings */}
    <App /> {/* Render the App component */}
  </StrictMode>,
);

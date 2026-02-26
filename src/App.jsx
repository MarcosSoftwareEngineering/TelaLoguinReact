import React from 'react' // Import React library
import './App.css' // Import global CSS styles
import Login from './login/Login.jsx' // Import the Login component

function App() {
  return (
    <div className="App"> {/* Main container with CSS class "App" */}
      <Login /> {/* Render the Login component */}
    </div>
  )
}

export default App // Export App component as default

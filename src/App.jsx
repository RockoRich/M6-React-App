import { useState } from 'react';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Mainmenu } from './components/Mainmenu';
import { Customers } from './components/Customers';

import './App.css';

export function App() {
  const [view, setView] = useState("login");

  // Function to change the current view
  function changeView(ev) {
    // If the current view is "login", switch to "register", and vice versa
    view === "login" ? setView("register") : setView("login");
  }

  // Function to render the appropriate view based on the current view state
  function renderView(ev) {
    switch (view) {
      case "register":
        return <Register setView={setView} />;
        break;
      case "login":
        return <Login setView={setView} />;
        break;
      case "main":
        return <Mainmenu setView={setView} />;
        break;
      case "customers":
        return <Customers setView={setView} />;
        break;
      default:
        break;
    }
  }

  return (
    <>
      {renderView()}

      <br />

      <div className='d-flex justify-content-center'>
        {/* Display a link to switch between login and register views, except when in main or customers view */}
        {view !== 'main' && view !== 'customers' && (
          <a href='#'>
            <p type='text' onClick={changeView}>
              {view === "login" ? "Don't have an account, Register" : "Have an account, Login"}
            </p>
          </a>
        )}
      </div>
    </>
  );
}
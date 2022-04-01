// Responsible for the default view of the application
// Displays the retrieve and render all of the Records we insterted when doing HTTP request using postman.

import React from "react";
import './App.css';
import Postmessages from "./components/Postmessages";

// Refers to `store.js`
import { Provider } from "react-redux"; 
import { store } from "./actions/store"

function App() {
  return (
    <Provider store={store}>
      <Postmessages />
    </Provider>
  );
}

export default App;

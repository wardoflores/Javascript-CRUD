// import React from "react";
import './App.css';
import Postmessages from "./components/Postmessages";
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

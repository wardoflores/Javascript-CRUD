// import React from "react";
import './App.css';
import postmessages from "./components/postmessages";
import { Provider } from "react-redux";
import { store } from "./actions/store"

function App() {
  return (
    <Provider store={store}>
      <postmessages/>
    </Provider>
  );
}

export default App;

import React from "react";
import AppRouter from "./router/router";
import { HomePage } from "./pages";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;

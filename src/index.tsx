import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import {App} from "./App";
import { setupStore } from "./store/store";
import {Provider} from "react-redux";

const store = setupStore();

function prepare() {
  if (process.env.NODE_ENV === 'development') {
    const {worker} = require('./mocks/browser');

    return worker.start();
  }

  return Promise.resolve();
}

const container = document.getElementById('root');
const root = createRoot(container!);

const app =(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)

prepare().then(() => root.render(app))
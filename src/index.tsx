import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import {App} from "./App";
import { setupStore } from "./store/store";
import {Provider} from "react-redux";

const store = setupStore();

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

const app =(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)


root.render(app);
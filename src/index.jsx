import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const element = document.querySelector('#root');

createRoot(element).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
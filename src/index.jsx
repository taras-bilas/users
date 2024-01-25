import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter } from 'react-router-dom';

const element = document.querySelector('#root');

createRoot(element).render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
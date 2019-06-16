import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';
import createActions from './actions';
import { AppContextData } from './types';
import './index.css';
import App from './App';

let render = () => {};
const store = createStore(() => render());
const actions = createActions(store);
const getAppContext = () => ({ state: store.getState(), actions });
export const AppContext = createContext<AppContextData>(getAppContext());

const rootElement = document.getElementById('root');
render = () => {
  ReactDOM.render(
    <AppContext.Provider value={getAppContext()}>
      <App />
    </AppContext.Provider>,
    rootElement
  );
};

render();

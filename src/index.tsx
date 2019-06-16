import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import createStore from './store';
import createActions from './actions';
import { AppState, Actions } from './types';
import './index.css';
import App from './App';

let render = () => {};
const store = createStore(() => render());
const actions = createActions(store);

export const AppStateContext = createContext<AppState>(store.getState());
export const ActionsContext = createContext<Actions>(actions);

render = () => {
  ReactDOM.render(
    <AppStateContext.Provider value={store.getState()}>
      <ActionsContext.Provider value={actions}>
        <App />
      </ActionsContext.Provider>
    </AppStateContext.Provider>,
    document.getElementById('root')
  );
};

render();

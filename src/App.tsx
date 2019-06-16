import React from 'react';
import withStateAndActions, { StateAndActionsProps } from './withStateAndActions';
import logo from './logo.svg';
import './App.css';

const App: React.FC<StateAndActionsProps> = ({ actions, state }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <button onClick={() => actions.changeText()}>Change</button>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {state.text}
      </a>
    </header>
  </div>
);

export default withStateAndActions<{}>(App);

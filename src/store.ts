import createStore, { OnChangeFn } from 'tiny-state-store';
import { AppState, AppStateStore } from './types';

export default (onChange: OnChangeFn<AppState>): AppStateStore => {
  const initialState: AppState = { text: 'Hello react' };
  return createStore<AppState>(initialState, onChange);
};

import { Store } from 'tiny-state-store';
import createActions from './actions';

export type Actions = ReturnType<typeof createActions>;

export interface AppState {
  text: string;
}

export interface AppContextData {
  state: AppState;
  actions: Actions;
}

export interface AppStateStore extends Store<AppState> {}

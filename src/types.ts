import { Store } from 'tiny-state-store';
import createActions from './actions';

export type Actions = ReturnType<typeof createActions>;

export interface AppState {
  text: string;
}

export interface AppStateStore extends Store<AppState> {}

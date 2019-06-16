import { AppStateStore } from './types';

export default (store: AppStateStore) => ({
  changeText() {
    store.setState({ text: 'Wow I changed' });
  }
});

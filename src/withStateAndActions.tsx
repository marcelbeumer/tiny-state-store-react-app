import React from 'react';
import { AppStateContext, ActionsContext } from '.';
import { AppState, Actions } from './types';

export interface StateAndActionsProps {
  state: AppState;
  actions: Actions;
}

function withStateAndActions<TP>(C: React.FC<TP & StateAndActionsProps>): React.FC<TP> {
  return (props: TP) => (
    <AppStateContext.Consumer>
      {state => (
        <ActionsContext.Consumer>
          {actions => <C {...props} state={state} actions={actions} />}
        </ActionsContext.Consumer>
      )}
    </AppStateContext.Consumer>
  );
}

export default withStateAndActions;

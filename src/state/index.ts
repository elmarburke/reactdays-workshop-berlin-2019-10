import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Message } from "../domain/Message";

export interface ApplicationState {}

const initialState: ApplicationState = {};

interface InitAction {
  type: "@@INIT";
}

export type Actions = InitAction;

const reducer = (state = initialState, action: Actions): ApplicationState => {
  switch (action.type) {
    default:
      return state;
  }
};

export const configureStore = () => {
  // Jetzt wird's komisch...

  const composeEnhancer =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // jetzt ist wieder alles gut

  return createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
};

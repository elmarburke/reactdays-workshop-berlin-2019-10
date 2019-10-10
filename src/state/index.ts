import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Message } from "../domain/Message";

export interface ApplicationState {
  messages: Message[];
}

const initialState: ApplicationState = {
  messages: []
};

interface InitAction {
  type: "@@INIT";
}

interface AddMessage {
  type: "ADD_MESSAGE";
  message: Message;
}

export const addMessage = (message: Message): AddMessage => {
  return {
    type: "ADD_MESSAGE",
    message
  };
};

export type Actions = InitAction | AddMessage;

const reducer = (state = initialState, action: Actions): ApplicationState => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
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

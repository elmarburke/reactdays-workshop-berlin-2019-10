import { createStore, compose, applyMiddleware, Dispatch } from "redux";
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

interface FetchAllMessages {
  type: "FETCH_ALL_MESSAGES";
  messages: Message[];
}

export type Actions = InitAction | AddMessage | FetchAllMessages;

// "action creators" are function that create action objects
export const addMessage = (message: Message): AddMessage => {
  return {
    type: "ADD_MESSAGE",
    message: message
  };
};

// "action creators" are function that create action objects
export const fetchAllMessages = () => async (dispatch: Dispatch<Actions>) => {
  const response = await fetch("http://localhost:4712/messages");
  const data = await response.json();
  dispatch({
    type: "FETCH_ALL_MESSAGES",
    messages: data
  });
};

const reducer = (state = initialState, action: Actions): ApplicationState => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    case "FETCH_ALL_MESSAGES":
      return {
        ...state,
        messages: action.messages
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

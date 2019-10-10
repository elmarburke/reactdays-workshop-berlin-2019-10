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

interface FetchMessages {
  type: "FETCH_MESSAGES";
  payload: Message[];
}

export const fetchMessagesFromServer = () => {
  return {
    type: "FETCH_MESSAGES",
    isApiRequestAction: true,
    url: "/messages",
    method: "POST "
  };
};

export const fetchMessagesFromServer_old = () => async (
  dispatch: Dispatch<Actions>
) => {
  const response = await fetch("http://localhost:4712/messages");
  const data = await response.json();
  dispatch({
    type: "FETCH_MESSAGES",
    payload: data
  });
};

export const addMessage = (message: Message): AddMessage => {
  return {
    type: "ADD_MESSAGE",
    message
  };
};

export type Actions = InitAction | AddMessage | FetchMessages;

const reducer = (state = initialState, action: Actions): ApplicationState => {
  switch (action.type) {
    case "FETCH_MESSAGES":
      return {
        ...state,
        messages: action.payload
      };
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    default:
      return state;
  }
};

// @ts-ignore
const apiRequestMiddleware = store => next => async action => {
  if (!action.isApiRequestAction) {
    return next(action);
  }

  store.dispatch({
    type: action.type + "_LOADING"
  });

  const response = await fetch("http://localhost:4712" + action.url);
  const data = await response.json();
  store.dispatch({
    type: action.type,
    payload: data
  });
};

export const configureStore = () => {
  // Jetzt wird's komisch...

  const composeEnhancer =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // jetzt ist wieder alles gut

  return createStore(
    reducer,
    composeEnhancer(
      applyMiddleware(apiRequestMiddleware),
      applyMiddleware(thunk)
    )
  );
};

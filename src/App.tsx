import React, { useState } from "react";
import { Provider } from "react-redux";
import MessageList from "./components/MessageList";
import MessageCompose from "./components/MessageCompose";
import { Message } from "./domain/Message";
import { configureStore } from "./state";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main>
          <MessageCompose />
          <MessageList />
        </main>
      </PersistGate>
    </Provider>
  );
}

export default App;

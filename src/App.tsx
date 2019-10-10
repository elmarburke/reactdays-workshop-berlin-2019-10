import React, { useState } from "react";
import { Provider } from "react-redux";
import MessageList from "./components/MessageList";
import MessageCompose from "./components/MessageCompose";
import { Message } from "./domain/Message";
import { configureStore } from "./state";

const store = configureStore();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <main>
        <MessageCompose />
        <MessageList />
      </main>
    </Provider>
  );
}

export default App;

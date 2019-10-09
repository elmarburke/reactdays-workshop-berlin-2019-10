import React, { useState } from "react";
import { Provider } from "react-redux";
import MessageList from "./components/MessageList";
import MessageCompose from "./components/MessageCompose";
import { Message } from "./domain/Message";
import { configureStore } from "./state";

const store = configureStore();

function App(): JSX.Element {
  const [messageList, setMessageList] = useState<Message[]>([]);

  return (
    <Provider store={store}>
      <main>
        <MessageCompose
          onMessageSubmit={message => {
            setMessageList(currentMessageList => [
              message,
              ...currentMessageList
            ]);
          }}
        />
        <MessageList />
      </main>
    </Provider>
  );
}

export default App;

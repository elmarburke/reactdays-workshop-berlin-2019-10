import React, { useState } from "react";
import MessageList from "./components/MessageList";
import MessageCompose from "./components/MessageCompose";
import { Message } from "./domain/Message";

function App(): JSX.Element {
  const [messageList, setMessageList] = useState<Message[]>([]);

  return (
    <React.Fragment>
      <MessageCompose
        onMessageSubmit={message => {
          setMessageList(currentMessageList => [
            message,
            ...currentMessageList
          ]);
        }}
      />
      <MessageList messages={messageList} />
    </React.Fragment>
  );
}

export default App;

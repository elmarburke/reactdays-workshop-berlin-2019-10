import React, { useState } from "react";
import MessageList from "./components/MessageList";
import MessageCompose from "./components/MessageCompose";
import { Message } from "./domain/Message";

function App(): JSX.Element {
  const messages: Message[] = [
    { id: "1", author: "Christian", message: "Guten Morgen", date: 42 },
    {
      id: "2",
      author: "Elmar",
      message: "Spreek me gerust vanavond aan",
      date: 1982
    }
  ];

  const [messageList, setMessageList] = useState(messages);

  return (
    <React.Fragment>
      <MessageCompose />
      <MessageList messages={messageList} />
    </React.Fragment>
  );
}

export default App;

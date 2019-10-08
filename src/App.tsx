import React from "react";
import MessageView from "./components/MessageView";
import { Message } from "./domain/Message";

function App(): JSX.Element {
  const message2: Message = {
    id: "2",
    author: "$JEMAND",
    message: "HTML ist besser",
    date: 420000
  };

  return (
    <React.Fragment>
      <MessageView
        message={{
          id: "123",
          author: "Christian",
          message: "React ist...",
          date: 10
        }}
      />
      <MessageView message={message2} />
    </React.Fragment>
  );
}

export default App;

import React from "react";
import MessageList from "./components/MessageList";
import MessageCompose from "./components/MessageCompose";

function App(): JSX.Element {
  return (
    <React.Fragment>
      <MessageCompose />
      <MessageList />
    </React.Fragment>
  );
}

export default App;

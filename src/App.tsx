import React from "react";
import MessageView from "./components/MessageView";

function App(): JSX.Element {
  return (
    <React.Fragment>
      <MessageView opinion={"React ist..."} name="Christian" />
      <MessageView opinion="HTML ist besser" name="$JEMAND" />
    </React.Fragment>
  );
}

export default App;

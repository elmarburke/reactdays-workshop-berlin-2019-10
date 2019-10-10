import React, { useState } from "react";
import { Message } from "../domain/Message";
import { connect } from "react-redux";
import { addMessage } from "../state";

interface Props {
  onMessageSubmit: (message: Message) => void;
}

const MessageCompose: React.FunctionComponent<Props> = ({
  onMessageSubmit
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue === "") {
      console.info("empty form");
      return;
    }

    onMessageSubmit({
      id: String(Date.now()),
      message: inputValue,
      author: "Our App",
      date: Date.now()
    });

    setInputValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={inputValue} placeholder="Message" />
      <button type="submit">✉ Send</button>
      {inputValue}
    </form>
  );
};

const mapDispatchToProps = {
  onMessageSubmit: addMessage
};

export default connect(
  null,
  mapDispatchToProps
)(MessageCompose);

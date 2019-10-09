import React, { useState } from "react";
import { Message } from "../domain/Message";

interface Props {
  onMessageSubmit: (message: Message) => void;
}

const MessageCompose: React.FunctionComponent<Props> = ({
  onMessageSubmit
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onMessageSubmit({
      id: String(Date.now()),
      message: inputValue,
      author: "Our App",
      date: Date.now()
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
      <button type="submit">✉ Send</button>
      {inputValue}
    </form>
  );
};

export default MessageCompose;

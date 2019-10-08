import React, { useState } from "react";

interface Props {}

const MessageCompose: React.FunctionComponent<Props> = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(["hip", "hip"]);
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

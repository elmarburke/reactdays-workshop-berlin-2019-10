import React from "react";

interface Props {}

const MessageCompose: React.FunctionComponent<Props> = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(["hip", "hip"]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">✉ Send</button>
    </form>
  );
};

export default MessageCompose;

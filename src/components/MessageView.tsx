import React from "react";
import { Message } from "../domain/Message";

interface Props {
  message: Message;
}

const MessageView: React.FunctionComponent<Props> = ({ message }) => {
  return (
    <article>
      {message.message}
      <footer>By: {message.author}</footer>
    </article>
  );
};

export default MessageView;

import React from "react";
import { Message } from "../domain/Message";
import MessageView from "./MessageView";

interface Props {
    messages: Message[];
}

const MessageList: React.FunctionComponent<Props> = ({ messages }) => {
   return (
    <React.Fragment>
      {messages.map(message => (
        <MessageView key={message.id} message={message} />
      ))}
    </React.Fragment>
  );
};

export default MessageList;

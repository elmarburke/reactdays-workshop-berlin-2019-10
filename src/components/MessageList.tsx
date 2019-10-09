import React from "react";
import { Message } from "../domain/Message";
import MessageView from "./MessageView";

const MessageList: React.FunctionComponent = () => {
  const messages: Message[] = [
    { id: "1", author: "Christian", message: "Guten Morgen", date: 42 },
    {
      id: "2",
      author: "Elmar",
      message: "Spreek me gerust vanavond aan",
      date: 1982
    }
  ];

  return (
    <React.Fragment>
      {messages.map(message => (
        <MessageView key={message.id} message={message} />
      ))}
    </React.Fragment>
  );
};

export default MessageList;

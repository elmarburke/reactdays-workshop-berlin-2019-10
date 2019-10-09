import React from "react";
import { connect } from "react-redux";
import { Message } from "../domain/Message";
import MessageView from "./MessageView";
import { ApplicationState } from "../state";

interface InnerProps {
  messages: Message[];
}

const MessageList: React.FunctionComponent<InnerProps> = ({ messages }) => {
  return (
    <React.Fragment>
      {messages.map(message => (
        <MessageView key={message.id} message={message} />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = (state: ApplicationState): InnerProps => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(MessageList);

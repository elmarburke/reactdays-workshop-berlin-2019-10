import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Message } from "../domain/Message";
import MessageView from "./MessageView";
import { ApplicationState, fetchAllMessages } from "../state";

interface InnerProps {
  messages: Message[];
  fetchAllMessages: () => void;
}

const MessageList: React.FunctionComponent<InnerProps> = ({
  messages,
  fetchAllMessages
}) => {
  useEffect(() => {
    fetchAllMessages();
  }, [fetchAllMessages]);
  return (
    <React.Fragment>
      {messages.map(message => (
        <MessageView key={message.id} message={message} />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = {
  fetchAllMessages: fetchAllMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);

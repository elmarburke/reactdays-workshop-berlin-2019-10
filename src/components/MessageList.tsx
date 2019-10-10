import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Message } from "../domain/Message";
import MessageView from "./MessageView";
import { ApplicationState, fetchMessagesFromServer } from "../state";

interface StateProps {
  messages: Message[];
}

interface ActionCreatorProps {
  fetchMessagesFromServer: () => void;
}

const MessageList: React.FunctionComponent<StateProps & ActionCreatorProps> = ({
  messages,
  fetchMessagesFromServer
}) => {
  useEffect(() => {
    fetchMessagesFromServer();
  }, [fetchMessagesFromServer]);

  return (
    <React.Fragment>
      {messages.map(message => (
        <MessageView key={message.id} message={message} />
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = (state: ApplicationState): StateProps => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = {
  fetchMessagesFromServer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList);

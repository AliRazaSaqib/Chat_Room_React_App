import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../redux/store";
import { deleteMessage } from "../redux/actions";
import moment from "moment";

type Props = ConnectedProps<typeof connector>;

const MessageList: React.FC<Props> = ({ messages, deleteMessage }) => {
  const handleDelete = (messageId: string) => {
    deleteMessage(messageId);
  };

  return (
    <div className="message-list">
      {messages.map((message) => (
        <>
          <div className="message" key={message.id}>
            <div className="message-header">
              <span className="message-username">{message.username}</span>

              <button
                className="delete-button"
                onClick={() => handleDelete(message.id)}
              >
                Delete
              </button>
            </div>

            <div className="message-content">{message.text}</div>
          </div>
          <span className="message-timestamp">
            {moment(message.timestamp).format("MMMM Do YYYY, h:mm:ss a")}
          </span>
        </>
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  messages: state.chat.messages,
});

const connector = connect(mapStateToProps, { deleteMessage });

export default connector(MessageList);

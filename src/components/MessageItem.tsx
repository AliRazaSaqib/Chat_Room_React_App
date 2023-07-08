import React from "react";
import { Message } from "../redux/actions/types";

interface Props {
  message: Message;
  onDelete: (messageId: string) => void;
}

const MessageItem: React.FC<Props> = ({ message, onDelete }) => {
  const handleDelete = () => {
    onDelete(message.id);
  };

  return (
    <div>
      <span>{message.username}: </span>
      <span>{message.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default MessageItem;

import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/actions";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

type Props = ConnectedProps<typeof connector>;

const ChatRoom: React.FC<Props> = ({ logout }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="chat-room">
      <div className="chat-label">
        <h1>Chat Room</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div>
        <MessageList />
        <MessageInput />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({});

const connector = connect(mapStateToProps, { logout });

export default connector(ChatRoom);

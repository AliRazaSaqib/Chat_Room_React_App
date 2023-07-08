import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../redux/store";
import { addMessage } from "../redux/actions";
import { useSelector } from "react-redux";

type Props = ConnectedProps<typeof connector>;

const MessageInput: React.FC<Props> = ({ addMessage }) => {
  const [message, setMessage] = useState("");
  const { username } = useSelector((state: any) => state.auth.user);
  console.log(username, "username");

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (message.trim() !== "") {
      addMessage({
        id: Date.now().toString(),
        username: username,
        text: message,
        timestamp: Date.now(),
      });
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-input-container">
      <div className="input-container type-chat">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Enter your message..."
          className="message-input"
        />
      </div>
      <div className="button-container send-message">
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const connector = connect(mapStateToProps, { addMessage });

export default connector(MessageInput);

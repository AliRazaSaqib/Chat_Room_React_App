import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import LoginForm from "./components/auth/LoginForm";
import RegistrationForm from "./components/auth/RegistrationForm";
import {
  IsLogedInUser,
  ShouldBeLoggedOut,
} from "./components/routes/ProtectRoutes";

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ShouldBeLoggedOut>
                <LoginForm />
              </ShouldBeLoggedOut>
            }
          />
          <Route
            path="/register"
            element={
              <ShouldBeLoggedOut>
                <RegistrationForm />
              </ShouldBeLoggedOut>
            }
          />

          <Route
            element={
              <IsLogedInUser>
                <ChatRoom />
              </IsLogedInUser>
            }
            path="/chat"
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

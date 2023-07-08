import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const IsLogedInUser = ({ children }: any) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth);

  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
};

export const ShouldBeLoggedOut = ({ children }: any) => {
  const { isLoggedIn } = useSelector((state: any) => state.auth);

  if (!isLoggedIn) {
    return children;
  }
  return <Navigate to="/chat" replace />;
};

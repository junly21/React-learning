import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div> MyPage</div>;
};

export default MyPage;

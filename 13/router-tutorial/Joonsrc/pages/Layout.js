import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Layout = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <header style={{ background: "lightgray" }}>Header</header>
      <button onClick={goHome}> Home </button>
      <button onClick={goBack}> 뒤로가기</button>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

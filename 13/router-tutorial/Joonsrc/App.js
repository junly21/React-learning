import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Page";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./pages/Layout";
import MyPage from "./pages/MyPage";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:names" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1> 여기가 homepage</h1>
      <div> 가장 먼저 보여지는 글</div>

      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles/jaejoon">재준 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/soyeon">소연 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void"> 프로필이 존재하지 않습니다.</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

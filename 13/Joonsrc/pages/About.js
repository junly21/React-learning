import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  return (
    <div>
      <h1>소개</h1>
      <div>라우터 사용 도전!</div>
      <p>쿼리 스트링 도전: {location.search}</p>
    </div>
  );
};

export default About;

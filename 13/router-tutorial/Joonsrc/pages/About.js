import { useSearchParams } from "react-router-dom";

const About = () => {
  const [SearchParams, setSearchParams] = useSearchParams();
  const detail = SearchParams.get("detail");
  const mode = SearchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onToggleMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };
  return (
    <div>
      <h1>소개</h1>
      <div>라우터 사용 도전!</div>
      <button onClick={onToggleDetail}>디테일 출력</button>
      <button onClick={onToggleMode}>모드 관리</button>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
    </div>
  );
};

export default About;

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return(
    <div>
      <h1>Home</h1>
      <p>리액트 홈에 오신것을 환영합니다.</p>
      <button onClick={goBack}>뒤로가기</button>
    </div>
  );
};
export default Home;
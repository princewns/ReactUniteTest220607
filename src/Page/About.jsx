import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return(
    <div>
      <h1>About</h1>
      <p>과제 제출을 위한 리액트 프론트앤드</p>
      <button onClick={goBack}>뒤로가기</button>
    </div>
  );
};
export default About;
import { useParams } from "react-router-dom"

const Board = () => {
  const {id} = useParams();
  return(
    <div>
      <h2>{id}번째 게시글 입니다.</h2>
    </div>
  );
};
export default Board;
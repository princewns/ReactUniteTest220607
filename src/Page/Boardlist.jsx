import { Outlet, NavLink, useNavigate } from "react-router-dom";

const BoardList = () => {
  const activeStyle = {
    color : 'lightgreen',
    fontWeight : 'bold',
    textDecorationLine : 'none'
  };
  const noStyle = {
    textDecorationLine : 'none'
  };
  const numlist = [1,2,3,4,5];
  const navigate = useNavigate(-1);
  const goBack = () => {
    navigate(-1);
  };
  return(
    <div>
      <h1>Board</h1>
      <p>파라미터 및 중첩라우터를 사용하여 아래 Board의 내용이 보입니다.</p>
      {
        numlist.map((num,index) => (
          <span key={index}>
            <NavLink to={`/boardlist/${num}`}
            style={({isActive}) => isActive ? activeStyle : noStyle}> {num} </NavLink>
          |</span>
        ))
      }
      <br/><br/>
      <Outlet>
      </Outlet>
      <button onClick={goBack}>뒤로가기</button>
    </div>
  );
};

export default BoardList;
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  const activeStyle = {
    fontWeight : 'bold',
    color : 'lightgreen',
    textDecorationLine : 'none'
  }
  const noStyle = {
    fontWeight : 'bold',
    textDecorationLine : 'none'
  }
  return(
    <div>
      <header>
        <NavLink to={'/'}
        style={({isActive}) => isActive ? activeStyle : noStyle}> Home </NavLink>|
        <NavLink to={'/about'}
        style={({isActive}) => isActive ? activeStyle : noStyle}> About </NavLink>|
        <NavLink to={'/boardlist'}
        style={({isActive}) => isActive ? activeStyle : noStyle}> Board</NavLink>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};
export default Layout;
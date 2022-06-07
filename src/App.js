import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Layout from './Page/Layout';
import About from './Page/About';
import BoardList from './Page/Boardlist';
import Board from './Page/Board';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/boardlist' element={<BoardList/>}>
            <Route path=':id' element={<Board/>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

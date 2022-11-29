import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Header from './component/Navbar/Header';
import NotFound from './component/NotFound/NotFound';
import Sidebar from './component/sidebar/Sidebar';
import SingUp from './component/SignUp/SignUp';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/dashboard' element={<Sidebar></Sidebar>}> </Route>





        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/signup' element={<SingUp></SingUp>}> </Route>
        <Route path='*' element={<NotFound></NotFound>}> </Route>
      </Routes>
    </div>
  );
}

export default App;

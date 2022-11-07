import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import MovieDetails from './component/Home/MovieDetails/MovieDetails';
import Login from './component/Login/Login';
import Header from './component/Navbar/Header';
import NotFound from './component/NotFound/NotFound';
import RequireAuth from './component/RequireAuth/RequireAuth';
import SingUp from './component/SignUp/SignUp';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>


        {/* <Route path='/inventory'
          element={
            <RequreAuth>
              <Inventory></Inventory>
            </RequreAuth>
          }></Route> */}

        <Route path='/movie/:id'
          element={
            <RequireAuth>
              <MovieDetails></MovieDetails>
            </RequireAuth>
          }></Route>



        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/signup' element={<SingUp></SingUp>}> </Route>
        <Route path='*' element={<NotFound></NotFound>}> </Route>
      </Routes>
    </div>
  );
}

export default App;

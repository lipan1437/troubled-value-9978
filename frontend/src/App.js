import './App.css';
import Navbar from './Components/Navbar';
import Topselling from './Components/Topselling';
import { Popular } from './Components/HomePage/popular';
import { BuySell } from './Components/HomePage/buy&sell';
import Trending  from './Components/HomePage/trandingadd';
import Mobile from './Components/HomePage/mobile';
// import Home from './Components/HomePage/home&lifestyle';
import Electronics from './Components/HomePage/electronics';
import Singlepage from './Components/Singlepage';
import { Category } from './Components/HomePage/category';
import { Alert } from './Components/HomePage/alert';
import { Reviews } from './Components/HomePage/reviews';
import MainRoutes from './Pages/MainRoutes';
import { Route,Routes } from 'react-router-dom';
import SingleBook from './Pages/SingleBook';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">


      <Navbar />
       {/*<Electronics />
      <Category />
      <Alert />
      <Reviews />
      <Electronics /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products'  element={<MainRoutes/>} />
        <Route path='/productsDetail' element={<Singlepage />}/>
        <Route path='/books/:id' element={<SingleBook />} />
       </Routes>

    </div>
  );
}

export default App;

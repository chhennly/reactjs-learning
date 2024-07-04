import Home from './pages/Home';
import { Outlet, Route, Routes } from 'react-router-dom';
import Read from './pages/Read';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductForm from './components/ProductForm';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/404';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/read/:id' element={<Read />} />
          <Route path='/about-us' element={<About />}/>
          <Route path='/create' element={<ProductForm edit={false} />}/>
          <Route path='/edit' element={<ProductForm edit={true} />}/>
          <Route path='/datatable' element={<Dashboard />}/>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/*' element={<NotFound />}/>

      </Routes>
    </>
  );
}

export default App;

function MainLayout(){
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
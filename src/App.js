import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Read from './pages/Read';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/read/:id' element={<Read />} />
        <Route path='/about-us' element={<About />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

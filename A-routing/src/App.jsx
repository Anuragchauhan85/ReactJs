import React from 'react'
import Navbar from './components/Navbar';
import Nav2 from "./components/Nav2";
import Footer from './components/Footer';
import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import Product from './pages/Product';
import Mens from "./pages/Mens";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Courses from "./pages/Courses";
import Coursedetail from './pages/Coursedetail';

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Nav2/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<Coursedetail />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Mens />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
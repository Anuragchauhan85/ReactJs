import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import{Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Notfound from './components/pages/Notfound';
import Product from './components/pages/Product';
import Mens from "./components/pages/Mens";
import Women from "./components/pages/Women";
import Kids from "./components/pages/Kids";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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
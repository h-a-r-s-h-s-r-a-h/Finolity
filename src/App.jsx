import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/main.css';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollTop from './components/common/ScrollTop';
import Preloader from './components/common/Preloader';

// Pages
import Home from './pages/Home';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
        <ScrollTop />
        <Preloader />
      </div>
    </Router>
  );
};

export default App;

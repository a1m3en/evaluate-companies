import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Demo from './Components/Demo/Demo';
import Growth from './Components/Growth/Growth';
import Features from './Components/Features/Features';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Demo />
      <Growth />
      <Features />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;

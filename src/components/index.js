import React, {useState} from 'react';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';
import Collection from './Collection';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Team from './Team';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About/>
      <Collection/>
      <Team />
      <Footer />
    </>
  );
};

export default Home;

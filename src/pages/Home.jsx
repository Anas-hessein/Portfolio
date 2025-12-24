import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/1-header/Header';
import Hero from '../components/2-hero/Hero';
import Main from '../components/3-main/Main';
import Contact from '../components/4-contact/Contact';
import Footer from '../components/5-fotter/Footer';

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="dvdr" />
      <Main />
      <div className="dvdr" />
      <Contact />
      <div className="dvdr" />
      <Footer />
      <a style={{ opacity: showScroll ? 1 : 0, transition: "0.3s" }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2top"></button>
      </a>
    </div>
  );
};

export default Home;

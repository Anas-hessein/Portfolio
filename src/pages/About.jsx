import React from 'react';
import Header from '../components/1-header/Header';
import Footer from '../components/5-fotter/Footer';

const About = () => {
  return (
    <div className="container">
      <Header />
      <main style={{ padding: '2rem', minHeight: '60vh' }}>
        <h1>About Me</h1>
        <p>
          Welcome to my portfolio! I'm a passionate developer with expertise in 
          modern web technologies.
        </p>
        <p>
          This is your About page. You can customize this content with your own 
          information, skills, experience, and anything else you'd like to share.
        </p>
      </main>
      <div className="dvdr" />
      <Footer />
    </div>
  );
};

export default About;

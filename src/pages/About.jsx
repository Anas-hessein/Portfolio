import React from 'react';
import Header from '../components/1-header/Header';
import Footer from '../components/5-fotter/Footer';

const About = () => {
  return (
    <div className="container">
      <Header />
      <main style={{ padding: '2rem', minHeight: '60vh' }}>
        <h1>About Me</h1>
        <br></br>
        <p>
          hi, I'm Anas. I'm 16 years old. I'm single. I'm form Egypt. I'm High Schooler in grade 11. I'm in STEM School for Boys at 6 of Octotber. It's the school i have learned from alot in a little time. I have worked as a Goldsmith with y Father for some time.
        </p>

      </main>
      <div className="dvdr" />
      <Footer />
    </div>
  );
};

export default About;

import React from 'react';
import Header from '../components/1-header/Header';
import Footer from '../components/5-fotter/Footer';

const Project = () => {
  return (
    <div className="container">
      <Header />
      <main style={{ padding: '2rem', minHeight: '60vh' }}>
        <h1>Project</h1>
        <br></br>
        <p>
          Welcome to my portfolio! 
        </p>
        <br></br>
        <p> 
          Up Comming
        </p>
      </main>
      <div className="dvdr" />
      <Footer />
    </div>
  );
};

export default Project;
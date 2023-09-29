import React from 'react';
import './App.css';
import Header from './Header';
import Services from './services';
import Team from './Team';
import Contact from './contact';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Services />
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;


      
    
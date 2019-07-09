import React, { Component } from 'react';
import './main.scss';
import { withTranslation } from 'react-i18next';

// components imports
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Header />
        <main className="main">
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </>
    );
  }
}

export default withTranslation('common')(App);

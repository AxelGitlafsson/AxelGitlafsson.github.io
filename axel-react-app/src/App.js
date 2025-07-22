import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SudokuProject from './pages/SudokuProject';
import HotHandDissertation from './pages/HotHandDissertation';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* Skip Link for Accessibility */}
              <a href="#main-content" className="skip-link">Skip to main content</a>

              <NavBar />
              <Header />
              <main id="main-content">
                <Experience />
                <Projects />
                <Skills />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/projects/sudoku" element={<SudokuProject />} />
        <Route path="/projects/hothand" element={<HotHandDissertation />} />
      </Routes>
    </Router>
  );
}

export default App;

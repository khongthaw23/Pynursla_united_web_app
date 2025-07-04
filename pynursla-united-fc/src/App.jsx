import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Players from './pages/Players';
import Matches from './pages/Matches';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Store from './pages/Store';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="pynursla-theme">
      <Router>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/players" element={<Players />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/store" element={<Store />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


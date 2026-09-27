import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { RootLayout } from './layouts/RootLayout';
import { LoadingScreen } from './components/common/LoadingScreen';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Education } from './pages/Education';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Experience } from './pages/Experience';
import { Certifications } from './pages/Certifications';
import { Achievements } from './pages/Achievements';
import { GitHub } from './pages/GitHub';
import { LinkedIn } from './pages/LinkedIn';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export default function App() {
  const [hasLoaded, setHasLoaded] = useState(() => {
    // Only show splash screen once per tab session
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('shreyas_portfolio_loaded') === 'true';
    }
    return false;
  });

  const handleLoadingComplete = () => {
    sessionStorage.setItem('shreyas_portfolio_loaded', 'true');
    setHasLoaded(true);
  };

  return (
    <ThemeProvider>
      {!hasLoaded && <LoadingScreen onComplete={handleLoadingComplete} />}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="education" element={<Education />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetail />} />
            <Route path="experience" element={<Experience />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="github" element={<GitHub />} />
            <Route path="linkedin" element={<LinkedIn />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

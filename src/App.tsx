import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { Overview } from './pages/Overview';
import { PrototypeIndex } from './pages/PrototypeIndex';
import { PrototypeDetail } from './pages/PrototypeDetail';
import { PatentOffice } from './pages/PatentOffice';
import { Instruments } from './pages/Instruments';
import { LabLogs } from './pages/LabLogs';
import { Papers } from './pages/Papers';
import { People } from './pages/People';
import { Exhibitions } from './pages/Exhibitions';
import { Timeline } from './pages/Timeline';
import { ArchiveSearch } from './pages/ArchiveSearch';
import { Policies } from './pages/Policies';
import { audioApparatus } from './lib/audioEngine';

// Scroll to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  const [theme, setTheme] = useState<'dark' | 'paper'>('dark');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);

  useEffect(() => {
    if (theme === 'paper') {
      document.body.classList.add('theme-paper');
    } else {
      document.body.classList.remove('theme-paper');
    }
  }, [theme]);

  useEffect(() => {
    const checkAudio = setInterval(() => {
      setIsAudioActive(audioApparatus.getIsPlaying());
    }, 500);
    return () => clearInterval(checkAudio);
  }, []);

  const toggleTheme = () => {
    setTheme(t => (t === 'dark' ? 'paper' : 'dark'));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between selection:bg-[#3d6051] selection:text-[#f4f1ea]">
        <Header
          theme={theme}
          toggleTheme={toggleTheme}
          openSearch={() => setIsSearchOpen(true)}
          isAudioActive={isAudioActive}
        />

        <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/prototypes" element={<PrototypeIndex />} />
            <Route path="/prototypes/:id" element={<PrototypeDetail />} />
            <Route path="/patents" element={<PatentOffice />} />
            <Route path="/instruments" element={<Instruments />} />
            <Route path="/logs" element={<LabLogs />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/people" element={<People />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/search" element={<ArchiveSearch />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="*" element={<Overview />} />
          </Routes>
        </main>

        <Footer />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

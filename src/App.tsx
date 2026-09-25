import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { SiteIntroAnimation } from './components/SiteIntroAnimation';

// Pages
import { Home } from './pages/Home';
import { AboutOverview } from './pages/AboutOverview';
import { Biography } from './pages/Biography';
import { Education } from './pages/Education';
import { Lineage } from './pages/Lineage';
import { Achievements } from './pages/Achievements';
import { Institutions } from './pages/Institutions';
import { KhanqahOverview } from './pages/KhanqahOverview';
import { Bayah } from './pages/Bayah';
import { SpiritualHealing } from './pages/SpiritualHealing';
import { Schedule } from './pages/Schedule';
import { Consultation } from './pages/Consultation';
import { FatwasOverview } from './pages/FatwasOverview';
import { AskFatwa } from './pages/AskFatwa';
import { FatwaArchive } from './pages/FatwaArchive';
import { MediaOverview } from './pages/MediaOverview';
import { Videos } from './pages/Videos';
import { Photos } from './pages/Photos';
import { Press } from './pages/Press';
import { Books } from './pages/Books';
import { Sajra } from './pages/Sajra';
import { Events } from './pages/Events';
import { EventDetail } from './pages/EventDetail';
import { GetInvolvedOverview } from './pages/GetInvolvedOverview';
import { Donate } from './pages/Donate';
import { Volunteer } from './pages/Volunteer';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { NotFound } from './pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex-1 flex flex-col w-full"
      >
        <Routes location={location}>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About & Sub-pages */}
          <Route path="/about" element={<AboutOverview />} />
          <Route path="/about/biography" element={<Biography />} />
          <Route path="/about/education" element={<Education />} />
          <Route path="/about/lineage" element={<Lineage />} />
          <Route path="/about/achievements" element={<Achievements />} />

          {/* Institutions Directory */}
          <Route path="/institutions" element={<Institutions />} />

          {/* Khanqah Yusufia & Sub-pages */}
          <Route path="/khanqah" element={<KhanqahOverview />} />
          <Route path="/khanqah/bayah" element={<Bayah />} />
          <Route path="/khanqah/spiritual-healing" element={<SpiritualHealing />} />
          <Route path="/khanqah/schedule" element={<Schedule />} />
          <Route path="/khanqah/consultation" element={<Consultation />} />

          {/* Darul Ifta & Sub-pages */}
          <Route path="/fatwas" element={<FatwasOverview />} />
          <Route path="/fatwas/ask" element={<AskFatwa />} />
          <Route path="/fatwas/archive" element={<FatwaArchive />} />

          {/* Media & Sub-pages */}
          <Route path="/media" element={<MediaOverview />} />
          <Route path="/media/videos" element={<Videos />} />
          <Route path="/media/photos" element={<Photos />} />
          <Route path="/media/press" element={<Press />} />

          {/* Books & Publications */}
          <Route path="/books" element={<Books />} />

          {/* Shajarah Mubarakah / Sajra Sharif */}
          <Route path="/sajra" element={<Sajra />} />
          <Route path="/shajarah" element={<Sajra />} />

          {/* Events & Convocations */}
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />

          {/* Get Involved & Sub-pages */}
          <Route path="/get-involved" element={<GetInvolvedOverview />} />
          <Route path="/get-involved/donate" element={<Donate />} />
          <Route path="/get-involved/volunteer" element={<Volunteer />} />

          {/* Articles / Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Contact & Directory */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteIntroAnimation />
      <div className="min-h-screen flex flex-col bg-[#F6F3EE] text-[#2E2E2E] antialiased selection:bg-[#D8C3A5]/40 selection:text-[#2E2E2E]">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

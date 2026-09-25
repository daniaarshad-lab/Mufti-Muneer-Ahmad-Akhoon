import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';

export const SiteIntroAnimation: React.FC = () => {
  // Always starts visible on fresh page load so the visitor always sees and recites
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [countdown, setCountdown] = useState<number>(8.0);

  useEffect(() => {
    if (!isVisible) return;

    // Reset countdown to 8.0 seconds so visitor can comfortably recite the entire Durood Sharif
    setCountdown(8.0);

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 0.2) {
          clearInterval(interval);
          return 0;
        }
        return Number((prev - 0.1).toFixed(1));
      });
    }, 100);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8200); // 8.2 seconds total display time

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isVisible]);

  // Listen for global custom event to replay animation on demand
  useEffect(() => {
    const handleReplay = () => {
      setIsVisible(true);
    };
    window.addEventListener('play_site_intro', handleReplay);
    return () => window.removeEventListener('play_site_intro', handleReplay);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-gradient-to-br from-[#021B16] via-[#052E25] to-[#011410] text-white px-3 sm:px-4 select-none cursor-pointer overflow-y-auto py-6"
          onClick={handleDismiss}
        >
          {/* Ambient Glowing Luminous Orbs */}
          <div className="fixed w-[550px] h-[550px] rounded-full bg-emerald-500/20 blur-[130px] pointer-events-none animate-pulse" />
          <div className="fixed w-[380px] h-[380px] rounded-full bg-amber-400/15 blur-[110px] pointer-events-none -top-10 -right-10" />
          <div className="fixed w-[320px] h-[320px] rounded-full bg-teal-400/15 blur-[100px] pointer-events-none -bottom-10 -left-10" />

          {/* Background Rotating Geometric Rings */}
          <motion.div
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{ scale: 1.1, rotate: 90 }}
            transition={{ duration: 8, ease: 'easeOut' }}
            className="fixed w-[640px] h-[640px] rounded-full border border-emerald-500/20 border-dashed pointer-events-none opacity-40"
          />
          <motion.div
            initial={{ scale: 0.6, rotate: 0 }}
            animate={{ scale: 1, rotate: -45 }}
            transition={{ duration: 8, ease: 'easeOut' }}
            className="fixed w-[450px] h-[450px] rounded-full border border-amber-400/20 pointer-events-none opacity-30"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.02, opacity: 0, y: -20 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl mx-auto text-center space-y-4 sm:space-y-5 p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.65)] my-auto"
          >
            {/* Calligraphic Bismillah */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-arabic text-2xl sm:text-3xl md:text-4xl text-amber-300 font-bold tracking-wider drop-shadow-[0_2px_15px_rgba(251,191,36,0.5)]"
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </motion.div>

            {/* Sacred Durood Sharif Section (Directly Below Bismillah for Sawab) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#021813]/95 border-2 border-amber-400/80 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_30px_rgba(251,191,36,0.2)] space-y-3.5 text-center"
            >
              <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-300 bg-amber-400/20 px-4 py-1 rounded-full border border-amber-400/40">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>دُرُودِ إِبْرَاهِيمِي شریف • Recite & Earn Divine Sawab</span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>

              {/* Complete Durood-e-Ibrahimi Calligraphy in Ultra-Visible Brilliant High Contrast */}
              <div className="font-arabic text-lg sm:text-xl md:text-2xl text-white font-bold leading-[2.3] text-center space-y-3 select-text drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                <p className="tracking-wide">
                  اللَّهُمَّ صَلِّ عَلَىٰ <span className="text-amber-300 font-extrabold drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]">مُحَمَّدٍ</span> وَعَلَىٰ آلِ <span className="text-amber-300 font-extrabold drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]">مُحَمَّدٍ</span> كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ
                </p>
                <div className="w-36 h-0.5 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent my-1" />
                <p className="tracking-wide">
                  اللَّهُمَّ بَارِكْ عَلَىٰ <span className="text-amber-300 font-extrabold drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]">مُحَمَّدٍ</span> وَعَلَىٰ آلِ <span className="text-amber-300 font-extrabold drop-shadow-[0_0_12px_rgba(251,191,36,0.7)]">مُحَمَّدٍ</span> كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ
                </p>
              </div>
            </motion.div>

            {/* Scholar Emblem & Title */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1">
              {/* Scholar Emblem */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.45, type: 'spring', stiffness: 220, damping: 16 }}
                className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#008767] via-[#00A878] to-[#10B981] flex items-center justify-center text-white font-serif font-bold text-lg border-2 border-amber-300 shadow-[0_0_35px_rgba(0,168,120,0.5)] shrink-0 relative"
              >
                <span>MA</span>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-[-4px] rounded-full border border-dashed border-amber-300/70"
                />
              </motion.div>

              {/* Scholar Name & Portal Accreditation */}
              <div className="text-center sm:text-left space-y-0.5">
                <div className="text-[10px] uppercase tracking-widest text-emerald-300 font-extrabold flex items-center justify-center sm:justify-start gap-1">
                  <span>Official Scholarly Portal • New York</span>
                </div>

                <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight">
                  Hazrat Maulana Mufti Muneer Ahmad Akhoon
                </h1>

                <p className="text-xs text-emerald-100 font-arabic">
                  حَفِظَهُ اللَّهُ تَعَالَى وَرَعَاهُ • دَامَتْ بَرَكَاتُهُمْ
                </p>
              </div>
            </div>

            {/* Visual 7-8 Second Progress Countdown Bar */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 8.0, ease: 'linear' }}
                  className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-300 rounded-full"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-emerald-100 pt-0.5 font-medium">
                <span className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                  <span>Recite Durood Sharif • Entering in {countdown}s...</span>
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDismiss();
                  }}
                  className="inline-flex items-center gap-1 font-bold text-amber-300 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full cursor-pointer"
                >
                  <span>Skip to Site</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

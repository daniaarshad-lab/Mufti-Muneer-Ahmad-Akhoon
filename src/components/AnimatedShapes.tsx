import React from 'react';
import { motion } from 'motion/react';

/**
 * Floating geometric Islamic curves and vibrant ambient orbs
 * Provides subtle, elegant floating animations as requested ("shapes, curves and moving little bit but decent one")
 */
export const AmbientFloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Radiant vibrant emerald orb 1 */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-gradient-to-br from-[#00A878]/25 via-[#10B981]/15 to-transparent blur-3xl"
      />

      {/* Radiant warm golden amber orb 2 */}
      <motion.div
        animate={{
          x: [0, -35, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-gradient-to-bl from-[#F59E0B]/20 via-[#D97706]/10 to-transparent blur-3xl"
      />

      {/* Vibrant turquoise/cyan orb 3 */}
      <motion.div
        animate={{
          x: [0, 25, -25, 0],
          y: [0, -20, 20, 0],
          scale: [0.95, 1.1, 1, 0.95],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-10 left-1/4 w-88 h-88 rounded-full bg-gradient-to-tr from-[#06B6D4]/15 via-[#0D9488]/15 to-transparent blur-3xl"
      />

      {/* Floating Decorative Islamic 8-Point Star - Top Right */}
      <motion.div
        animate={{
          y: [0, -14, 0],
          rotate: [0, 12, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-12 right-12 opacity-35 hidden md:block"
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32 0L39.5 12.5L54 8L50 22.5L64 30L51 39.5L57 54L42 51L34 64L26 51L11 55L16 40L2 32L15 23.5L10 9L24 13L32 0Z"
            stroke="#00A878"
            strokeWidth="1.5"
            fill="rgba(0, 168, 120, 0.05)"
          />
          <circle cx="32" cy="32" r="12" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      </motion.div>

      {/* Floating Curved Ribbon SVG - Mid Left */}
      <motion.div
        animate={{
          y: [0, 16, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className="absolute top-1/2 left-8 opacity-30 hidden lg:block"
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 60C30 20 90 20 110 60C90 100 30 100 10 60Z"
            stroke="url(#ribbonGrad)"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M25 60C40 35 80 35 95 60C80 85 40 85 25 60Z"
            stroke="#00A878"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            fill="rgba(0, 168, 120, 0.04)"
          />
          <defs>
            <linearGradient id="ribbonGrad" x1="10" y1="20" x2="110" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00A878" />
              <stop offset="0.5" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating Islamic Mihrab / Arch Curve - Bottom Right */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
        className="absolute bottom-24 right-16 opacity-30 hidden md:block"
      >
        <svg width="90" height="110" viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 110V50C10 25 45 5 45 5C45 5 80 25 80 50V110"
            stroke="url(#archGrad)"
            strokeWidth="1.8"
            fill="rgba(0, 168, 120, 0.03)"
          />
          <path
            d="M22 110V54C22 36 45 20 45 20C45 20 68 36 68 54V110"
            stroke="#F59E0B"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <defs>
            <linearGradient id="archGrad" x1="45" y1="5" x2="45" y2="110" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#00A878" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};

/**
 * Animated Flowing Curve Wave Divider
 * Renders smooth undulating SVG curves with gentle floating oscillation
 */
export const AnimatedWaveDivider: React.FC<{
  className?: string;
  fillColor?: string;
}> = ({ className = '', fillColor = '#ffffff' }) => {
  return (
    <div className={`w-full overflow-hidden leading-none relative ${className}`}>
      <motion.svg
        animate={{
          x: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative block w-[calc(100%+50px)] h-12 sm:h-16 text-white"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,60 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </motion.svg>
    </div>
  );
};

/**
 * Interactive Picture Frame with Hover Sheen, Scale, and Glow
 * Gives pictures rich animations on hover
 */
interface AnimatedPictureFrameProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  badge?: React.ReactNode;
  overlayContent?: React.ReactNode;
}

export const AnimatedPictureFrame: React.FC<AnimatedPictureFrameProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[4/3]',
  badge,
  overlayContent,
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-[#F8FCFB] border border-[#C8E5DF] transition-all duration-500 hover:border-[#00A878] hover:shadow-[0_16px_36px_rgba(0,168,120,0.22)] hover:-translate-y-1 ${aspectRatio} ${className}`}
    >
      {/* The Image with smooth scale on hover */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:rotate-0.5"
        referrerPolicy="no-referrer"
      />

      {/* Vibrant Gradient Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

      {/* Shimmer Light Beam Sweep on Hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

      {/* Badge Top Left */}
      {badge && (
        <div className="absolute top-3 left-3 z-10 transition-transform duration-300 group-hover:scale-105">
          {badge}
        </div>
      )}

      {/* Overlay Bottom Content */}
      {overlayContent && (
        <div className="absolute bottom-3 left-3 right-3 z-10 text-white transition-all duration-300 group-hover:translate-y-[-2px]">
          {overlayContent}
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
  youtubeId: string;
  title: string;
  thumbnail?: string;
  aspectRatio?: '16/9' | '4/3';
  className?: string;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({
  youtubeId,
  title,
  thumbnail,
  aspectRatio = '16/9',
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[12px] bg-[#2E302B] border border-[#7A7F6A]/30 ${className}`}
      style={{ aspectRatio }}
    >
      {isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <div className="relative w-full h-full flex items-center justify-center group cursor-pointer" onClick={() => setIsPlaying(true)}>
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
            />
          ) : (
            <div className="absolute inset-0 bg-[#2E302B]" />
          )}

          <div className="absolute inset-0 bg-[#2E2E2E]/40 group-hover:bg-[#2E2E2E]/30 transition-colors" />

          {/* Play button */}
          <div className="relative z-10 w-16 h-16 rounded-full bg-[#D8C3A5] text-[#2E2E2E] border-2 border-[#BFA36F]/50 flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
            <Play className="w-7 h-7 ml-1 fill-current" />
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
            <span className="text-[11px] uppercase tracking-wider text-[#BFA36F] font-semibold block mb-1">
              RahamTV Broadcast
            </span>
            <p className="text-sm sm:text-base font-serif text-[#FAF8F5] line-clamp-1">
              {title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

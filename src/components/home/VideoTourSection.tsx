import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { AnimatedReveal } from "../shared/AnimatedReveal";
import { SectionHeading } from "../ui/SectionHeading";

export const VideoTourSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="bg-cream-50 section-padding overflow-hidden">
      <div className="section-container">
        <SectionHeading
          title="Video Tour Bukit Zamrud"
          description="Tonton langsung lingkungan dan desain memukau dari unit kami melalui video eksklusif berikut."
          align="center"
        />

        <AnimatedReveal delay={0.2} className="max-w-4xl mx-auto">
          <div 
            className="relative w-full aspect-video bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
            onClick={togglePlay}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              src="/videos/promotional-video.mp4"
              className="w-full h-full object-cover"
              loop
              playsInline
              muted={isMuted}
              onEnded={() => setIsPlaying(false)}
            />

            {/* Play/Pause Overlay */}
            <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 md:w-24 md:h-24 bg-brand-gold-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl text-brand-green-900"
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 fill-current" />
                ) : (
                  <Play className="w-10 h-10 fill-current ml-2" />
                )}
              </motion.div>
            </div>

            {/* Mute/Unmute Control */}
            <div className="absolute bottom-6 right-6 z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-brand-gold-500 hover:text-brand-green-900 transition-colors"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};

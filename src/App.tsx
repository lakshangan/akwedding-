import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Clock, Heart, Music, Sparkles, Volume2, VolumeX, ChevronDown } from 'lucide-react';

import petalImg from './assets/sakura-petal.png';
import branchTL from './assets/sakura-branch-tl.png';
import branchBR from './assets/sakura-branch-br.png';
import preloaderBg from './assets/preloader-bg.png';
import coupleImg from './assets/couple.png';
import expandingImg from './assets/hero-image.png';
import sacredImg from './assets/image2.png';
import kondattamAudio from './assets/Kondattam 130.9 170.9.mp3';
import waxSeal from './assets/crest.png';
import goldFloralCorner from './assets/gold-floral-corner.png';

const WelcomeScreen = ({ onOpen }: { onOpen: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-[#Fdfbf7] overflow-hidden"
    >
      {/* Elegant lighting overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.08)_0%,transparent_70%)] z-[1]" />
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.6] mix-blend-multiply pointer-events-none z-[0]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }} />

      {/* Letter Envelope Frame - Larger and more prominent */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute inset-4 md:inset-12 border-2 border-[#D4AF37]/40 bg-white/60 backdrop-blur-md shadow-[0_30px_60px_rgba(128,0,32,0.1)] pointer-events-none z-10 flex flex-col items-center justify-between py-8"
      >
        <div className="absolute inset-3 md:inset-4 border border-[#D4AF37]/30" />

        {/* Floral Corner ornaments - Fill Empty Space */}
        <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-40 mix-blend-multiply pointer-events-none">
          <img src={branchTL} alt="ornament" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-40 mix-blend-multiply pointer-events-none -scale-x-100">
          <img src={branchTL} alt="ornament" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-40 mix-blend-multiply pointer-events-none -scale-y-100">
          <img src={branchTL} alt="ornament" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-40 mix-blend-multiply pointer-events-none -scale-x-100 -scale-y-100">
          <img src={branchTL} alt="ornament" className="w-full h-full object-contain" />
        </div>
      </motion.div>

      <div className="relative z-30 text-center flex flex-col items-center px-6 w-full max-w-4xl max-h-screen overflow-y-auto py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 md:mb-6 mt-4"
        >
          <div className="flex items-center justify-center gap-4 text-gold/80">
            <div className="w-16 md:w-32 h-[2px] bg-gradient-to-r from-transparent to-current" />
            <Heart size={20} className="text-wine" fill="currentColor" />
            <div className="w-16 md:w-32 h-[2px] bg-gradient-to-l from-transparent to-current" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-wine/90 tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs font-serif font-bold mb-4 md:mb-6 max-w-lg leading-relaxed px-4"
        >
          The Honor Of Your Presence Is Requested At The Wedding Ceremony Of
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center w-full"
        >
          <h1 className="text-wine text-5xl md:text-7xl lg:text-8xl leading-tight font-serif mb-0 drop-shadow-sm px-2">
            Balaji
          </h1>

          <div className="flex items-center gap-6 my-2 md:my-3">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold italic text-3xl md:text-5xl font-serif">&</span>
            <div className="w-12 h-px bg-gold" />
          </div>

          <h1 className="text-wine text-5xl md:text-7xl lg:text-8xl leading-tight font-serif mt-0 mb-6 md:mb-8 drop-shadow-sm px-2">
            Akshaya
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-2 md:gap-3 text-wine tracking-[0.1em] md:tracking-[0.2em] uppercase text-xs md:text-sm font-serif font-semibold mb-6 md:mb-8"
        >
          <span className="bg-white/40 px-6 py-2 rounded-full border border-gold/20 backdrop-blur-md">Thursday, The Fourth of June</span>
          <span className="bg-white/40 px-6 py-2 rounded-full border border-gold/20 backdrop-blur-md">Two Thousand Twenty Six</span>
          <span className="mt-2 text-gold font-bold text-base md:text-lg tracking-[0.3em]">Chidambaram</span>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(128, 0, 32, 1)', color: '#FFFAF0', borderColor: 'transparent' }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="relative flex items-center gap-4 px-12 md:px-16 py-5 md:py-6 rounded-full border-2 border-wine/40 text-wine bg-[#Fdfbf7] shadow-[0_15px_30px_rgba(128,0,32,0.1)] hover:shadow-[0_20px_40px_rgba(128,0,32,0.25)] transition-all duration-500 cursor-pointer group font-bold"
          >
            <span className="text-xs md:text-sm tracking-[0.5em] uppercase font-serif">
              Open Invitation
            </span>
            <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
          </motion.button>
        </motion.div>
      </div>

      {/* Falling petals specific to letter screen */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`petal-${i}`}
            initial={{ y: -50, x: Math.random() * window.innerWidth, opacity: 0, rotate: 0 }}
            animate={{
              y: window.innerHeight + 50,
              x: Math.random() * window.innerWidth,
              opacity: [0, 0.8, 0],
              rotate: 360
            }}
            transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5, ease: "linear" }}
            className="absolute w-8 h-8 opacity-40 mix-blend-multiply"
          >
            <img src={petalImg} alt="petal" className="w-full h-full object-contain" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 2000),
      setTimeout(() => onComplete(), 4500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const textVariants = {
    initial: { opacity: 0, y: 20, filter: 'blur(10px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -20, filter: 'blur(10px)' }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center overflow-hidden bg-[#Fdfbf7]"
    >
      {/* Elegant textured background with subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,175,55,0.05)_0%,transparent_80%)] z-[1]" />
      <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply pointer-events-none z-[0]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }} />

      {/* Cinematic Royal Crest */}
      <motion.div
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 mb-16"
      >
        <div className="w-56 h-56 md:w-72 md:h-72 flex items-center justify-center relative">
          <img src={waxSeal} alt="Royal Crest" className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl opacity-90" />
        </div>

        {/* Cinematic glow behind crest */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/15 blur-[50px] rounded-full -z-10 animate-pulse" />
      </motion.div>

      {/* Premium SVG Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 100 - 50 + 'vw',
              y: Math.random() * 100 - 50 + 'vh'
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute left-1/2 top-1/2"
          >
            <Sparkles className="text-gold opacity-60" size={16 + Math.random() * 16} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="text1"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <h2 className="text-wine text-4xl md:text-5xl italic font-serif leading-tight tracking-wide drop-shadow-sm">
                "Welcome to our <br /> Wedding Ceremony"
              </h2>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="text2"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="flex justify-center gap-4 text-gold/80">
                <div className="w-16 h-px bg-current self-center" />
                <Heart size={20} />
                <div className="w-16 h-px bg-current self-center" />
              </div>
              <h2 className="text-wine text-4xl md:text-5xl italic font-serif leading-tight tracking-wide drop-shadow-sm">
                "Please grace us <br /> with your blessings"
              </h2>
              <p className="text-wine/80 tracking-[0.5em] uppercase text-xs font-bold mt-6">Opening Invitation</p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 4.5, ease: "linear" }}
        className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-transparent via-[#800020]/60 to-transparent"
      />
    </motion.div>
  );
};


const FallingPetals = () => {
  return null; // Remove messy petals for a cleaner look
};

const SakuraDecor = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Replaced messy images with elegant CSS/SVG based gold accents if needed, or just left it clean */}
    </div>
  );
};


const TempleSilhouettes = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Distant Layer */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[60vh] opacity-[0.03] text-wine flex justify-around items-end"
      >
        <svg viewBox="0 0 100 100" className="w-[400px] h-[400px] fill-current">
          <path d="M50 0 L10 100 L90 100 Z" />
        </svg>
        <svg viewBox="0 0 100 100" className="w-[300px] h-[300px] fill-current">
          <path d="M50 10 L20 100 L80 100 Z" />
        </svg>
      </motion.div>

      {/* Mid Layer */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[80vh] opacity-[0.05] text-gold flex justify-between items-end px-24"
      >
        <div className="w-1 h-full bg-gradient-to-t from-gold/40 to-transparent" />
        <svg viewBox="0 0 100 150" className="w-[500px] h-[700px] fill-current">
          <path d="M50 5 L35 25 L65 25 Z M32 26 L68 26 L72 45 L28 45 Z M25 46 L75 46 L80 70 L20 70 Z M5 106 L95 106 L100 150 L0 150 Z" />
        </svg>
      </motion.div>
    </div>
  );
};

const SakuraSeparator = () => (
  <div className="w-full flex items-center justify-center gap-8 my-24 opacity-30">
    <div className="w-32 h-px bg-gradient-to-r from-transparent to-gold/40" />
    <img src={petalImg} alt="sakura" className="w-6 h-6 mix-blend-multiply rotate-45" />
    <div className="w-32 h-px bg-gradient-to-l from-transparent to-gold/40" />
  </div>
);

const FloatingLamps = ({ delay = 0, x = '50%', y = '50%', scale = 1, depth = 1 }) => {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -500 * depth]);

  return (
    <motion.div
      style={{ left: x, top: y, scale, y: yOffset }}
      className="absolute pointer-events-none"
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 3, -3, 0]
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          delay,
          ease: "easeInOut"
        }}
      >
        <div className="relative">
          <div className="w-10 h-10 bg-marigold/20 rounded-full blur-lg animate-pulse" />
          <div className="w-px h-32 bg-gold/20 absolute bottom-full left-1/2" />
          <div className="w-6 h-10 border border-gold/30 rounded-full backdrop-blur-[2px] flex items-center justify-center">
            <div className="w-2 h-3 bg-marigold rounded-full blur-[1px] gold-glow" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ParallaxSection = ({ children, offset = 50 }: { children: React.ReactNode; offset?: number }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  return <motion.div style={{ y }}>{children}</motion.div>;
};

const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const EpicScrollSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0.3, 0.6], [0.3, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.3, 0.6], ["50%", "0%"]);
  const imageScale = useTransform(scrollYProgress, [0.3, 0.6], [2, 1]);
  const blurValue = useTransform(scrollYProgress, [0.3, 0.5], [20, 0]);
  const blur = useTransform(blurValue, (v) => `blur(${v}px)`);

  const textY = useTransform(scrollYProgress, [0.5, 0.7], [50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <section ref={containerRef} className="h-[250vh] w-full relative z-30">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
        <motion.div
          style={{ scale, borderRadius }}
          className="w-full h-full relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] origin-center"
        >
          <motion.img
            style={{ scale: imageScale, filter: blur }}
            src={expandingImg}
            alt="Wedding Moment"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-wine/60 backdrop-blur-md" />

          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
          >
            <div className="w-px h-24 bg-gradient-to-b from-transparent to-gold/80 mb-8" />
            <h2 className="text-gold text-5xl md:text-8xl font-serif italic mb-6 drop-shadow-2xl">Eternal Grace</h2>
            <p className="text-white text-lg md:text-2xl font-light tracking-[0.3em] uppercase max-w-2xl leading-relaxed drop-shadow-lg">
              Two families • One beautiful journey
            </p>
            <div className="w-px h-24 bg-gradient-to-t from-transparent to-gold/80 mt-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const RoyalDecorativeSection = () => {
  return (
    <section className="relative w-full bg-wine overflow-hidden z-20 py-32 md:py-48">
      {/* Subtle Ornamental Rings */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] border-[0.5px] border-gold/8 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] border-[0.5px] border-gold/5 rounded-full"
        />
      </div>

      {/* Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(180,40,40,0.3)_0%,transparent_70%)]" />

      {/* Large Faint Heart */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <Heart size={600} fill="currentColor" className="text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5 }}
          className="space-y-10"
        >
          {/* Heartbeat Icon */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Heart size={36} className="text-gold/80" fill="currentColor" />
              <div className="absolute inset-0 blur-2xl bg-gold/20 rounded-full" />
            </motion.div>
          </div>

          {/* Quote Lines — Staggered Reveal */}
          <div className="space-y-2 md:space-y-3">
            {[
              "\"In the garden of love,",
              "we bloom together",
              "under the sacred stars.\""
            ].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-gold-light text-3xl md:text-7xl font-serif italic leading-snug"
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>

          {/* Divider + Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-6 pt-4"
          >
            <div className="flex items-center gap-6 text-gold/30">
              <div className="w-16 md:w-24 h-px bg-current" />
              <span className="text-[9px] md:text-[10px] tracking-[1em] uppercase font-bold text-gold/50">Forever & Always</span>
              <div className="w-16 md:w-24 h-px bg-current" />
            </div>
            <div className="w-px h-12 bg-gradient-to-t from-transparent via-gold/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Hearts + Gold Dust */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100],
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 6
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 50}%`
            }}
          >
            {i % 4 === 0 ? (
              <Heart size={10} fill="currentColor" className="text-rose/15" />
            ) : (
              <div className="w-1 h-1 bg-gold/30 rounded-full blur-[0.5px]" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// --- Main App ---

const MainContent = ({ isPlaying, setIsPlaying }: { isPlaying: boolean, setIsPlaying: (val: boolean) => void }) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      key="main-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-[400vh] bg-pristine-white selection:bg-rose/20 scroll-smooth"
    >
      <SakuraDecor />
      <FallingPetals />

      {/* Main Paper Texture Overlay for Sections */}
      <div className="fixed inset-0 bg-paper-texture opacity-40 z-0 pointer-events-none" />

      {/* Royal Frame */}
      <div className="fixed inset-4 md:inset-8 border border-gold/20 pointer-events-none z-[100] rounded-[2rem] md:rounded-[4rem]" />
      <div className="fixed inset-2 md:inset-4 border border-gold/10 pointer-events-none z-[100] rounded-[inherit]" />

      {/* Audio Button */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(128,0,32,0.15)" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-10 right-10 md:bottom-20 md:right-20 z-[110] p-5 border border-wine/20 bg-white/80 backdrop-blur-2xl rounded-full text-wine hover:border-wine hover:bg-wine hover:text-white transition-all duration-500 group shadow-lg"
      >
        {isPlaying ? <Volume2 size={28} /> : <VolumeX size={28} />}
      </motion.button>

      {/* Main Content */}
      <main className="relative flex flex-col items-center w-full">

        {/* Hero Section */}
        <section className="h-[100svh] w-full relative overflow-hidden bg-pristine-white">

          {/* Premium Gold Floral Corners */}
          {/* Hero background floral decorations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50, y: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-0 left-0 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10 pointer-events-none drop-shadow-xl mix-blend-multiply opacity-50"
          >
            <img src={branchTL} alt="corner" className="w-full h-full object-contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50, y: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10 pointer-events-none scale-x-[-1] drop-shadow-xl mix-blend-multiply opacity-50"
          >
            <img src={branchTL} alt="corner" className="w-full h-full object-contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50, y: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
            className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10 pointer-events-none scale-y-[-1] drop-shadow-xl mix-blend-multiply opacity-50"
          >
            <img src={branchTL} alt="corner" className="w-full h-full object-contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
            className="absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10 pointer-events-none scale-x-[-1] scale-y-[-1] drop-shadow-xl mix-blend-multiply opacity-50"
          >
            <img src={branchTL} alt="corner" className="w-full h-full object-contain" />
          </motion.div>

          {/* Background elegant large typography pattern */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03] select-none overflow-hidden">
            <span className="text-[30rem] md:text-[50rem] font-serif italic text-gold whitespace-nowrap leading-none drop-shadow-lg">&</span>
          </div>

          {/* Main composition container */}
          <div className="relative z-20 w-full h-full max-w-7xl mx-auto">

            {/* Groom - positioned top / behind or overlapping image elegantly */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute top-[8%] md:top-[10%] lg:top-[12%] left-4 md:left-12 lg:left-24 z-30 pointer-events-none"
            >
              <h1 className="text-wine text-[4.5rem] md:text-[7rem] lg:text-[8.5rem] leading-none font-serif tracking-tighter drop-shadow-[0_10px_20px_rgba(255,255,255,0.8)]">
                Balaji
              </h1>
            </motion.div>

            {/* Bride - positioned bottom / behind or overlapping image elegantly */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="absolute bottom-[16%] md:bottom-[18%] lg:bottom-[20%] right-4 md:right-12 lg:right-24 z-30 pointer-events-none"
            >
              <h1 className="text-wine text-[4.5rem] md:text-[7rem] lg:text-[8.5rem] leading-none font-serif tracking-tighter drop-shadow-[0_10px_20px_rgba(255,255,255,0.8)]">
                Akshaya
              </h1>
            </motion.div>

            {/* Center Image / Crest - centered on top */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[45%] md:top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[18rem] h-[24rem] md:w-[24rem] md:h-[34rem] lg:w-[28rem] lg:h-[38rem] z-20 group"
            >
              {/* Outer Frame with elegant gold touches */}
              <div className="absolute inset-0 border-[3px] border-gold/40 rounded-t-full rounded-b-full p-2 md:p-4 bg-white/70 backdrop-blur-xl shadow-[0_30px_60px_rgba(212,175,55,0.2)] overflow-visible">
                <div className="w-full h-full rounded-t-full rounded-b-full overflow-hidden relative border border-gold/20 shadow-inner bg-white">
                  <div className="absolute inset-0 bg-gold/10 mix-blend-color z-10 group-hover:bg-transparent transition-colors duration-1000" />
                  <img src={expandingImg} alt="Couple Portrait" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]" />
                </div>
              </div>

              {/* Floating Date Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-2xl border border-gold/30 px-8 md:px-12 py-3 md:py-4 rounded-full shadow-[0_20px_40px_rgba(212,175,55,0.2)] flex items-center gap-4 z-30 whitespace-nowrap">
                <span className="text-wine font-serif italic text-lg md:text-2xl">June 4</span>
                <Heart size={16} className="text-rose animate-pulse" fill="currentColor" />
                <span className="text-wine font-serif italic text-lg md:text-2xl">2026</span>
              </div>
            </motion.div>

            {/* Bottom Center Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 md:gap-6 z-10 w-full"
            >
              <div className="w-px h-12 md:h-20 bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
              <p className="text-wine/80 tracking-[0.4em] uppercase text-[9px] md:text-xs font-sans text-center font-medium drop-shadow-sm whitespace-nowrap">
                Request the honor of your presence
              </p>
            </motion.div>

          </div>
        </section>

        {/* Invitation Message */}
        <section className="py-32 md:py-64 px-6 max-w-5xl text-center relative z-20 mx-auto">
          <ScrollReveal>
            <div className="p-8 md:p-24 border border-wine/10 bg-white/80 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_40px_rgba(128,0,32,0.05)] relative overflow-hidden group">
              {/* Decorative corner ornaments */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-wine/20 rounded-tl-3xl group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-wine/20 rounded-tr-3xl group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-wine/20 rounded-bl-3xl group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-wine/20 rounded-br-3xl group-hover:scale-110 transition-transform duration-700" />

              <div className="mb-16 relative">
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-wine/40 to-transparent mx-auto mb-8" />
                <h2 className="text-display text-4xl md:text-6xl text-wine mb-12 tracking-[0.4em] uppercase font-bold">Artistic Union</h2>
                <div className="flex justify-center gap-4 text-wine/40">
                  <Sparkles size={20} />
                  <Sparkles size={20} />
                  <Sparkles size={20} />
                </div>
              </div>
              <p className="text-serif text-2xl md:text-4xl leading-relaxed text-wine/90 font-light italic px-4 md:px-12 relative z-10">
                With the blessings of our elders and the grace of the Almighty,
                <br /><br />
                we cordially invite you along with your family and friends to grace the auspicious wedding ceremony of <span className="text-wine font-bold not-italic">M. Balaji & R. Akshaya</span> and make the occasion memorable with your presence.
              </p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-wine/40 to-transparent mx-auto mt-20" />
            </div>
          </ScrollReveal>
        </section>

        <EpicScrollSection />
        <RoyalDecorativeSection />

        {/* Ancestry Section */}
        <section className="py-16 md:py-32 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-20">
          <ScrollReveal>
            <div className="p-8 md:p-12 border border-wine/10 bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_rgba(128,0,32,0.05)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 floral-corner-light scale-x-[-1] transition-transform duration-700 group-hover:scale-[1.1] origin-top-right" />
              <div className="absolute bottom-0 left-0 w-32 h-32 floral-corner-light scale-y-[-1] transition-transform duration-700 group-hover:scale-[1.1] origin-bottom-left" />

              <div className="relative z-10">
                <h3 className="text-luxury text-2xl md:text-3xl mb-8">The Groom's Side</h3>
                <p className="text-wine text-xl font-bold mb-4">M. Balaji, B.E., Civil & Structural Engineering</p>
                <div className="space-y-6 text-wine/80 text-sm leading-relaxed">
                  <p className="uppercase tracking-widest text-[10px] text-wine/50 mb-2">Parents</p>

                  <div> <p className="text-base">Late Mr. R. Murugan Naidu & Mrs. Rajalakshmi Murugan</p>

                    <p className="text-xs italic mt-1 text-wine/60">From Chidambaram</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="p-8 md:p-12 border border-wine/10 bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_rgba(128,0,32,0.05)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 floral-corner-light transition-transform duration-700 group-hover:scale-110 origin-top-left" />
              <div className="absolute bottom-0 right-0 w-32 h-32 floral-corner-light scale-x-[-1] scale-y-[-1] transition-transform duration-700 group-hover:scale-[1.1] origin-bottom-right" />

              <div className="relative z-10">
                <h3 className="text-luxury text-2xl md:text-3xl mb-8">The Bride's Side</h3>
                <p className="text-wine text-xl font-bold mb-4">R. Akshaya, M.B.A.</p>
                <div className="space-y-6 text-wine/80 text-sm leading-relaxed">
                  <div>
                    <p className="uppercase tracking-widest text-[10px] text-wine/50 mb-2">Parents</p>
                    <p className="text-base">Mr. R. Radhakrishnan & Mrs. Kalaivani Radhakrishnan</p>
                    <p className="text-xs italic mt-1 text-wine/60">From Sirkazhi</p>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Event Details Grid */}
        <section className="py-16 md:py-32 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-20">
          <ScrollReveal>
            <div className="h-full border border-wine/10 p-8 md:p-12 bg-white/80 backdrop-blur-2xl rounded-[2rem] md:rounded-tr-[5rem] md:rounded-bl-[5rem] shadow-[0_20px_40px_rgba(128,0,32,0.05)] group hover:bg-white hover:border-wine/20 transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 floral-corner-light scale-x-[-1] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
              <div className="relative z-10">
                <Calendar className="text-wine mb-8 w-10 h-10 opacity-30 group-hover:opacity-60 transition-opacity" />
                <h3 className="text-display text-[10px] tracking-[0.5em] text-wine/40 mb-8 uppercase">Reception</h3>
                <p className="text-serif text-5xl mb-4 text-wine font-light uppercase">June 3</p>
                <p className="text-serif text-lg text-wine/60 italic font-serif">Wednesday, 2026</p>
                <p className="text-serif text-lg text-wine/80 font-serif mt-2">6:30 PM Onwards</p>
                <div className="mt-8 pt-8 border-t border-wine/10 text-[10px] uppercase tracking-widest text-wine/40 leading-loose">
                  Evening Celebration
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="h-full border border-wine/10 p-8 md:p-12 bg-white/80 backdrop-blur-2xl rounded-[2rem] md:rounded-tl-[5rem] md:rounded-br-[5rem] shadow-[0_20px_40px_rgba(128,0,32,0.05)] group hover:bg-white hover:border-wine/20 transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 floral-corner-light opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
              <div className="relative z-10">
                <Clock className="text-wine mb-8 w-10 h-10 opacity-30 group-hover:opacity-60 transition-opacity" />
                <h3 className="text-display text-[10px] tracking-[0.5em] text-wine/40 mb-8 uppercase">Wedding</h3>
                <p className="text-serif text-5xl mb-4 text-wine font-light uppercase">June 4</p>
                <p className="text-serif text-lg text-wine/60 italic font-serif">Thursday, 2026</p>
                <p className="text-serif text-lg text-wine/80 font-serif mt-2">7:30 AM to 9:00 AM</p>
                <div className="mt-8 pt-8 border-t border-wine/10 text-[10px] uppercase tracking-widest text-wine/40 leading-loose">
                  Auspicious Timing
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="h-full border border-wine/10 p-8 md:p-12 bg-white/80 backdrop-blur-2xl rounded-[2rem] md:rounded-tr-[5rem] md:rounded-bl-[5rem] shadow-[0_20px_40px_rgba(128,0,32,0.05)] group hover:bg-white hover:border-wine/20 transition-all duration-700 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-40 h-40 floral-corner-light scale-x-[-1] scale-y-[-1] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
              <div className="relative z-10">
                <MapPin className="text-wine mb-8 w-10 h-10 opacity-30 group-hover:opacity-60 transition-opacity" />
                <h3 className="text-display text-[10px] tracking-[0.5em] text-wine/40 mb-8 uppercase">The Venue</h3>
                <p className="text-serif text-4xl mb-4 text-wine font-light uppercase">RR Convention Center</p>
                <p className="text-serif text-sm text-wine/80 italic font-serif leading-relaxed">
                  R R Convention Centre, bypass road,<br />
                  opposite Sri Bhaktha anjaneyar temple,<br />
                  Sirkali, Chidambaram, Tamil Nadu 608401
                </p>
                <div className="mt-8 pt-8 border-t border-wine/10">
                  <a href="https://www.google.com/maps/search/?api=1&query=R+R+Convention+Centre,+bypass+road,+opposite+Sri+Bhaktha+anjaneyar+temple,+Sirkali,+Chidambaram,+Tamil+Nadu+608401" target="_blank" rel="noopener noreferrer" className="text-xs text-rose uppercase tracking-widest hover:underline hover:text-wine transition-colors">Get Directions</a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Catering Section */}
        <section className="py-16 md:py-32 w-full max-w-5xl mx-auto px-6 text-center relative z-20">
          <ScrollReveal>
            <div className="p-8 md:p-12 border border-wine/10 bg-white/80 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_40px_rgba(128,0,32,0.05)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 floral-corner-light transition-transform duration-700 group-hover:scale-110 origin-top-left" />
              <div className="absolute top-0 right-0 w-32 h-32 floral-corner-light scale-x-[-1] transition-transform duration-700 group-hover:scale-[1.1] origin-top-right" />

              <div className="relative z-10">
                <h4 className="text-[10px] uppercase tracking-[0.5em] text-wine/40 mb-8">Culinary Experience By</h4>
                <div className="flex flex-col items-center gap-4 text-wine/80 font-serif italic text-xl">
                  <span className="text-2xl text-wine font-bold">S.R.M Catering Service</span>
                  <span className="text-sm opacity-80 font-sans tracking-widest uppercase text-wine/60">Managed by: Thiru. S.P. Murugesan (Chidambaram)</span>
                  <div className="w-12 h-px bg-wine/20 my-2" />
                  <span className="text-sm font-sans tracking-widest">Contact: 9566713219</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Motif Section */}
        <section className="w-full relative py-24 md:py-48 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <ScrollReveal>
              <div className="relative p-8 md:p-16 border border-wine/10 bg-white/80 backdrop-blur-2xl rounded-[2rem] md:rounded-3xl shadow-[0_20px_40px_rgba(128,0,32,0.05)] overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 floral-corner-light scale-x-[-1]" />
                <h2 className="text-luxury text-4xl md:text-6xl mb-8 md:mb-12 text-wine">Sacred <br /> Beginnings</h2>
                <p className="text-serif text-xl leading-relaxed text-wine/80 italic">
                  As we exchange our vows, we invite you to witness the sparkle of our new beginning.
                  Enriched by tradition and guided by love, this ceremony marks the first step of our eternal journey.
                </p>
                <motion.div
                  className="mt-12 flex items-center gap-4 text-wine font-display tracking-widest text-xs uppercase"
                >
                  Blessings of the Divine <Heart size={16} className="text-rose" fill="currentColor" />
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="aspect-[3/4] max-w-md mx-auto rounded-t-full overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(128,0,32,0.1)] group relative">
                <div className="absolute inset-0 bg-wine/5 group-hover:bg-transparent transition-colors duration-1000 z-10" />
                <img
                  src={sacredImg}
                  alt="Wedding Moment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* RSVP / Short Version Section */}
        <section className="py-32 md:py-64 w-full flex justify-center px-6 relative z-20">
          <ScrollReveal>
            <div className="max-w-4xl w-full border border-wine/10 p-8 md:p-32 bg-white/90 backdrop-blur-3xl relative rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_rgba(128,0,32,0.05)] overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 floral-corner-light z-0" />
              <div className="absolute bottom-0 right-0 w-64 h-64 floral-corner-light z-0 scale-x-[-1] scale-y-[-1]" />

              <div className="absolute top-6 md:top-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-wine/30">
                <div className="w-8 md:w-12 h-px bg-current" />
                <Sparkles size={14} />
                <div className="w-8 md:w-12 h-px bg-current" />
              </div>

              <div className="text-center mt-4 md:mt-0 mb-12 md:mb-20 relative z-10">
                <h2 className="text-display text-3xl md:text-5xl text-wine mb-8 md:mb-12 tracking-[0.2em] font-light uppercase italic">Balaji <Heart size={24} className="inline-block mx-4 text-rose" fill="currentColor" /> Akshaya</h2>
                <div className="space-y-6 text-wine/90 font-serif italic text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                  <p>Together with our families, we joyfully invite you to celebrate our wedding ceremony.</p>

                  <div className="py-8 border-y border-wine/10 space-y-6">
                    <div>
                      <p className="font-sans uppercase tracking-[0.4em] text-xs font-bold text-wine mb-1">Reception</p>
                      <p className="font-sans uppercase tracking-[0.2em] text-[10px] text-wine/80">3 June 2026 • 6:30 PM Onwards</p>
                    </div>
                    <div>
                      <p className="font-sans uppercase tracking-[0.4em] text-xs font-bold text-wine mb-1">Wedding</p>
                      <p className="font-sans uppercase tracking-[0.2em] text-[10px] text-wine/80">4 June 2026 • 7:30 AM - 9:00 AM</p>
                    </div>
                    <p className="font-sans text-xs tracking-widest mt-6 pt-6 border-t border-wine/10 text-wine leading-relaxed">
                      R R Convention Centre, bypass road, opposite Sri Bhaktha anjaneyar temple, Sirkali, Chidambaram, Tamil Nadu 608401
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=R+R+Convention+Centre,+bypass+road,+opposite+Sri+Bhaktha+anjaneyar+temple,+Sirkali,+Chidambaram,+Tamil+Nadu+608401"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 font-sans text-[10px] uppercase tracking-[0.3em] text-rose hover:text-wine transition-colors not-italic hover:underline"
                    >
                      ↗ Get Directions
                    </a>
                  </div>

                  <p className="pt-6">We look forward to celebrating this beautiful occasion with you and your family.</p>

                  <div className="pt-8">
                    <p className="font-sans uppercase tracking-[0.6em] text-[10px] opacity-40 mb-2">With Love,</p>
                    <p className="text-3xl font-luxury text-wine not-italic">Balaji & Akshaya</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Footer */}
        <footer className="py-24 md:py-48 w-full max-w-5xl mx-auto px-6 block text-center relative z-20">
          <ScrollReveal>
            <div className="p-8 md:p-24 border border-wine/10 bg-white/60 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_40px_rgba(128,0,32,0.02)]">
              <div className="text-luxury text-2xl md:text-3xl mb-4 italic text-wine/80">Balaji <br className="block md:hidden" />& Akshaya</div>
              <p className="text-[8px] md:text-[10px] tracking-[0.8em] md:tracking-[1.2em] text-wine/40 uppercase mb-8 ml-[0.8em] md:ml-[1.2em]">Sacred Union • Eternal Joy</p>
              <div className="flex justify-center gap-8 md:gap-12 text-rose/60">
                <Music size={20} />
                <Heart size={20} fill="currentColor" />
                <Sparkles size={20} />
              </div>
            </div>
          </ScrollReveal>
        </footer>

      </main>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-rose z-[100] origin-left shadow-[0_0_10px_rgba(229,115,115,0.5)]"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.div>
  );
};

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [appState, setAppState] = useState<'welcome' | 'preloader' | 'main'>('welcome');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      const playPromise = isPlaying ? audioRef.current.play() : Promise.resolve();
      if (isPlaying) {
        playPromise.catch(() => {
          console.warn("Audio playback not supported or file missing. Continuing without audio.");
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src={kondattamAudio} loop />
      <AnimatePresence mode="wait">
        {appState === 'welcome' && (
          <WelcomeScreen
            key="welcome"
            onOpen={() => {
              setIsPlaying(true);
              setAppState('preloader');
            }}
          />
        )}
        {appState === 'preloader' && (
          <Preloader key="preloader" onComplete={() => setAppState('main')} />
        )}
        {appState === 'main' && (
          <MainContent isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        )}
      </AnimatePresence>
    </>
  );
}

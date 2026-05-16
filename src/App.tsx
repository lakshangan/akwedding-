import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Clock, Heart, Music, Sparkles, Volume2, VolumeX, ChevronDown } from 'lucide-react';

import petalImg from './assets/sakura-petal.png';
import branchTL from './assets/sakura-branch-tl.png';
import branchBR from './assets/sakura-branch-br.png';
import preloaderBg from './assets/preloader-bg.png';
import coupleImg from './assets/couple.png';
import expandingImg from './assets/image.png';
import sacredImg from './assets/image2.png';

const WelcomeScreen = ({ onOpen }: { onOpen: () => void }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      springX.set((e.clientX / window.innerWidth - 0.5) * 40);
      springY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const mouseX = useTransform(springX, (v) => v);
  const mouseY = useTransform(springY, (v) => v);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
      className="fixed inset-0 z-[2000] flex flex-col items-center justify-center bg-pristine-white overflow-hidden"
    >
      {/* Layer 1: Clean Paper Texture */}
      <div className="absolute inset-0 bg-paper-texture opacity-[0.15] mix-blend-multiply z-0" />

      {/* Premium Floral Corners */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 floral-corner-light z-10" />
      <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 floral-corner-light z-10 scale-x-[-1]" />
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 floral-corner-light z-10 scale-y-[-1]" />
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 floral-corner-light z-10 scale-x-[-1] scale-y-[-1]" />
      
      {/* Layer 2: Interactive Light Rays */}
      <motion.div 
        style={{ x: mouseX, y: mouseY, scale: 1.2 }}
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(212,175,55,0.15)_180deg,transparent_360deg)] animate-spin-slow" />
      </motion.div>

      {/* Layer 3: Floating Elegant Shapes */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div 
          style={{ x: useTransform(mouseX, (v) => v * -0.5), y: useTransform(mouseY, (v) => v * -0.5) }}
          className="absolute top-10 left-10 w-64 h-64 border border-rose/10 rounded-full blur-[1px]" 
        />
        <motion.div 
          style={{ x: useTransform(mouseX, (v) => v * -0.8), y: useTransform(mouseY, (v) => v * -0.8) }}
          className="absolute bottom-10 right-10 w-96 h-96 border border-wine/5 rounded-full blur-[2px]" 
        />
        <motion.div 
          style={{ x: useTransform(mouseX, (v) => v * 0.3), y: useTransform(mouseY, (v) => v * 0.3) }}
          className="absolute top-1/2 left-1/4 w-32 h-32 border border-gold/20 rounded-lg rotate-45 blur-[1px]" 
        />
      </div>

      {/* Layer 4: Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: "110vh", x: (Math.random() * 100) + "vw" }}
            animate={{ 
              opacity: [0, 1, 0], 
              y: "-10vh",
              x: (Math.random() * 100) + (Math.random() > 0.5 ? 2 : -2) + "vw" 
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity, 
              delay: Math.random() * 10,
              ease: "easeInOut"
            }}
            className="absolute w-[3px] h-[3px] bg-rose/30 rounded-full blur-[1.5px]"
          />
        ))}
      </div>

      <div className="relative z-30 text-center flex flex-col items-center px-6 w-full">
        <motion.div
          style={{ x: useTransform(mouseX, (v) => v * 0.2), y: useTransform(mouseY, (v) => v * 0.2) }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="flex justify-center gap-8 text-wine/80 mb-12">
              <div className="w-32 h-px bg-gradient-to-r from-transparent to-wine/40 self-center" />
              <div className="p-4 border-2 border-wine/20 rounded-full bg-wine/5 animate-pulse">
                <Sparkles size={32} />
              </div>
              <div className="w-32 h-px bg-gradient-to-l from-transparent to-wine/40 self-center" />
            </div>

            <p className="text-wine/80 tracking-[1em] uppercase text-xs md:text-sm font-sans mb-10 drop-shadow-sm">A Sacred Royal Union</p>
            
            <h1 className="text-6xl md:text-[10rem] text-wine font-serif italic leading-none drop-shadow-[0_10px_30px_rgba(128,0,32,0.15)] flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <motion.span initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2 }}>Balaji</motion.span>
              <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="text-rose text-5xl md:text-8xl drop-shadow-md">&</motion.span>
              <motion.span initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 2 }}>Akshaya</motion.span>
            </h1>

            <div className="w-64 h-px bg-gradient-to-r from-transparent via-wine/30 to-transparent mt-12 mx-auto" />
            <p className="text-wine/60 font-serif text-2xl md:text-4xl italic tracking-[0.3em] mt-10">Eternal Bond of Love</p>
          </motion.div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(128,0,32,0.15)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="group relative px-14 md:px-24 py-6 md:py-8 bg-white/80 backdrop-blur-3xl border border-wine/20 rounded-full text-wine font-serif text-2xl md:text-3xl tracking-[0.4em] uppercase hover:border-wine hover:text-white transition-all duration-700 flex items-center gap-8 shadow-[0_20px_60px_rgba(128,0,32,0.08)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-wine scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-0" />
            
            <span className="relative z-10 group-hover:text-white transition-colors duration-700 delay-100">Open Invitation</span>
            <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full border border-wine/20 flex items-center justify-center group-hover:bg-transparent group-hover:border-white transition-all duration-700 shadow-sm">
              <ChevronDown className="text-wine group-hover:text-white transition-colors duration-700 w-6 h-6 md:w-8 md:h-8" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 3500),
      setTimeout(() => setStep(2), 7000),
      setTimeout(() => onComplete(), 10500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const textVariants = {
    initial: { opacity: 0, scale: 0.9, filter: 'blur(20px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 1.1, filter: 'blur(20px)' }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-pristine-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(128,0,32,0.05)_0%,rgba(252,251,249,1)_100%)] z-0" />
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-paper-texture mix-blend-multiply" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(128,0,32,0.02)_20px,rgba(128,0,32,0.02)_21px)]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl flex flex-col items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -z-10 w-96 h-96 border border-wine/10 rounded-full"
        />
        
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
              <div className="flex justify-center gap-4 text-wine/40">
                <div className="w-12 h-px bg-current self-center" />
                <Heart size={16} />
                <div className="w-12 h-px bg-current self-center" />
              </div>
              <h2 className="text-luxury text-4xl md:text-6xl italic font-serif leading-tight">
                "Bless us with <br /> your presence."
              </h2>
              <p className="text-wine/60 tracking-[0.6em] uppercase text-[9px] font-bold">A Sacred Union Awaits</p>
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
              <div className="flex justify-center gap-4 text-wine/40">
                <div className="w-12 h-px bg-current self-center" />
                <Sparkles size={16} />
                <div className="w-12 h-px bg-current self-center" />
              </div>
              <h2 className="text-luxury text-4xl md:text-6xl italic font-serif leading-tight">
                "Love us with <br /> your whole heart."
              </h2>
              <p className="text-wine/60 tracking-[0.6em] uppercase text-[9px] font-bold">The Celebration of Love</p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="text3"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="flex justify-center gap-4 text-wine/40">
                <div className="w-12 h-px bg-current self-center" />
                <Music size={16} />
                <div className="w-12 h-px bg-current self-center" />
              </div>
              <h2 className="text-luxury text-4xl md:text-6xl italic font-serif leading-tight">
                "Our story begins <br /> with you."
              </h2>
              <p className="text-wine/60 tracking-[0.6em] uppercase text-[9px] font-bold">Forever Starts Now</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 10.5, ease: "linear" }}
        className="absolute bottom-0 left-0 h-1 bg-rose/40"
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
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: -50, y: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-0 left-0 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 gold-floral-corner z-10 pointer-events-none drop-shadow-xl mix-blend-multiply" 
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 50, y: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                className="absolute top-0 right-0 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 gold-floral-corner z-10 pointer-events-none rotate-90 drop-shadow-xl mix-blend-multiply" 
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: -50, y: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
                className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 gold-floral-corner z-10 pointer-events-none -rotate-90 drop-shadow-xl mix-blend-multiply" 
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
                className="absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 gold-floral-corner z-10 pointer-events-none rotate-180 drop-shadow-xl mix-blend-multiply" 
              />

              {/* Background elegant large typography pattern */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03] select-none overflow-hidden">
                <span className="text-[30rem] md:text-[50rem] font-serif italic text-gold whitespace-nowrap leading-none drop-shadow-lg">&</span>
              </div>

              {/* Main composition container */}
              <div className="relative z-20 w-full h-full max-w-7xl mx-auto">
                
                {/* Groom - positioned top left / behind image */}
                <motion.div 
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="absolute top-[12%] md:top-[15%] left-6 md:left-16 lg:left-32 z-10"
                >
                  <h1 className="text-wine text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none font-serif tracking-tighter drop-shadow-lg">
                    Balaji
                  </h1>
                </motion.div>

                {/* Bride - positioned bottom right / behind image */}
                <motion.div 
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  className="absolute bottom-[20%] md:bottom-[20%] right-6 md:right-16 lg:right-32 z-10"
                >
                  <h1 className="text-wine text-[5rem] md:text-[8rem] lg:text-[10rem] leading-none font-serif tracking-tighter drop-shadow-lg">
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
                <div className="p-8 md:p-12 border border-wine/10 bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_rgba(128,0,32,0.05)]">
                  <h3 className="text-luxury text-2xl md:text-3xl mb-8">The Groom's Side</h3>
                  <p className="text-wine text-xl font-bold mb-4">M. Balaji, B.E., Civil & Structural Engineering</p>
                  <div className="space-y-6 text-wine/80 text-sm leading-relaxed">
                    <div>
                      <p className="uppercase tracking-widest text-[10px] text-wine/50 mb-2">Parents</p>
                      <p className="text-base">Mr. R. Radhakrishnan & Mrs. Kalaivani Radhakrishnan</p>
                      <p className="text-xs italic mt-1 text-wine/60">From Sirkazhi</p>
                    </div>
                    <div>
                      <p className="uppercase tracking-widest text-[10px] text-wine/50 mb-2">Proprietor of</p>
                      <ul className="list-disc list-inside opacity-90 space-y-1">
                        <li>Murugan Textile</li>
                        <li>Black Spade</li>
                        <li>Altitude Menswear</li>
                        <li>Retro Menswear</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="p-8 md:p-12 border border-wine/10 bg-white/80 backdrop-blur-2xl rounded-3xl shadow-[0_20px_40px_rgba(128,0,32,0.05)]">
                  <h3 className="text-luxury text-2xl md:text-3xl mb-8">The Bride's Side</h3>
                  <p className="text-wine text-xl font-bold mb-4">R. Akshaya, M.B.A.</p>
                  <div className="space-y-6 text-wine/80 text-sm leading-relaxed">
                    <div>
                      <p className="uppercase tracking-widest text-[10px] text-wine/50 mb-2">Parents</p>
                      <p className="text-base">Late Mr. R. Murugan Naidu & Mrs. Rajalakshmi Murugan</p>
                      <p className="text-xs italic mt-1 text-wine/60">From Chidambaram</p>
                    </div>
                    <div>
                      <p className="uppercase tracking-widest text-[10px] text-wine/50 mb-2">Specialization</p>
                      <p className="text-base opacity-90">Finance with Business Analytics</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            {/* Event Details Grid */}
            <section className="py-16 md:py-32 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-20">
              <ScrollReveal>
                <div className="h-full border border-wine/10 p-8 md:p-12 bg-white/80 backdrop-blur-2xl rounded-[2rem] md:rounded-tr-[5rem] md:rounded-bl-[5rem] shadow-[0_20px_40px_rgba(128,0,32,0.05)] group hover:bg-white hover:border-wine/20 transition-all duration-700">
                  <Calendar className="text-wine mb-8 w-10 h-10 opacity-30 group-hover:opacity-60 transition-opacity" />
                  <h3 className="text-display text-[10px] tracking-[0.5em] text-wine/40 mb-8 uppercase">Ceremony Date</h3>
                  <p className="text-serif text-5xl mb-4 text-wine font-light uppercase">June 4</p>
                  <p className="text-serif text-lg text-wine/60 italic font-serif">Thursday, 2026</p>
                  <div className="mt-8 pt-8 border-t border-wine/10 text-[10px] uppercase tracking-widest text-wine/40 leading-loose">
                    Wedding Ceremony
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="h-full border border-wine/10 p-8 md:p-12 bg-white/80 backdrop-blur-2xl rounded-[2rem] md:rounded-tl-[5rem] md:rounded-br-[5rem] shadow-[0_20px_40px_rgba(128,0,32,0.05)] group hover:bg-white hover:border-wine/20 transition-all duration-700">
                  <Clock className="text-wine mb-8 w-10 h-10 opacity-30 group-hover:opacity-60 transition-opacity" />
                  <h3 className="text-display text-[10px] tracking-[0.5em] text-wine/40 mb-8 uppercase">Auspicious Time</h3>
                  <p className="text-serif text-5xl mb-4 text-wine font-light uppercase">7:30 AM</p>
                  <p className="text-serif text-lg text-wine/60 italic font-serif">to 9:00 AM</p>
                  <div className="mt-8 pt-8 border-t border-wine/10 text-[10px] uppercase tracking-widest text-wine/40 leading-loose">
                    Auspicious Timing
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="h-full border border-wine/10 p-8 md:p-12 bg-white/80 backdrop-blur-2xl rounded-[2rem] md:rounded-tr-[5rem] md:rounded-bl-[5rem] shadow-[0_20px_40px_rgba(128,0,32,0.05)] group hover:bg-white hover:border-wine/20 transition-all duration-700">
                  <MapPin className="text-wine mb-8 w-10 h-10 opacity-30 group-hover:opacity-60 transition-opacity" />
                  <h3 className="text-display text-[10px] tracking-[0.5em] text-wine/40 mb-8 uppercase">The Venue</h3>
                  <p className="text-serif text-4xl mb-4 text-wine font-light uppercase">RR Convention Center</p>
                  <p className="text-serif text-sm text-wine/80 italic font-serif leading-relaxed">
                    57/5A, Sirkali - Chidambaram Bypass Road,<br />
                    Near Trichy Link Road,<br />
                    Chidambaram - 608001
                  </p>
                  <div className="mt-8 pt-8 border-t border-wine/10">
                    <a href="https://maps.app.goo.gl/chidambaram" target="_blank" className="text-xs text-rose uppercase tracking-widest hover:underline hover:text-wine transition-colors">Get Directions</a>
                  </div>
                </div>
              </ScrollReveal>
            </section>

            {/* Catering Section */}
            <section className="py-16 md:py-32 w-full max-w-5xl mx-auto px-6 text-center relative z-20">
              <ScrollReveal>
                <div className="p-8 md:p-12 border border-wine/10 bg-white/80 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_40px_rgba(128,0,32,0.05)]">
                  <h4 className="text-[10px] uppercase tracking-[0.5em] text-wine/40 mb-8">Culinary Experience By</h4>
                  <div className="flex flex-col items-center gap-4 text-wine/80 font-serif italic text-xl">
                    <span className="text-2xl text-wine font-bold">S.R.M Catering Service</span>
                    <span className="text-sm opacity-80 font-sans tracking-widest uppercase text-wine/60">Managed by: Thiru. S.P. Murugesan (Chidambaram)</span>
                    <div className="w-12 h-px bg-wine/20 my-2" />
                    <span className="text-sm font-sans tracking-widest">Contact: 9566713219</span>
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

                      <div className="py-8 border-y border-wine/10 space-y-2">
                        <p className="font-sans uppercase tracking-[0.4em] text-xs font-bold text-wine">4 June 2026</p>
                        <p className="font-sans uppercase tracking-[0.2em] text-xs text-wine/80">7:30 AM - 9:00 AM</p>
                        <p className="font-sans text-sm tracking-widest mt-4 text-wine">RR Convention Center, Chidambaram</p>
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
      <audio ref={audioRef} src="/music.mp3" loop />
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

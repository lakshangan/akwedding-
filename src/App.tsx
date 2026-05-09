import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Heart, Music, Sparkles, Volume2, VolumeX, Bird, Flower2 } from 'lucide-react';

// --- Sub-components ---

import petalImg from './assets/sakura-petal.png';
import branchTL from './assets/sakura-branch-tl.png';
import branchBR from './assets/sakura-branch-br.png';
import preloaderBg from './assets/preloader-bg.png';

const Preloader = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2500),
      setTimeout(() => onComplete(), 5000),
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
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-white"
    >
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 6, ease: [0.33, 1, 0.68, 1] }}
        className="absolute inset-0 z-0"
      >
        <img src={preloaderBg} alt="Wedding Arch" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </motion.div>

      {/* Premium SVG Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
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
            <Sparkles className="text-gold opacity-30" size={24 + Math.random() * 20} />
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
              <div className="flex justify-center gap-4 text-gold/40">
                <div className="w-12 h-px bg-current self-center" />
                <Heart size={16} />
                <div className="w-12 h-px bg-current self-center" />
              </div>
              <h2 className="text-luxury text-4xl md:text-6xl italic font-serif leading-tight">
                "Bless us with <br/> your presence."
              </h2>
              <p className="text-wine/40 tracking-[0.6em] uppercase text-[9px] font-bold">A Sacred Union Awaits</p>
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
              <div className="flex justify-center gap-4 text-gold/40">
                <div className="w-12 h-px bg-current self-center" />
                <Sparkles size={16} />
                <div className="w-12 h-px bg-current self-center" />
              </div>
              <h2 className="text-luxury text-4xl md:text-6xl italic font-serif leading-tight">
                "Love us with <br/> your whole heart."
              </h2>
              <p className="text-wine/40 tracking-[0.6em] uppercase text-[9px] font-bold">The Celebration of Love</p>
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
              <div className="flex justify-center gap-4 text-gold/40">
                <div className="w-12 h-px bg-current self-center" />
                <Music size={16} />
                <div className="w-12 h-px bg-current self-center" />
              </div>
              <h2 className="text-luxury text-4xl md:text-6xl italic font-serif leading-tight">
                "Our story begins <br/> with you."
              </h2>
              <p className="text-wine/40 tracking-[0.6em] uppercase text-[9px] font-bold">Forever Starts Now</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 5, ease: "linear" }}
        className="absolute bottom-0 left-0 h-1 bg-rose/40"
      />
    </motion.div>
  );
};


const FallingPetals = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const newElements = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 20,
      duration: 10 + Math.random() * 15,
      scale: 0.05 + Math.random() * 0.15,
      rotation: Math.random() * 360,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ y: -100, x: 0, opacity: 0, rotate: el.rotation }}
          animate={{ 
            y: ['0vh', '110vh'],
            x: [0, (Math.random() - 0.5) * 400],
            opacity: [0, 0.8, 0],
            rotate: el.rotation + (Math.random() > 0.5 ? 1080 : -1080)
          }}
          transition={{ 
            duration: el.duration, 
            repeat: Infinity, 
            delay: el.delay,
            ease: "linear"
          }}
          className="absolute mix-blend-multiply"
          style={{ left: el.left }}
        >
          <img 
            src={petalImg} 
            alt="petal" 
            style={{ width: '100px', height: '100px', transform: `scale(${el.scale})` }}
            className="opacity-70"
          />
        </motion.div>
      ))}
    </div>
  );
};

const SakuraDecor = () => {
  return (
    <>
      {/* Top Left Branch */}
      <div className="fixed -top-6 -left-6 md:-top-12 md:-left-12 w-[250px] h-[250px] md:w-[450px] md:h-[450px] z-[5] pointer-events-none mix-blend-multiply opacity-90">
        <motion.img 
          initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src={branchTL} 
          alt="Sakura Branch Top Left"
          className="w-full h-full object-contain origin-top-left"
        />
      </div>
      
      {/* Bottom Right Branch */}
      <div className="fixed -bottom-12 -right-12 md:-bottom-24 md:-right-24 w-[300px] h-[300px] md:w-[550px] md:h-[550px] z-[5] pointer-events-none mix-blend-multiply opacity-90">
        <motion.img 
          initial={{ rotate: 5, scale: 0.9, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
          src={branchBR} 
          alt="Sakura Branch Bottom Right"
          className="w-full h-full object-contain origin-bottom-right"
        />
      </div>
    </>
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
          <path d="M50 5 L35 25 L65 25 Z M32 26 L68 26 L72 45 L28 45 Z M25 46 L75 46 L80 70 L20 70 Z M5 106 L95 106 L100 150 L0 150 Z"/>
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

const ParallaxSection = ({ children, offset = 100 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
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

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence>
      {isLoading ? (
        <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div 
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-[400vh] bg-white selection:bg-rose/30 scroll-smooth"
        >
      <SakuraDecor />
      <FallingPetals />

      {/* Background Gradient Layer */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#FFFAF0_0%,#FFFFFF_100%)] z-[-2]" />

      {/* Removed old motifs and lamps */}

      {/* Header Badges */}
      <div className="fixed top-12 left-12 z-[70] hidden md:flex flex-col items-center">
        <motion.div 
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-24 h-24 border border-white/60 rounded-full flex items-center justify-center backdrop-blur-xl bg-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-wine text-center leading-tight font-bold">
            Om Shanti<br/>Nichayathartham
          </div>
        </motion.div>
      </div>

      {/* Audio Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[70] p-3 md:p-4 border border-white/60 bg-white/40 backdrop-blur-xl rounded-full text-wine hover:bg-rose hover:text-white hover:border-transparent transition-colors group shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </motion.button>

      {/* Main Content */}
      <main className="relative flex flex-col items-center">
        

        {/* Hero Section */}
        <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
          <ParallaxSection offset={-100}>
            <div className="text-center z-10 px-8 md:px-24 py-16 border border-white/60 bg-white/40 backdrop-blur-xl rounded-[3rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="mb-12 text-wine/40 tracking-[1em] text-xs uppercase font-display"
              >
                With the divine blessings of the Almighty
              </motion.div>
              
              <div className="flex flex-col items-center gap-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-luxury text-5xl md:text-[7rem] leading-tight"
                >
                  Ramasubramanian
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 1.5 }}
                  className="text-gold italic text-3xl md:text-5xl font-serif py-2 md:py-4"
                >
                  &
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-luxury text-5xl md:text-[7rem] leading-tight"
                >
                  Mallika Priyadharshini
                </motion.h1>
              </div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 1.2, duration: 2 }}
                className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto my-16"
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="space-y-4"
              >
                <div className="text-3xl md:text-5xl tracking-[0.4em] uppercase font-light text-wine/80">MAY 13, 2026</div>
                <div className="text-lg tracking-[0.2em] uppercase text-wine/40 font-sans">THOOTHUKUDI • 7:00 PM</div>
              </motion.div>
            </div>
          </ParallaxSection>
        </section>

        {/* Invitation Message */}
        <section className="py-32 md:py-64 px-6 max-w-5xl text-center relative z-20 mx-auto">
          <ScrollReveal>
            <div className="p-8 md:p-24 border border-white/60 bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
              <div className="mb-16">
                 <div className="w-16 h-px bg-gold/30 mx-auto mb-8" />
                 <h2 className="text-display text-4xl text-wine mb-12 tracking-[0.3em] uppercase">Artistic Union</h2>
              </div>
              <p className="text-serif text-2xl md:text-4xl leading-relaxed text-wine/80 font-light italic px-8">
                "With the blessings of the Almighty, the engagement ceremony of our beloved children has been arranged."
                <br/><br/>
                We cordially invite you and your family to grace the occasion and bless the couple as they begin their journey together.
              </p>
              <div className="w-16 h-px bg-gold/30 mx-auto mt-16" />
            </div>
          </ScrollReveal>
        </section>

        <SakuraSeparator />

        {/* Ancestry Section */}
        <section className="py-16 md:py-32 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-20">
          <ScrollReveal>
            <div className="p-8 md:p-12 border border-white/60 bg-white/40 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
              <h3 className="text-luxury text-2xl md:text-3xl mb-8">The Groom's Side</h3>
              <p className="text-wine text-xl font-bold mb-4">K.S.K. Ramasubramanian, B.Com</p>
              <div className="space-y-6 text-wine/70 text-sm leading-relaxed">
                <div>
                  <p className="uppercase tracking-widest text-[10px] opacity-60 mb-2">Parents</p>
                  <p className="text-base">Mr. K.S. Kalimuthu Achari & Mrs. Murugalakshmi</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="uppercase tracking-widest text-[10px] opacity-60 mb-2">Paternal Grandparents</p>
                    <p>Late Mr. K. Subbaiah Achari & Mrs. Meenakshi Ammal (Sankarankovil)</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-widest text-[10px] opacity-60 mb-2">Maternal Grandparents</p>
                    <p>Late Mr. P. Ramasamy Achari & Mrs. Sellammal (Kovilpatti)</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
             <div className="p-8 md:p-12 border border-white/60 bg-white/40 backdrop-blur-xl rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
              <h3 className="text-luxury text-2xl md:text-3xl mb-8">The Bride's Side</h3>
              <p className="text-wine text-xl font-bold mb-4">S. Mallika Priyadharshini, M.Sc</p>
              <div className="space-y-6 text-wine/70 text-sm leading-relaxed">
                <div>
                  <p className="uppercase tracking-widest text-[10px] opacity-60 mb-2">Parents</p>
                  <p className="text-base">Mr. S. Chermakumar & Mrs. S. Padmavathi</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="uppercase tracking-widest text-[10px] opacity-60 mb-2">Paternal Grandparents</p>
                    <p>Mr. A. Paul Achari & Mrs. Mallika Ammal (Udangudi)</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-widest text-[10px] opacity-60 mb-2">Maternal Grandparents</p>
                    <p>Mr. M. Shanmugavel Achari & Mrs. Vijayalakshmi Ammal (Coimbatore)</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Event Details Grid */}
        <section className="py-16 md:py-32 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-20">
          <ScrollReveal>
             <div className="h-full border border-white/60 p-8 md:p-12 bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-tr-[5rem] md:rounded-bl-[5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] group hover:bg-white/50 transition-all duration-700">
               <Calendar className="text-wine mb-8 w-10 h-10 opacity-30 group-hover:opacity-100 transition-opacity" />
               <h3 className="text-display text-[10px] tracking-[0.5em] text-wine/40 mb-8 uppercase">Ceremony Date</h3>
               <p className="text-serif text-5xl mb-4 text-wine font-light uppercase">May 13</p>
               <p className="text-serif text-lg text-wine/60 italic font-serif">Wednesday, 2026</p>
               <div className="mt-8 pt-8 border-t border-gold/10 text-[10px] uppercase tracking-widest text-wine/40 leading-loose">
                 Tamil Year: Parabhava<br/>Month: Chithirai<br/>Star: Uthirattathi
               </div>
             </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="h-full border border-white/60 p-8 md:p-12 bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-tl-[5rem] md:rounded-br-[5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] group hover:bg-white/50 transition-all duration-700">
              <Clock className="text-wine mb-8 w-10 h-10 opacity-30 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-display text-[10px] tracking-[0.5em] text-wine/40 mb-8 uppercase">Auspicious Time</h3>
              <p className="text-serif text-5xl mb-4 text-wine font-light uppercase">7:00 PM</p>
              <p className="text-serif text-lg text-wine/60 italic font-serif">Vrischika Lagnam</p>
              <div className="mt-8 pt-8 border-t border-gold/10 text-[10px] uppercase tracking-widest text-wine/40 leading-loose">
                Thithi: Dwadashi<br/>Yogam: Siddha Yogam<br/>Between 7:00 - 8:15 PM
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="h-full border border-white/60 p-8 md:p-12 bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-tr-[5rem] md:rounded-bl-[5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] group hover:bg-white/50 transition-all duration-700">
              <MapPin className="text-wine mb-8 w-10 h-10 opacity-30 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-display text-[10px] tracking-[0.5em] text-wine/40 mb-8 uppercase">The Venue</h3>
              <p className="text-serif text-4xl mb-4 text-wine font-light uppercase">Bhaskaran Mahal</p>
              <p className="text-serif text-lg text-wine/60 italic font-serif">V.E. Road, Thoothukudi</p>
              <div className="mt-8 pt-8 border-t border-gold/10">
                 <a href="https://maps.app.goo.gl/tuticorin" target="_blank" className="text-xs text-rose uppercase tracking-widest hover:underline">Get Directions</a>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Hosts Section */}
        <section className="w-full relative py-16 md:py-32 px-6 md:px-12 bg-white/40 backdrop-blur-xl border-y border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] max-w-7xl mx-auto rounded-[2rem] md:rounded-3xl">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-luxury text-3xl md:text-4xl mb-4">Our Loving Family</h2>
            <div className="w-24 h-px bg-gold/30 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 px-2 md:px-12">
            <div>
              <h4 className="text-wine font-bold uppercase tracking-[0.3em] text-xs mb-8">Groom's Representatives</h4>
              <ul className="space-y-4 text-wine/70 font-serif italic text-lg opacity-80">
                <li>K.S. Velsamy & Kuzhalvaai Mozhi</li>
                <li>K.S. Kalimuthu & Murugalakshmi</li>
                <li>K.S. Gomathinayagam & Ramalakshmi</li>
                <li>K.S. Marimuthu & Muthumari</li>
                <li>K.S. Manikandan & Sankaraselvi</li>
              </ul>
            </div>
            <div>
              <h4 className="text-wine font-bold uppercase tracking-[0.3em] text-xs mb-8">Bride's Representatives</h4>
              <ul className="space-y-4 text-wine/70 font-serif italic text-lg opacity-80">
                <li>S. Chermakumar & Padmavathi</li>
                <li>S. Senthil Arumugam & Vadivu Kala</li>
                <li>S. Balakrishnan, B.E. (Chennai)</li>
                <li>S. Sakthi Balakrishnan, B.Sc.</li>
                <li>S. Mallika Durga, B.E.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Business Partners Section */}
        <section className="py-16 md:py-24 w-full max-w-5xl mx-auto px-6 text-center relative z-20">
          <ScrollReveal>
            <div className="p-8 md:p-12 border border-white/60 bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
              <h4 className="text-[10px] uppercase tracking-[0.5em] text-wine/30 mb-8">Special Thanks to</h4>
              <div className="flex flex-wrap justify-center gap-12 text-wine/60 font-serif italic text-xl">
                <span>Meena Jewellers</span>
                <span className="text-gold/30">•</span>
                <span>Sri Mallika Jewellers</span>
                <span className="text-gold/30">•</span>
                <span>APK Groups</span>
                <span className="text-gold/30">•</span>
                <span>Mahes Jewellers</span>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Motif Section */}
        <section className="w-full relative py-24 md:py-48 px-6">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
             <ScrollReveal>
                <div className="relative p-8 md:p-16 border border-white/60 bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5">
                    <img src={branchTL} alt="decor" className="w-32 h-32 md:w-64 md:h-64 mix-blend-multiply" />
                  </div>
                  <h2 className="text-luxury text-4xl md:text-6xl mb-8 md:mb-12">Sacred <br/> Beginnings</h2>
                  <p className="text-serif text-xl leading-relaxed text-wine/70 italic">
                    As we exchange our vows in the coastal breeze of Thoothukudi, 
                    we invite you to witness the sparkle of our new beginning. 
                    Enriched by tradition and guided by love, this ceremony marks the first step of our eternal journey.
                  </p>
                  <motion.div 
                    className="mt-12 flex items-center gap-4 text-wine font-display tracking-widest text-xs uppercase"
                  >
                    Blessings of the Divine <Heart size={16} className="text-rose" />
                  </motion.div>
                </div>
             </ScrollReveal>
             
             <div className="grid grid-cols-2 gap-4 md:gap-8 h-full">
               <ParallaxSection offset={-30}>
                 <div className="aspect-[3/4] rounded-t-full overflow-hidden border-4 border-white shadow-2xl group">
                    <img 
                      src="https://images.unsplash.com/photo-1595914108199-3fbc06718919?q=80&w=2070&auto=format&fit=crop" 
                      alt="Indian Wedding Jewelry" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                 </div>
               </ParallaxSection>
               <ParallaxSection offset={30}>
                 <div className="aspect-[3/4] rounded-t-full overflow-hidden border-2 md:border-4 border-white shadow-xl md:shadow-2xl mt-8 md:mt-12 group">
                    <img 
                      src="https://images.unsplash.com/photo-1510137600163-2729bc6959a6?q=80&w=2070&auto=format&fit=crop" 
                      alt="Temple Pillar" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                 </div>
               </ParallaxSection>
             </div>
           </div>
        </section>

        {/* RSVP Section */}
        <section className="py-32 md:py-64 w-full flex justify-center px-6 relative z-20">
          <ScrollReveal>
            <div className="max-w-4xl w-full border border-white/60 p-8 md:p-32 bg-white/50 backdrop-blur-2xl relative rounded-[2rem] md:rounded-[3rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
              <div className="absolute top-6 md:top-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-wine/30">
                <div className="w-8 md:w-12 h-px bg-current" />
                <Sparkles size={14} />
                <div className="w-8 md:w-12 h-px bg-current" />
              </div>
              
              <div className="text-center mt-4 md:mt-0 mb-12 md:mb-20">
                <h2 className="text-display text-3xl md:text-5xl text-wine mb-4 md:mb-8 tracking-[0.2em] font-light uppercase">Contact Us</h2>
                <div className="space-y-2 text-wine/60 font-bold tracking-widest">
                  <p>94431 24837</p>
                  <p>94430 24226</p>
                  <p>96293 68626</p>
                </div>
              </div>

              <form className="space-y-16 max-w-xl mx-auto">
                <input 
                  type="text" 
                  placeholder="FULL NAME" 
                  className="w-full bg-transparent border-b border-wine/10 py-6 text-xl text-center focus:outline-none focus:border-wine/40 transition-colors text-wine placeholder:text-wine/20 uppercase tracking-[0.3em] font-light"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <select className="w-full bg-transparent border-b border-wine/10 py-6 text-base text-center appearance-none cursor-pointer text-wine/80 uppercase tracking-[0.2em] font-light">
                    <option>1 GUEST</option>
                    <option>2 GUESTS</option>
                    <option>FAMILY</option>
                  </select>
                  <select className="w-full bg-transparent border-b border-wine/10 py-6 text-base text-center appearance-none cursor-pointer text-wine/80 uppercase tracking-[0.2em] font-light">
                    <option>ATTENDING</option>
                    <option>REGRETFULLY ABSENT</option>
                  </select>
                </div>

                <motion.button 
                  whileHover={{ backgroundColor: "#800020", color: "white" }}
                  className="w-full border-2 border-wine/20 text-wine py-8 uppercase tracking-[0.6em] transition-all duration-700 text-xs font-bold rounded-full"
                >
                  Send Blessing
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </section>

        {/* Footer */}
        <footer className="py-24 md:py-48 w-full max-w-5xl mx-auto px-6 block text-center relative z-20">
          <ScrollReveal>
            <div className="p-8 md:p-24 border border-white/60 bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]">
              <div className="text-luxury text-2xl md:text-3xl mb-4 italic opacity-80">Ramasubramanian <br className="block md:hidden"/>& Mallika Priyadharshini</div>
              <p className="text-[8px] md:text-[10px] tracking-[0.8em] md:tracking-[1.2em] text-wine/40 uppercase mb-8 ml-[0.8em] md:ml-[1.2em]">Sacred Union • Eternal Joy</p>
              <div className="flex justify-center gap-8 md:gap-12 text-rose/40">
                <Music size={20} />
                <Heart size={20} fill="currentColor" />
                <Sparkles size={20} />
              </div>
              <div className="mt-12 md:mt-24 flex justify-center gap-16 md:gap-32 opacity-10">
                  <img src={petalImg} className="w-8 h-8 md:w-12 md:h-12 mix-blend-multiply" />
                  <img src={petalImg} className="w-8 h-8 md:w-12 md:h-12 mix-blend-multiply -scale-x-100" />
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
      )}
    </AnimatePresence>
  );
}

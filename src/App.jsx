import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { 
  ArrowRight, ExternalLink, Menu, X, ChevronLeft, Plus, RotateCcw, 
  CircleCheck, Zap, Users, Target, Layers, Calendar, Activity, 
  Building, Camera, GraduationCap, Loader2, Sun, Moon, Instagram, 
  Youtube, Twitter, ChevronRight, Dna, Scale, Globe, DraftingCompass, 
  Torus, BookOpen, Info, Newspaper, ShoppingBag, Move, ShieldAlert,
  ArrowUpCircle, HardHat, FileText, Library, FolderKanban
} from 'lucide-react';

// Static Configuration
const GIF_POOL = [
  "https://assets.skool.com/f/0c9cb7a4934f4cb49036984b608de8ff/6b32f8106414469b8c5a2912216ab78df1df0c5669fb463fbd4018a2d95142a2.gif", 
  "https://assets.skool.com/f/0c9cb7a4934f4cb49036984b608de8ff/7e442be4b6c24198a081b90338bc2f839dec9e3bd2354297a58e085da53ebacf.gif", 
  "https://assets.skool.com/f/0c9cb7a4934f4cb49036984b608de8ff/5f256ddb9a5f4b9cb26db788a3bf0d30dd408047109545d8844ae7bc46cbefca.gif", 
];

const CONFIG = {
  brand: "apex movement",
  tagline: "movement logic.",
  subline: "efficiency is the highest form of truth.",
  cta: "JOIN THE COMMUNITY",
  skoolLink: "https://www.skool.com/apexmovement/about",
  merchLink: "https://shop.apexmovement.com/",
  sheetId: "14MMo3dYdQC96YMTsL0MhZEhuCOCl4c8JVw0C6TuH_fs", 
  socials: [
    { key: "instagram", url: "https://instagram.com/apexmovement", icon: <Instagram size={18}/> },
    { key: "youtube", url: "https://youtube.com/apexmovement", icon: <Youtube size={18}/> },
    { key: "x", url: "https://x.com/apexmvmnt", icon: <Twitter size={18}/> }
  ]
};

const BIOS = [
  {
    name: "Apex Movement",
    role: "The Collective Standard",
    story: "Founded in 2006, Apex is a movement logic collective dedicated to extracting the universal laws of physical performance. We don't teach style; we teach the architecture of human output.",
    focus: ["Biomechanics", "Kinetic Chains", "Physics First"],
    metrics: "18+ Years",
    gif: GIF_POOL[2]
  },
  {
    name: "Ryan Ford",
    role: "The Movement Architect",
    story: "Ryan founded the first dedicated parkour gym in the Western Hemisphere in 2006. Author of 'Parkour Strength Training', he has spent two decades decoding the physiological requirements of explosive movement.",
    focus: ["Anatomy", "Plyometric Load", "Pedagogy"],
    metrics: "Founder",
    gif: GIF_POOL[0]
  }
];

const PRODUCTS = [
  { 
    id: "101", 
    title: "parkour 101", 
    blurb: "The Comprehensive Architecture. A structured deconstruction of 150+ foundational mechanics. Eliminate the trial-and-error gap and master the primary kinetic chains of parkour.", 
    cta: "master the basics", 
    tag: "foundations",
    gif: GIF_POOL[0] 
  },
  { 
    id: "strength", 
    title: "parkour strength", 
    blurb: "Structural Prep & Resilience. Specific physical preparation (SPP) for the parkour athlete. Build the 'anatomical armor' required to sustain high-impact loading and bone density adaptation.", 
    cta: "build armor", 
    tag: "prep",
    gif: GIF_POOL[1] 
  },
  { 
    id: "power", 
    title: "power program", 
    blurb: "Verticality & Force Production. The Power^Up Protocol. Optimize high-threshold motor unit recruitment to maximize explosive vertical and horizontal output for elite performance.", 
    cta: "maximize force", 
    tag: "power",
    gif: GIF_POOL[2] 
  },
  { 
    id: "climb", 
    title: "climb-up blueprint", 
    blurb: "The Mechanical Solution. A deep-dive blueprint for mastering the wall-to-ledge transition. Optimize leverage, pulling mechanics, and transit speed to solve the wall.", 
    cta: "solve the wall", 
    tag: "climbing",
    gif: GIF_POOL[0] 
  },
  { 
    id: "remote", 
    title: "remote training", 
    blurb: "Biomechanical Auditing. Direct remote oversight. One-on-one video analysis of your movement geometry with individualized programming parameters and custom coaching protocols.", 
    cta: "get audited", 
    tag: "individualized",
    gif: GIF_POOL[1] 
  },
  { 
    id: "cert", 
    title: "coaching standards", 
    blurb: "The APCC Standard. APEX Parkour Coaching Certification. Transition from intuitive movement to formal pedagogy. Master the science of instructional logic and joined a global network.", 
    cta: "get certified", 
    tag: "professional",
    gif: GIF_POOL[2] 
  }
];

const BLOG_POSTS = [
  { id: "post-1", date: "MAR 2024", title: "The Physics of Impact.", preview: "Why training exclusively on mats creates a 'sensory gap' that leads to injury. Understanding environmental force.", gif: GIF_POOL[0] },
  { id: "post-2", date: "FEB 2024", title: "Quantifying Power.", preview: "Moving away from subjective aesthetics toward objective metrics in parkour competition and training.", gif: GIF_POOL[2] },
  { id: "post-3", date: "JAN 2024", title: "Archival Intelligence.", preview: "Why we moved our 20-year library to Skool to foster a decentralized, logic-driven community.", gif: GIF_POOL[1] }
];

// Memoized UI Components
const UI = {
  Button: memo(({ children, primary = true, className = "", onClick, theme = 'light', type = "button" }) => {
    const base = "px-6 md:px-10 py-4 md:py-5 font-black transition-all duration-300 border-2 active:scale-95 text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em] flex items-center justify-center gap-3 cursor-pointer rounded-none text-center whitespace-normal break-words";
    let colors = "";
    if (theme === 'dark') {
      colors = primary 
        ? "bg-white text-black border-white hover:bg-black hover:text-white" 
        : "bg-transparent text-white border-white/40 hover:border-white hover:bg-white/10";
    } else {
      colors = primary 
        ? "bg-black text-white border-black hover:bg-white hover:text-black" 
        : "bg-transparent text-black border-black/30 hover:border-black hover:bg-black/5";
    }
    return (
      <button type={type} onClick={onClick} className={`${base} ${colors} ${className}`}>
        {children}
      </button>
    );
  }),
  Heading: memo(({ children, className = "" }) => (
    <h1 className={`text-5xl sm:text-7xl md:text-[8rem] lg:text-[9rem] font-black tracking-tighter lowercase leading-[0.85] md:leading-[0.8] break-words ${className}`}>
      {children}
    </h1>
  )),
  Badge: memo(({ children, className = "", theme = 'light' }) => (
    <div className={`px-2.5 py-1 border border-current text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-2 opacity-70 ${className}`}>
      {children}
    </div>
  )),
  Image: memo(({ src, alt, className = "", coloredOnHover = false, forceColor = false, containerClass = "" }) => {
    const [loaded, setLoaded] = useState(false);
    return (
      <div className={`relative w-full h-full bg-neutral-100 dark:bg-neutral-900/50 flex items-center justify-center overflow-hidden ${containerClass}`}>
        <img 
          src={src} 
          alt={alt} 
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'} 
          ${forceColor ? 'grayscale-0' : (coloredOnHover ? 'grayscale group-hover:grayscale-0 group-hover:scale-105' : 'grayscale-0')} ${className}`}
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 mix-blend-overlay"></div>
        {!loaded && (
           <div className="absolute inset-0 flex items-center justify-center">
             <Loader2 className="w-8 h-8 animate-spin opacity-20" />
           </div>
        )}
      </div>
    );
  })
};

const Modal = memo(({ isOpen, onClose, children, theme = 'light' }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 md:p-8 animate-in fade-in duration-400">
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/98' : 'bg-white/98'} backdrop-blur-xl cursor-crosshair`} onClick={onClose}></div>
      <div className={`relative w-full max-w-6xl ${theme === 'dark' ? 'bg-black border-white/20 shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] md:shadow-[24px_24px_0px_0px_rgba(255,255,255,1)] text-white' : 'bg-white border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] text-black'} border-2 md:border-4 p-5 sm:p-8 md:p-12 overflow-y-auto max-h-[92vh] transition-all duration-500 ease-out scrollbar-hide`}>
        <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 hover:rotate-180 transition-transform duration-500 z-50 cursor-pointer p-2 border-2 border-current rounded-full group bg-inherit">
          <X size={20} className="group-hover:scale-110 transition-transform md:w-6 md:h-6" />
        </button>
        <div className="max-w-full overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
});

export default function App() {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);
  const [isArcExpanded, setIsArcExpanded] = useState(false);
  const [activeManual, setActiveManual] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeBlogPost, setActiveBlogPost] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); 

  const [movements, setMovements] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoadingMovements, setIsLoadingMovements] = useState(true);
  const [libraryDisplayCount, setLibraryDisplayCount] = useState(3);
  const [hasExpandedLibrary, setHasExpandedLibrary] = useState(false);

  const toggleTheme = useCallback(() => setTheme(prev => prev === 'light' ? 'dark' : 'light'), []);

  const handleNav = useCallback((view, anchor = null) => {
    setIsMenuOpen(false);
    if (anchor) {
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          const element = document.getElementById(anchor.replace('#', ''));
          if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 150);
      } else {
        const element = document.getElementById(anchor.replace('#', ''));
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    } else {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40 && !scrolled) setScrolled(true);
      if (window.scrollY <= 40 && scrolled) setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const fetchSheetData = async (sheetName) => {
      try {
        const url = `https://docs.google.com/spreadsheets/d/${CONFIG.sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${sheetName}`);
        const text = await response.text();
        return JSON.parse(text.substring(47, text.length - 2));
      } catch (e) { return null; }
    };

    const loadData = async () => {
      const jsonData = await fetchSheetData('movements');
      if (jsonData) {
        const rows = jsonData.table.rows;
        let parsed = rows.map((row) => ({
          title: row.c[1]?.v || "Untitled Movement",
          law: row.c[0]?.v || "Efficiency is Truth",
          gif: row.c[2]?.v || GIF_POOL[0],
          intro: row.c[3]?.v || "No intro provided.",
          why: row.c[4]?.v || "Efficiency optimization.",
          how: (row.c[5]?.v || "").toString().split(',').map(item => item.trim()).filter(Boolean),
          level: row.c[13]?.v || "Fundamental",
        }));
        setMovements(parsed.sort(() => Math.random() - 0.5));
      } else {
        setMovements([{ title: "the landing", law: "Gravity is constant.", gif: GIF_POOL[0], intro: "Impact absorption basics.", how: ["Balls of feet", "Quiet"], level: "level 1" }]);
      }
      setIsLoadingMovements(false);

      const jsonProj = await fetchSheetData('projects');
      if (jsonProj) {
        const rows = jsonProj.table.rows;
        let parsedProjects = rows.map((row) => ({
          year: row.c[0]?.v?.toString() || "20XX",
          title: row.c[1]?.v || "Untitled Project",
          description: row.c[2]?.v || "No description provided.",
          detail: row.c[3]?.v || row.c[2]?.v || "No details available.",
          link: row.c[4]?.v || null,
          gif: row.c[5]?.v || GIF_POOL[0]
        }));
        setProjects(parsedProjects);
      } else {
        setProjects([
            { year: "2006", title: "Apex Denver", description: "Founded the original standard.", detail: "The world's first dedicated parkour gym.", gif: GIF_POOL[0], link: null },
            { year: "2025", title: "Skool App", description: "Apex Skool of Movement.", detail: "Centralizing our 20-year archive.", gif: GIF_POOL[2], link: CONFIG.skoolLink },
        ]);
      }
    };
    loadData();
  }, []);

  const [pathStep, setPathStep] = useState(0); 
  const [pathSelection, setPathSelection] = useState({ style: null, feedback: null });
  const [pathHistory, setPathHistory] = useState([0]);

  const openSkool = useCallback(() => window.open(CONFIG.skoolLink, '_blank'), []);
  const openMerch = useCallback(() => window.open(CONFIG.merchLink, '_blank'), []);

  const navLinks = useMemo(() => [
    { label: 'library', onClick: () => handleNav('home', '#library'), href: '#library' },
    { label: 'projects', onClick: () => handleNav('home', '#arc'), href: '#arc' },
    { label: 'learn', onClick: () => handleNav('learn'), active: currentView === 'learn' },
    { label: 'blog', onClick: () => handleNav('blog'), active: currentView === 'blog' },
    { label: 'about', onClick: () => handleNav('about'), active: currentView === 'about' },
    { label: 'merch', onClick: openMerch, href: CONFIG.merchLink, external: true },
    { label: 'hire apex', onClick: () => handleNav('hire'), active: currentView === 'hire' },
  ], [handleNav, currentView, openMerch]);

  const handleLibraryExpansion = useCallback(() => {
    if (!hasExpandedLibrary) {
      setHasExpandedLibrary(true);
      setLibraryDisplayCount(9); 
    } else {
      openSkool(); 
    }
  }, [hasExpandedLibrary, openSkool]);

  const getRecommendation = useCallback(() => {
    const { style, feedback } = pathSelection;
    if (feedback === 'personalized') return PRODUCTS.find(p => p.id === 'remote');
    if (style === 'armor') return PRODUCTS.find(p => p.id === 'strength');
    if (style === 'skills') return PRODUCTS.find(p => p.id === '101');
    if (style === 'deep-dive') return PRODUCTS.find(p => p.id === 'power');
    if (style === 'coach') return PRODUCTS.find(p => p.id === 'cert');
    return PRODUCTS[0];
  }, [pathSelection]);

  const updatePath = useCallback((nextStep, selections = {}) => {
    setPathStep(nextStep);
    setPathHistory(prev => [...prev, nextStep]);
    if (Object.keys(selections).length > 0) {
      setPathSelection(prev => ({ ...prev, ...selections }));
    }
  }, []);

  const undoPath = useCallback(() => {
    if (pathHistory.length > 1) {
      const newHistory = [...pathHistory];
      newHistory.pop();
      setPathStep(newHistory[newHistory.length - 1]);
      setPathHistory(newHistory);
    }
  }, [pathHistory]);

  const resetPathfinder = useCallback(() => {
    setPathStep(0);
    setPathSelection({ style: null, feedback: null });
    setPathHistory([0]);
  }, []);

  const renderHome = () => (
    <>
      <section className={`relative group min-h-[85vh] md:h-screen w-full flex items-center justify-center overflow-hidden border-b-2 transition-colors duration-500 ${theme === 'dark' ? 'border-neutral-900' : 'border-neutral-100'}`}>
        <div className="absolute inset-0 z-0">
          <UI.Image 
            src={movements.length > 0 ? movements[0].gif : GIF_POOL[0]} 
            alt="Apex Hero" 
            className="w-full h-full object-cover"
            coloredOnHover={true}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-5xl">
            <UI.Heading className="text-white mb-6 md:mb-8 animate-in slide-in-from-bottom-10 duration-1200 ease-out">
              {CONFIG.tagline}
            </UI.Heading>
            <p className="text-xl sm:text-2xl md:text-4xl font-medium tracking-tight lowercase text-white/80 mb-10 md:mb-14 max-w-2xl animate-in fade-in duration-1000 delay-500 leading-tight">
              {CONFIG.subline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-800">
              <UI.Button 
                theme="dark"
                className="w-full sm:w-auto shadow-2xl" 
                onClick={() => handleNav('home', '#pathfinder')}
              >
                Perform Audit <ChevronRight size={16} />
              </UI.Button>
              <UI.Button 
                theme="dark"
                primary={false}
                className="w-full sm:w-auto backdrop-blur-md" 
                onClick={() => handleNav('learn')}
              >
                Explore Methods
              </UI.Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={`py-24 md:py-40 px-6 border-b-2 ${theme === 'dark' ? 'border-neutral-900 bg-neutral-950' : 'border-neutral-100 bg-neutral-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="space-y-6 md:space-y-10">
               <UI.Badge theme={theme}>Movement Philosophy</UI.Badge>
               <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter lowercase leading-[0.85] break-words">We decode the logic of human performance.</h2>
               <div className="space-y-6 md:space-y-8 max-w-xl">
                 <p className="text-lg md:text-2xl opacity-60 lowercase leading-relaxed font-medium">
                   Since 2006, Apex has operated as a technical collective. We prioritize the objective laws of physics over the subjective aesthetics of style. 
                 </p>
                 <p className="text-base md:text-xl opacity-40 lowercase leading-relaxed font-medium">
                   Our curriculum is a synthesis of two decades of field testing and anatomical research, designed to build resilient, explosive, and efficient movers.
                 </p>
               </div>
               <UI.Button onClick={() => handleNav('about')} theme={theme} primary={false} className="!px-8 md:!px-12 w-full sm:w-auto">
                 Learn more about our standard <ArrowRight size={16} />
               </UI.Button>
            </div>
            <div className="relative mt-12 lg:mt-0 flex justify-center">
               <div className={`aspect-[4/5] w-full max-w-sm sm:max-w-md border-4 border-current shadow-[12px_12px_0px_0px_rgba(current,0.1)] md:shadow-[24px_24px_0px_0px_rgba(current,0.1)] overflow-hidden cursor-pointer group relative`} onClick={() => handleNav('about')}>
                 <UI.Image src={GIF_POOL[2]} alt="About Apex" coloredOnHover={true} forceColor={false} />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white text-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500">
                        <Plus size={32} />
                    </div>
                 </div>
               </div>
               <div className="absolute -bottom-4 -right-4 md:-bottom-10 md:-right-10 p-5 md:p-10 border-4 border-current bg-transparent backdrop-blur-md hidden sm:block">
                  <div className="text-3xl md:text-5xl font-black leading-none">18+</div>
                  <div className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase opacity-60">Years of R&D</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section id="library" className="py-24 md:py-40 px-6 max-w-7xl mx-auto overflow-hidden scroll-mt-24">
        <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
          <div className="space-y-4 md:space-y-6">
            <UI.Badge theme={theme}>Kinetic Database</UI.Badge>
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter lowercase leading-none">library.</h2>
            <p className="text-base md:text-xl opacity-50 lowercase italic font-medium leading-tight max-w-md">
              A repository of human kinetic potential. Synchronized mechanical samples.
            </p>
          </div>
          {isLoadingMovements && (
            <div className="flex items-center gap-3 opacity-30 text-[10px] font-black uppercase tracking-widest">
              <Loader2 className="animate-spin" size={14} /> Localizing Records...
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
          {movements.slice(0, libraryDisplayCount).map((item, index) => (
            <div 
              key={index} 
              onClick={() => setActiveManual(item)} 
              className={`group border-4 border-current ${theme === 'dark' ? 'bg-neutral-900/50 hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]' : 'bg-white hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'} overflow-hidden transition-all duration-500 ease-out cursor-pointer animate-in fade-in slide-in-from-bottom-12 max-w-sm mx-auto w-full`} 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-neutral-100 dark:bg-neutral-800 relative overflow-hidden border-b-4 border-current aspect-[4/5]">
                <UI.Image src={item.gif} alt={item.title} coloredOnHover={true} />
              </div>
              <div className="p-6 md:p-10">
                <div className="flex justify-between items-start mb-4">
                   <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-30 block group-hover:opacity-100 transition-opacity truncate max-w-[140px] md:max-w-[150px]">
                      {item.intro}
                   </span>
                   <ArrowRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                </div>
                <h4 className="text-2xl md:text-4xl font-black lowercase leading-[0.9] tracking-tighter mb-6 md:mb-8 break-words">{item.title}</h4>
                <div className="pt-5 md:pt-6 border-t-2 border-current/10">
                  <p className="text-xs md:text-sm font-medium opacity-40 leading-snug lowercase italic">"{item.law}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <UI.Button onClick={handleLibraryExpansion} primary={!hasExpandedLibrary} theme={theme} className="w-full md:w-auto min-w-[260px] md:min-w-[340px] !py-6 md:!py-7">
            {hasExpandedLibrary ? (
              <>Full Archive on Skool <ExternalLink size={16} /></>
            ) : (
              <>Extract More Data</>
            )}
          </UI.Button>
        </div>
      </section>

      {/* Pathfinder Section */}
      <section id="pathfinder" className={`py-24 md:py-40 px-6 scroll-mt-24`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
            <UI.Badge theme={theme}>Anatomical Audit</UI.Badge>
            <h2 className="text-4xl sm:text-6xl md:text-[8rem] font-black tracking-tighter lowercase leading-none break-words">find your path.</h2>
          </div>

          <div className={`${theme === 'dark' ? 'bg-black shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] md:shadow-[32px_32px_0px_0px_rgba(255,255,255,1)] border-white/10' : 'bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[32px_32px_0px_0px_rgba(0,0,0,1)] border-black'} border-2 md:border-4 p-5 sm:p-10 md:p-20 min-h-[450px] md:min-h-[680px] flex flex-col relative overflow-hidden transition-all duration-700`}>
            {pathStep > 0 && (
              <div className="absolute top-4 left-4 md:top-8 md:left-8 flex gap-3 md:gap-6 z-10">
                <button onClick={undoPath} disabled={pathHistory.length <= 1} className="w-9 h-9 md:w-12 md:h-12 border-2 border-current flex items-center justify-center hover:bg-current hover:text-white transition-all disabled:opacity-10 cursor-pointer rounded-full group">
                  <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button onClick={resetPathfinder} className="w-9 h-9 md:w-12 md:h-12 border-2 border-current flex items-center justify-center hover:bg-current hover:text-white transition-all cursor-pointer rounded-full group">
                  <RotateCcw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                </button>
              </div>
            )}
            <div className="flex-grow flex flex-col justify-center">
              {pathStep === 0 && (
                <div className="text-center max-w-xl mx-auto py-8 md:py-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 border-4 border-current rounded-full flex items-center justify-center mx-auto mb-8 md:mb-12">
                    <Dna size={32} className="animate-pulse" />
                  </div>
                  <p className="text-lg md:text-2xl font-medium lowercase opacity-60 mb-10 md:mb-14 leading-relaxed">
                    Identify the optimal entry point for your specific physiological state and movement objectives.
                  </p>
                  <UI.Button onClick={() => updatePath(1)} className="w-full !py-6 md:!py-8 !text-xs md:!text-sm" theme={theme}>Assess Movement</UI.Button>
                </div>
              )}
              {pathStep === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-black lowercase tracking-tighter mb-8 md:mb-16 text-center">Identify your state.</h3>
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                    {[
                      { key: 'armor', icon: <Scale size={20} />, label: 'structural prep.', sub: 'Build foundation via connective tissue.' },
                      { key: 'skills', icon: <Activity size={20} />, label: "mechanical mastery.", sub: 'Master kinetic chains and flight logic.' },
                      { key: 'deep-dive', icon: <Target size={20} />, label: "force production.", sub: 'Optimize power output and plyometrics.' },
                      { key: 'coach', icon: <Users size={20} />, label: "pedagogy training.", sub: 'Shift from movement to instruction.' },
                    ].map(opt => (
                      <button 
                        key={opt.key} 
                        onClick={() => updatePath(2, { style: opt.key })} 
                        className={`p-5 md:p-10 border-2 md:border-4 border-current transition-all text-left group cursor-pointer 
                          ${theme === 'dark' 
                            ? 'bg-neutral-900/40 text-white hover:bg-white hover:text-black border-white/20' 
                            : 'bg-white text-black hover:bg-black hover:text-white border-black/20'}`}
                      >
                        <span className="mb-4 md:mb-6 opacity-30 group-hover:opacity-100 block transition-all scale-110 md:scale-150 origin-left">{opt.icon}</span>
                        <h4 className="text-xl md:text-3xl font-black lowercase mb-1 md:mb-4 tracking-tighter">{opt.label}</h4>
                        <p className="text-xs opacity-50 lowercase leading-tight font-medium">{opt.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {pathStep === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 text-center">
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-black lowercase tracking-tighter mb-10 md:mb-16">Select delivery mode.</h3>
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-10 max-w-3xl mx-auto">
                    <button 
                      onClick={() => updatePath(3, { feedback: 'self-paced' })} 
                      className={`p-6 md:p-12 border-2 md:border-4 border-current transition-all text-left group cursor-pointer 
                        ${theme === 'dark' 
                          ? 'bg-neutral-900/40 text-white hover:bg-white hover:text-black border-white/20' 
                          : 'bg-white text-black hover:bg-black hover:text-white border-black/20'}`}
                    >
                      <Layers size={28} className="mb-6 md:mb-10 opacity-30 group-hover:opacity-100" />
                      <h4 className="text-xl md:text-3xl font-black lowercase mb-2 md:mb-4 tracking-tighter">self-guided manual.</h4>
                      <p className="text-[10px] md:text-sm opacity-50 lowercase">Independent study of the movement vault.</p>
                    </button>
                    <button 
                      onClick={() => updatePath(3, { feedback: 'personalized' })} 
                      className={`p-6 md:p-12 border-2 md:border-4 border-current transition-all text-left group cursor-pointer 
                        ${theme === 'dark' 
                          ? 'bg-neutral-900/40 text-white hover:bg-white hover:text-black border-white/20' 
                          : 'bg-white text-black hover:bg-black hover:text-white border-black/20'}`}
                    >
                      <Zap size={28} className="mb-6 md:mb-10 opacity-30 group-hover:opacity-100" />
                      <h4 className="text-xl md:text-3xl font-black lowercase mb-2 md:mb-4 tracking-tighter">biomechanical analysis.</h4>
                      <p className="text-[10px] md:text-sm opacity-50 lowercase">Direct video feedback and anatomical oversight.</p>
                    </button>
                  </div>
                </div>
              )}
              {pathStep === 3 && (
                <div className="animate-in zoom-in-95 duration-700 text-center px-4">
                  <div className="flex justify-center mb-8 md:mb-12">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-current text-white rounded-full flex items-center justify-center animate-bounce shadow-xl">
                      <CircleCheck size={32} />
                    </div>
                  </div>
                  <h2 className="text-3xl sm:text-5xl md:text-8xl font-black tracking-tighter lowercase mb-10 md:mb-16 break-words">{getRecommendation().title}</h2>
                  <UI.Button onClick={openSkool} className="w-full max-w-md mx-auto !py-6 md:!py-8 !text-sm md:!text-base" theme={theme}>Access Protocol</UI.Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="arc" className={`${theme === 'dark' ? 'bg-neutral-950 text-white' : 'bg-black text-white'} py-24 md:py-40 px-6 overflow-hidden scroll-mt-24 transition-colors duration-1000`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
            <div className="space-y-4 md:space-y-6">
              <UI.Badge className="text-white border-white/20">Chronicle</UI.Badge>
              <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter lowercase leading-none mb-4">projects.</h2>
              <p className="text-base md:text-xl opacity-40 lowercase italic font-medium">Universal proof of work across two decades of movement science.</p>
            </div>
          </div>
          
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 transition-all duration-1000 ease-in-out ${isArcExpanded ? 'max-h-[5000px]' : 'max-h-[700px] md:max-h-[460px] overflow-hidden'}`}>
            {projects.map((project, index) => (
              <div key={index} onClick={() => setActiveProject(project)} className="p-6 md:p-12 bg-black hover:bg-white/[0.04] transition-all group cursor-pointer border-r border-b border-white/10 animate-in fade-in duration-700" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="text-[10px] md:text-[11px] font-bold opacity-30 mb-6 md:mb-8 uppercase tracking-[0.3em] md:tracking-[0.4em] flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-white opacity-20 group-hover:bg-white group-hover:opacity-100 transition-all"></div>
                   {project.year}
                </div>
                <h3 className="text-2xl md:text-4xl font-black lowercase mb-4 md:mb-6 tracking-tight leading-[0.9] flex items-center justify-between gap-4 break-words">
                    {project.title}
                    <Plus size={18} className="shrink-0 opacity-20 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
                </h3>
                <p className="text-xs md:text-base opacity-40 leading-relaxed lowercase line-clamp-3 font-medium group-hover:opacity-60 transition-opacity">{project.description}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setIsArcExpanded(!isArcExpanded)} className="mt-12 md:mt-20 mx-auto flex items-center gap-4 md:gap-6 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-30 hover:opacity-100 cursor-pointer p-6 md:p-8 transition-all group">
             <div className="w-8 md:w-10 h-[2px] bg-current group-hover:w-14 md:group-hover:w-20 transition-all duration-700"></div>
             {isArcExpanded ? 'collapse history' : 'view full record'}
             <div className="w-8 md:w-10 h-[2px] bg-current group-hover:w-14 md:group-hover:w-20 transition-all duration-700"></div>
          </button>
        </div>
      </section>
    </>
  );

  const renderLearn = () => (
    <section className="pt-32 md:pt-48 pb-24 px-6 max-w-7xl mx-auto overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-1000">
      <div className="mb-16 md:mb-24 space-y-6 md:space-y-10 text-center md:text-left">
        <button onClick={() => handleNav('home')} className="flex items-center gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] opacity-30 hover:opacity-100 cursor-pointer transition-all group mx-auto md:mx-0 bg-transparent border-none">
          <ChevronLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Return
        </button>
        <UI.Heading>learn.</UI.Heading>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium opacity-60 lowercase mt-6 md:mt-10 max-w-3xl leading-snug break-words mx-auto md:mx-0">
          The technical hierarchy of movement. Physics-based training protocols and the Apex Standard.
        </p>
      </div>

      <div className="space-y-24 md:space-y-32">
        {PRODUCTS.map((product, i) => (
          <div key={i} className="group grid lg:grid-cols-12 gap-8 md:gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="aspect-[4/5] w-full max-w-sm sm:max-w-md border-4 border-current bg-neutral-100 dark:bg-neutral-900 overflow-hidden relative shadow-[12px_12px_0px_0px_rgba(current,1)] group-hover:shadow-[20px_20px_0px_0px_rgba(current,1)] transition-all duration-500">
                <UI.Image src={product.gif} alt={product.title} coloredOnHover={true} />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 md:space-y-10 order-1 lg:order-2">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <UI.Badge theme={theme} className="opacity-40">{product.tag}</UI.Badge>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20">Log ID: 00{i+1}</span>
                </div>
                <h3 className="text-4xl sm:text-6xl md:text-8xl font-black lowercase tracking-tighter leading-[0.85] break-words">
                  {product.title}
                </h3>
              </div>
              
              <div className="space-y-6 md:space-y-8 max-w-2xl">
                <p className="text-lg md:text-3xl opacity-60 lowercase leading-relaxed font-medium">
                  {product.blurb}
                </p>
              </div>

              <UI.Button onClick={openSkool} theme={theme} className="w-full sm:w-auto !py-6 md:!py-8 !px-12 md:!px-16 !text-xs md:!text-sm">
                {product.cta} <ArrowRight size={18} />
              </UI.Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderBlog = () => (
    <section className="pt-32 md:pt-48 pb-24 px-6 max-w-5xl mx-auto overflow-hidden animate-in fade-in duration-1000">
      <div className="mb-16 md:mb-32 space-y-6 md:space-y-10 text-center md:text-left">
        <button onClick={() => handleNav('home')} className="flex items-center gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] opacity-30 hover:opacity-100 cursor-pointer transition-all group mx-auto md:mx-0 bg-transparent border-none">
          <ChevronLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Return
        </button>
        <UI.Heading>blog.</UI.Heading>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium opacity-60 lowercase mt-6 md:mt-10 break-words mx-auto md:mx-0">Updates on the science and culture of movement.</p>
      </div>
      <div className="space-y-24 md:space-y-48">
        {BLOG_POSTS.map((post, i) => (
          <article key={i} className="group cursor-pointer" onClick={() => setActiveBlogPost(post)}>
            <div className="flex items-center gap-4 md:gap-6 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] opacity-30 mb-6 md:mb-12 justify-center md:justify-start">
                <Calendar size={18} /> {post.date} / Log 0{i+1}
            </div>
            <div className="grid md:grid-cols-12 gap-8 md:gap-20 items-center">
                <div className="md:col-span-8 order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter lowercase leading-tight mb-4 md:mb-8 break-words">
                        {post.title}
                    </h2>
                    <p className="text-base sm:text-xl md:text-3xl font-medium opacity-50 lowercase leading-snug mb-8 md:mb-12">
                        {post.preview}
                    </p>
                    <div className="flex items-center gap-4 md:gap-6 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] group-hover:gap-10 transition-all duration-700 justify-center md:justify-start">
                        read full dispatch <ArrowRight size={20} md={24} />
                    </div>
                </div>
                <div className="md:col-span-4 flex justify-center order-1 md:order-2">
                    <div className="border-4 border-current bg-neutral-100 dark:bg-neutral-800 overflow-hidden aspect-[4/5] w-full max-w-[240px] md:max-w-[300px] shadow-[12px_12px_0px_0px_rgba(current,1)]">
                        <UI.Image src={post.gif} alt={post.title} coloredOnHover={true} />
                    </div>
                </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );

  const renderAbout = () => (
    <section className="pt-32 md:pt-48 pb-24 px-6 max-w-7xl mx-auto overflow-hidden animate-in fade-in duration-1000">
      <div className="mb-16 md:mb-32 space-y-6 md:space-y-10 text-center md:text-left">
        <button onClick={() => handleNav('home')} className="flex items-center gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] opacity-30 hover:opacity-100 cursor-pointer transition-all group mx-auto md:mx-0 bg-transparent border-none">
          <ChevronLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Return
        </button>
        <UI.Heading>about.</UI.Heading>
      </div>
      <div className="space-y-32 md:space-y-48 mb-24 md:mb-48">
        {BIOS.map((bio, i) => (
          <div key={i} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className={`flex justify-center ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="w-full max-w-sm sm:max-w-md border-4 border-current bg-neutral-100 dark:bg-neutral-800 aspect-[4/5] overflow-hidden shadow-[16px_16px_0px_0px_rgba(current,1)] md:shadow-[32px_32px_0px_0px_rgba(current,1)]">
                <UI.Image src={bio.gif} alt={bio.name} forceColor={true} />
              </div>
            </div>
            <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
              <UI.Badge theme={theme} className="mb-6 md:mb-8">{bio.role}</UI.Badge>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter lowercase mb-6 md:mb-12 leading-none break-words">{bio.name}</h2>
              <p className="text-lg sm:text-xl md:text-3xl opacity-60 lowercase leading-relaxed mb-10 md:mb-12 max-w-2xl font-medium">{bio.story}</p>
              <div className="grid grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12 border-t-2 border-current/20">
                <div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-30 block mb-2 md:mb-4">Experience</span>
                  <span className="text-xl md:text-2xl font-black lowercase">{bio.metrics}</span>
                </div>
                {bio.focus.map((f, idx) => (
                  <div key={idx}>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-30 block mb-2 md:mb-4">Focus 0{idx+1}</span>
                    <span className="text-xl md:text-2xl font-black lowercase break-words leading-tight">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderHire = () => (
    <section className="pt-32 md:pt-48 pb-24 px-6 max-w-5xl mx-auto overflow-hidden animate-in fade-in duration-1000">
      <div className="mb-16 md:mb-32 space-y-6 md:space-y-10 text-center md:text-left">
        <button onClick={() => handleNav('home')} className="flex items-center gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] opacity-30 hover:opacity-100 cursor-pointer transition-all group mx-auto md:mx-0 bg-transparent border-none">
          <ChevronLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Return
        </button>
        <UI.Heading>hire apex.</UI.Heading>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium opacity-60 lowercase mt-6 md:mt-10 break-words mx-auto md:mx-0">Deployment services for the elite movement sector.</p>
      </div>
      <div className={`grid md:grid-cols-2 gap-px bg-current border-2 md:border-4 border-current mb-24 md:mb-32 transition-all duration-700 ${theme === 'dark' ? 'shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] md:shadow-[40px_40px_0px_0px_rgba(255,255,255,1)]' : 'shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] md:shadow-[40px_40px_0px_0px_rgba(0,0,0,1)]'}`}>
        {[
            { id: 'consulting', title: 'Spatial Architecture', icon: <DraftingCompass size={32} />, detail: 'Biomechanical auditing and facility design.' },
            { id: 'media', title: 'Media Production', icon: <Camera size={32} />, detail: 'Stunt coordination and technical performance oversight.' },
            { id: 'gym', title: 'Facility Logic', icon: <Building size={32} />, detail: 'Structural logistics and specialized equipment procurement.' },
            { id: 'cert', title: 'Group Training', icon: <GraduationCap size={32} />, detail: 'Coaching certification for institutional athletic programs.' },
        ].map((cat, i) => (
            <button key={i} onClick={() => {
                window.location.href = `mailto:apexmovement@gmail.com?subject=Inquiry: ${cat.title}`;
              }} 
              className={`p-8 sm:p-12 md:p-16 text-left transition-all group cursor-pointer 
                ${theme === 'dark' 
                  ? 'bg-black text-white hover:bg-white hover:text-black' 
                  : 'bg-white text-black hover:bg-black hover:text-white'}`}
            >
                <div className="mb-6 md:mb-10 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left duration-500">{cat.icon}</div>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black lowercase tracking-tighter mb-4 md:mb-6 leading-none break-words">{cat.title}</h4>
                <p className="text-base md:text-xl lowercase leading-relaxed opacity-40 font-medium group-hover:opacity-60 transition-opacity">{cat.detail}</p>
            </button>
        ))}
      </div>
    </section>
  );

  return (
    <div className={`min-h-screen font-sans antialiased overflow-x-hidden transition-colors duration-700 
      ${theme === 'dark' 
        ? 'bg-black text-white selection:bg-white selection:text-black' 
        : 'bg-white text-black selection:bg-yellow-200 selection:text-black'}`}>
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1000] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* MOBILE NAV MENU */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-[300] pt-20 pb-12 px-8 flex flex-col transition-all duration-500 animate-in fade-in slide-in-from-right-full ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black shadow-2xl'}`}>
          <div className="flex justify-between items-center mb-12 shrink-0 border-b-2 border-current/10 pb-8">
            <div className="text-2xl font-black tracking-tighter lowercase cursor-pointer flex items-center gap-2" onClick={() => handleNav('home')}>
              {CONFIG.brand}
            </div>
            <button className="cursor-pointer p-2 border-2 border-current rounded-full hover:rotate-90 transition-transform duration-300 bg-transparent" onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
          </div>
          
          <div className="flex-grow flex flex-col space-y-4 overflow-y-auto pb-10 scrollbar-hide">
            {navLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                onClick={(e) => { 
                  if (!link.external) e.preventDefault();
                  link.onClick(); 
                }} 
                className={`group flex items-center justify-between text-4xl font-black lowercase tracking-tighter cursor-pointer border-b border-current/5 py-4 transition-all active:translate-x-2
                ${link.active ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
              >
                <span>{link.label}</span>
                {link.external ? <ExternalLink size={16} className="opacity-20" /> : <ChevronRight size={16} className="opacity-20" />}
              </a>
            ))}
          </div>

          <div className="shrink-0 pt-10 border-t-2 border-current/10 bg-inherit flex flex-col gap-8">
             <div className="flex justify-between items-center">
               <div className="flex gap-8">
                {CONFIG.socials.map((s) => (
                  <a key={s.key} href={s.url} target="_blank" rel="noreferrer" className="opacity-30 hover:opacity-100 transition-all">{s.icon}</a>
                ))}
               </div>
               <UI.Button onClick={openSkool} className="!py-3 !px-6 !text-[10px]" theme={theme}>{CONFIG.cta}</UI.Button>
             </div>
          </div>
        </div>
      )}

      {/* DESKTOP NAVIGATION */}
      <nav className={`fixed top-0 w-full z-[150] transition-all duration-700 px-6 py-4 flex justify-between items-center ${scrolled || currentView !== 'home' ? (theme === 'dark' ? 'bg-black/95 border-b-2 border-white/5 text-white' : 'bg-white/95 border-b-2 border-black/5 text-black') : 'bg-transparent text-white'} backdrop-blur-md`}>
        <div onClick={() => handleNav('home')} className="text-xl md:text-2xl font-black tracking-tighter lowercase cursor-pointer group flex items-center gap-2 shrink-0">
           <Torus className="opacity-40 group-hover:rotate-180 group-hover:opacity-100 transition-all duration-1000" size={18} />
           {CONFIG.brand}
        </div>
        
        <div className="hidden lg:flex flex-grow justify-center">
          <div className="flex gap-10 items-center font-black lowercase text-[10px] tracking-[0.4em]">
            {navLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                onClick={(e) => { 
                  if (!link.external) e.preventDefault(); 
                  link.onClick(); 
                }} 
                className={`transition-all cursor-pointer relative group flex items-center gap-2 uppercase ${link.active ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
              >
                <span>{link.label}</span>
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-current transition-all duration-500 ${link.active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <UI.Button 
            onClick={openSkool} 
            primary={true}
            className={`hidden lg:flex !py-2.5 !px-6 !text-[10px] border-none !min-h-0`}
            theme={(scrolled || currentView !== 'home') ? theme : 'dark'}
          >
            {CONFIG.cta}
          </UI.Button>
          <button onClick={toggleTheme} className="p-2.5 rounded-full hover:bg-current/10 transition-all cursor-pointer border-2 border-current active:scale-90 group bg-transparent">
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button className="lg:hidden cursor-pointer p-2.5 border-2 border-current rounded-full bg-transparent" onClick={() => setIsMenuOpen(true)}>
            <Menu size={18} />
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        {currentView === 'home' ? renderHome() : 
         currentView === 'learn' ? renderLearn() : 
         currentView === 'blog' ? renderBlog() :
         currentView === 'hire' ? renderHire() :
         renderAbout()}
      </main>

      {/* MODALS */}
      <Modal isOpen={!!activeManual} onClose={() => setActiveManual(null)} theme={theme}>
        {activeManual && (
          <div className="grid lg:grid-cols-2 gap-12 items-start py-4">
            <div className="lg:sticky lg:top-0">
                <div className={`border-4 border-current overflow-hidden mb-8 shadow-[12px_12px_0px_0px_rgba(current,1)] aspect-[4/5] max-w-sm mx-auto`}>
                    <UI.Image src={activeManual.gif} alt={activeManual.title} forceColor={true} />
                </div>
                <div className="mb-8 space-y-4 text-center lg:text-left">
                    <h2 className="text-4xl md:text-7xl font-black lowercase leading-[0.8] tracking-tighter break-words">{activeManual.title}</h2>
                    <p className="text-lg md:text-2xl font-black lowercase italic opacity-30 leading-tight">"{activeManual.law}"</p>
                </div>
                <UI.Button onClick={openSkool} className="w-full !py-6 shadow-xl" theme={theme}>Execute Protocol</UI.Button>
            </div>
            <div className="space-y-12 border-t-4 border-current pt-12">
                <div>
                    <UI.Badge theme={theme} className="mb-6">Anatomical Basis</UI.Badge>
                    <p className="text-lg md:text-2xl opacity-80 lowercase leading-relaxed font-medium">{activeManual.intro}</p>
                </div>
                <div className={`${theme === 'dark' ? 'bg-neutral-900/40' : 'bg-neutral-50'} p-8 border-4 border-current`}>
                    <UI.Badge theme={theme} className="mb-6 !border-current/30">Force Justification</UI.Badge>
                    <p className="text-base md:text-xl opacity-60 lowercase leading-relaxed italic font-medium">{activeManual.why}</p>
                </div>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={!!activeProject} onClose={() => setActiveProject(null)} theme={theme}>
        {activeProject && (
          <div className="grid lg:grid-cols-2 gap-12 py-4 items-center">
            <div className="flex justify-center">
              <div className="aspect-[4/5] border-4 border-current overflow-hidden shadow-[12px_12px_0px_0px_rgba(current,1)] w-full max-w-sm">
                <UI.Image src={activeProject.gif} alt={activeProject.title} forceColor={true} />
              </div>
            </div>
            <div className="space-y-8 mt-8 lg:mt-0">
              <UI.Badge theme={theme}>{activeProject.year}</UI.Badge>
              <h2 className="text-4xl md:text-7xl font-black lowercase leading-none tracking-tighter break-words">{activeProject.title}</h2>
              <div className="border-l-4 border-current pl-10 space-y-8">
                <p className="text-lg md:text-2xl font-medium opacity-60 lowercase leading-snug">{activeProject.detail}</p>
                {activeProject.link && (
                  <UI.Button onClick={() => window.open(activeProject.link, '_blank')} theme={theme} className="!py-6 w-full sm:w-auto">
                    View Project <ExternalLink size={18} />
                  </UI.Button>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={!!activeBlogPost} onClose={() => setActiveBlogPost(null)} theme={theme}>
        {activeBlogPost && (
          <div className="max-w-4xl mx-auto py-8 space-y-12">
            <div className="flex justify-between items-center text-[10px] font-black tracking-widest uppercase opacity-30">
                <span>Log: {activeBlogPost.id}</span>
                <span>{activeBlogPost.date}</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter lowercase leading-none break-words text-center md:text-left">{activeBlogPost.title}</h2>
            <div className="aspect-[4/5] max-h-[60vh] mx-auto border-4 border-current overflow-hidden max-w-sm">
               <UI.Image src={activeBlogPost.gif} alt={activeBlogPost.title} forceColor={true} />
            </div>
            <p className="text-lg md:text-3xl opacity-60 lowercase leading-relaxed italic break-words text-center">{activeBlogPost.preview}</p>
            <div className="p-12 border-t-4 border-current text-center">
               <UI.Button onClick={openSkool} theme={theme} className="w-full !py-8">Access Full Dispatch</UI.Button>
            </div>
          </div>
        )}
      </Modal>

      {/* FOOTER */}
      <footer className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} py-20 px-6 relative z-20 transition-colors duration-1000 border-t border-current/5`}>
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
          <div className="flex gap-12">
            {CONFIG.socials.map((s) => (
              <a key={s.key} href={s.url} target="_blank" rel="noreferrer" className="hover:opacity-40 transition-all opacity-40">{s.icon}</a>
            ))}
          </div>
          <div className="opacity-40 text-[10px] font-black uppercase tracking-[0.7em] text-center">
             © 2026 APEX MOVEMENT
          </div>
        </div>
      </footer>
    </div>
  );
}

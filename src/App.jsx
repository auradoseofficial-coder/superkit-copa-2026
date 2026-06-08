import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Check, 
  ArrowRight, 
  Download, 
  Printer, 
  BookOpen, 
  Sparkles, 
  ShieldCheck,
  Menu,
  X,
  HelpCircle,
  TrendingDown,
  TrendingUp,
  DollarSign,
  FileText,
  Clock,
  RotateCcw,
  Star,
  Smartphone,
  ChevronDown
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [imgErrors, setImgErrors] = useState({});
  const [vimeoMuted, setVimeoMuted] = useState(true);
  const vimeoPlayerRef = useRef(null);
  const vimeoInstanceRef = useRef(null);
  
  // Stats counters state
  const [stats, setStats] = useState({
    stickers: 0,
    teams: 0,
    pages: 0,
    savings: 0
  });

  const heroRef = useRef(null);
  const statsRef = useRef(null);

  // Initialize Vimeo player
  useEffect(() => {
    const initPlayer = () => {
      if (vimeoPlayerRef.current && window.Vimeo) {
        vimeoInstanceRef.current = new window.Vimeo.Player(vimeoPlayerRef.current);
      } else {
        setTimeout(initPlayer, 400);
      }
    };
    setTimeout(initPlayer, 600);
  }, []);

  // Toggle sound on Vimeo player
  const toggleVimeoSound = () => {
    if (!vimeoInstanceRef.current) return;
    if (vimeoMuted) {
      vimeoInstanceRef.current.setMuted(false);
      setVimeoMuted(false);
    } else {
      vimeoInstanceRef.current.setMuted(true);
      setVimeoMuted(true);
    }
  };

  // Toggle FAQ accordion
  const toggleFaq = (index) => {
    setFaqOpen(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      // Sticky CTA visibility logic (shows after scrolling past 600px)
      if (window.scrollY > 600) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // GSAP animations setup
    const ctx = gsap.context(() => {
      // Hero Animations
      const heroTl = gsap.timeline();
      heroTl.fromTo('.hero-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );

      // Stats Counting Animation
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 85%',
        onEnter: () => {
          const duration = 1.8; // seconds
          const steps = 60;
          let step = 0;
          
          const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeProgress = progress * (2 - progress);
            
            setStats({
              stickers: Math.floor(easeProgress * 980),
              teams: Math.floor(easeProgress * 47),
              pages: Math.floor(easeProgress * 112),
              savings: Math.floor(easeProgress * 3287)
            });
            
            if (step >= steps) {
              clearInterval(interval);
              setStats({ stickers: 980, teams: 47, pages: 112, savings: 3287 });
            }
          }, (duration * 1000) / steps);
        }
      });

      // Fade in animations for sections
      const sections = ['.compare-anim', '.benefit-card', '.proof-item', '.pricing-card'];
      sections.forEach(selector => {
        gsap.fromTo(selector,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: selector,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-darkBg text-darkText font-sans selection:bg-[#FFDF00] selection:text-[#002776] relative overflow-x-hidden pt-[44px]">
      
      {/* PREMIUM ANNOUNCEMENT BAR */}
      <div className="announcement-bar">
        <div className="announcement-shimmer"></div>
        <div className="announcement-marquee">
          <div className="announcement-items">
            <span>⚽ CHEGA DE FIGURINHAS REPETIDAS</span>
            <span className="separator">◆</span>
            <span>🏆 <span className="text-[#009B3A]">COMPLETE SEU ÁLBUM MAIS RÁPIDO</span></span>
            <span className="separator">◆</span>
            <span>⭐ TODAS AS SELEÇÕES DA COPA 2026</span>
            <span className="separator">◆</span>
            <span><span className="text-[#009B3A]">DOWNLOAD IMEDIATO</span></span>
            <span className="separator">◆</span>
            <span>⚽ ACESSO VITALÍCIO</span>
            <span className="separator">◆</span>
            <span>🏆 GARANTIA DE 7 DIAS</span>
            <span className="separator">◆</span>
            <span>⭐ <span className="text-[#009B3A]">ECONOMIZE CENTENAS DE REAIS EM ENVELOPES</span></span>
            <span className="separator">◆</span>
            <span>🇧🇷 MAIS DE 900 FIGURINHAS ORGANIZADAS</span>
            <span className="separator">◆</span>
          </div>
          <div className="announcement-items">
            <span>⚽ CHEGA DE FIGURINHAS REPETIDAS</span>
            <span className="separator">◆</span>
            <span>🏆 <span className="text-[#009B3A]">COMPLETE SEU ÁLBUM MAIS RÁPIDO</span></span>
            <span className="separator">◆</span>
            <span>⭐ TODAS AS SELEÇÕES DA COPA 2026</span>
            <span className="separator">◆</span>
            <span><span className="text-[#009B3A]">DOWNLOAD IMEDIATO</span></span>
            <span className="separator">◆</span>
            <span>⚽ ACESSO VITALÍCIO</span>
            <span className="separator">◆</span>
            <span>🏆 GARANTIA DE 7 DIAS</span>
            <span className="separator">◆</span>
            <span>⭐ <span className="text-[#009B3A]">ECONOMIZE CENTENAS DE REAIS EM ENVELOPES</span></span>
            <span className="separator">◆</span>
            <span>🇧🇷 MAIS DE 900 FIGURINHAS ORGANIZADAS</span>
            <span className="separator">◆</span>
          </div>
        </div>
      </div>

      {/* SVG Noise Filter for Texture */}
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>
      <div className="noise-overlay" />

      {/* ABSOLUTE NAVBAR (NON-FIXED) */}
      <div className="absolute top-[44px] left-0 w-full z-50 px-4 py-4 md:py-6 flex justify-center pointer-events-none">
        <nav 
          className="w-full max-w-6xl flex items-center justify-between border border-white/5 rounded-full px-6 py-4 pointer-events-auto bg-darkSurface/40 backdrop-blur-md"
        >
          <a href="#" className="flex items-center gap-1.5 font-sporty tracking-wider text-white text-xl md:text-3xl">
            <span className="text-[#FFDF00]">SUPERKIT</span>
            <span className="text-white">COPA 2026</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-condensed tracking-wider text-darkTextSecondary uppercase font-bold">
            <a href="#problema" className="hover:text-[#FFDF00] transition-colors">O Problema</a>
            <a href="#comparativo" className="hover:text-[#FFDF00] transition-colors">Comparação</a>
            <a href="#beneficios" className="hover:text-[#FFDF00] transition-colors">Benefícios</a>
            <a href="#prova" className="hover:text-[#FFDF00] transition-colors">O que é</a>
            <a href="#depoimentos" className="hover:text-[#FFDF00] transition-colors">Opiniões</a>
            <a href="#faq" className="hover:text-[#FFDF00] transition-colors">FAQ</a>
          </div>

          <div>
            <a 
              href="#oferta"
              className="magnetic-button inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFDF00] hover:bg-[#009B3A] text-darkBg text-xs font-bold font-condensed uppercase tracking-wider shadow-md transition-all duration-300"
            >
              <span className="text-[#002776] hover:text-white">Garantir meu pack</span>
            </a>
          </div>
        </nav>
      </div>

      {/* CINEMATIC HERO SECTION */}
      <section 
        ref={heroRef}
        className="relative min-h-[95vh] md:min-h-screen w-full flex flex-col justify-center items-center text-center px-4 pt-36 pb-20 overflow-hidden bg-darkBg"
      >
        {/* Cinematic dark stadium layout */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1920&q=80"
            alt="Estádio lotado de futebol à noite com iluminação dramática"
            className="w-full h-full object-cover object-center scale-100 filter brightness-[0.15] contrast-150 saturate-[0.8]"
          />
          {/* Radial spotlight effect for Nike/Adidas campaign style */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-darkBg/60 to-darkBg" />
          <div className="absolute inset-0 bg-gradient-to-b from-darkBg/20 via-[#002776]/15 to-darkBg" />
          
          {/* Ambient light glow (stadium light style) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#009B3A]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-[#002776]/25 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="hero-anim inline-flex items-center gap-2 border border-[#FFDF00]/20 rounded-full px-4 py-1.5 mb-8 bg-[#009B3A]/20 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#FFDF00] animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-darkText font-bold">
              100% diagramado e pronto para imprimir
            </span>
          </div>

          <h1 className="hero-anim text-5xl sm:text-7xl md:text-8xl font-sporty font-normal tracking-wide text-white uppercase leading-[0.9] mb-6 drop-shadow-2xl">
            COMPLETE SEU ÁLBUM DE FIGURINHAS <br />
            <span className="text-[#FFDF00] block mt-2 drop-shadow-[0_4px_15px_rgba(255,223,0,0.2)]">
              SEM DEPENDER DA SORTE!
            </span>
          </h1>

          <p className="hero-anim max-w-2xl text-base md:text-lg text-darkTextSecondary mb-4 leading-relaxed font-medium px-2">
            Colecione os maiores craques da Copa 2026 de forma inteligente, prática e sem desperdiçar dinheiro com envelopes repetidos.
          </p>

          {/* Vertical Video Container - Vimeo */}
          <div className="hero-anim my-6 w-44 sm:w-52 rounded-2xl bg-darkSurface border-2 border-[#FFDF00]/30 shadow-2xl relative overflow-hidden transition-colors hover:border-[#FFDF00] shrink-0">
            <div style={{ position: "relative", width: "100%", paddingTop: "177.78%", overflow: "hidden", borderRadius: "12px" }}>
              <iframe
                ref={vimeoPlayerRef}
                src="https://player.vimeo.com/video/1199506403?badge=0&autopause=0&player_id=0&app_id=58479&muted=1&loop=1&autoplay=1&background=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "12px" }}
                title="vireo figurinhas 2026">
              </iframe>
              <button
                onClick={toggleVimeoSound}
                style={{ position: "absolute", bottom: "16px", right: "16px", zIndex: 10, background: "rgba(0,0,0,0.55)", color: "#fff", border: "none", borderRadius: "999px", padding: "6px 14px", fontSize: "12px", fontWeight: "bold", cursor: "pointer", backdropFilter: "blur(4px)" }}>
                {vimeoMuted ? '🔇 Toque para ouvir' : '🔊 Som ativado'}
              </button>
            </div>
          </div>

          <div className="hero-anim flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 justify-center">
            <a 
              href="#oferta"
              className="magnetic-button w-full sm:w-auto text-center px-10 py-4 bg-[#FFDF00] hover:bg-white text-[#002776] font-bold font-condensed uppercase tracking-wider text-sm rounded-full shadow-2xl transition-all duration-300"
            >
              <span>Garantir meu pack</span>
            </a>
            <a 
              href="#comparativo"
              className="w-full sm:w-auto text-center px-10 py-4 bg-white/5 border border-white/10 hover:border-white/30 text-white font-bold font-condensed uppercase tracking-wider text-sm rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Ver Como Funciona
            </a>
          </div>

          {/* Quick specs */}
          <div className="hero-anim grid grid-cols-3 gap-6 md:gap-16 mt-16 border-t border-white/5 pt-10 w-full max-w-2xl text-white font-condensed">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#FFDF00]">IMEDIATO</div>
              <div className="text-[10px] md:text-xs text-darkTextSecondary uppercase tracking-wider font-mono mt-0.5">Envio no E-mail</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#FFDF00]">VITALÍCIO</div>
              <div className="text-[10px] md:text-xs text-darkTextSecondary uppercase tracking-wider font-mono mt-0.5">Download Livre</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[#FFDF00]">RISCO ZERO</div>
              <div className="text-[10px] md:text-xs text-darkTextSecondary uppercase tracking-wider font-mono mt-0.5">7 Dias Garantidos</div>
            </div>
          </div>
          
        </div>
      </section>

      {/* NEW SECTION: OS CRAQUES NO SEU ÁLBUM */}
      <section className="py-24 bg-darkBg overflow-hidden border-t border-b border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#009B3A]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 mb-16 relative z-10 text-center">
          <span className="font-condensed text-sm uppercase tracking-[0.2em] text-[#FFDF00] block mb-3 font-bold">COLEÇÃO EXCLUSIVA</span>
          <h2 className="text-4xl md:text-6xl font-sporty font-normal uppercase text-white tracking-wide">
            OS CRAQUES NO SEU ÁLBUM
          </h2>
          <p className="text-darkTextSecondary mt-4 text-sm md:text-base leading-relaxed font-condensed tracking-wide max-w-2xl mx-auto">
            Messi, Mbappé, Vinícius Jr., Bellingham, Yamal e todas as maiores estrelas da Copa organizadas e prontas para você imprimir. **Chega de torcer para encontrar a figurinha certa.**
          </p>
        </div>

        {/* Infinite loop marquee carousel */}
        <div className="relative w-full flex items-center overflow-hidden py-4 select-none">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-darkBg to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-darkBg to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee gap-6">
            {[
              { name: "Lionel Messi", country: "ARGENTINA", img: "images/stickers/messidour.png", color: "border-[#FFDF00]" },
              { name: "Kylian Mbappé", country: "FRANÇA", img: "images/stickers/mbapeedou.png", color: "border-white/10" },
              { name: "Lamine Yamal", country: "ESPANHA", img: "images/stickers/yamalrox.png", color: "border-white/10" },
              { name: "Vinicius Junior", country: "BRASIL", img: "images/stickers/vinijrdour.png", color: "border-[#009B3A]" },
              { name: "Jude Bellingham", country: "INGLATERRA", img: "images/stickers/judebelingham.png", color: "border-white/10" },
              { name: "Erling Haaland", country: "NORUEGA", img: "images/stickers/haaland.png", color: "border-white/10" },
              { name: "Rodri", country: "ESPANHA", img: "images/stickers/rodri.png", color: "border-[#FFDF00]" },
              { name: "Harry Kane", country: "INGLATERRA", img: "images/stickers/Kane.png", color: "border-white/10" },
              { name: "Cristiano Ronaldo", country: "PORTUGAL", img: "images/stickers/cristianoronaldo.png", color: "border-[#FFDF00]" },
              { name: "Bruno Fernandes", country: "PORTUGAL", img: "images/stickers/brunofernand.png", color: "border-white/10" }
            ].concat([
              { name: "Lionel Messi", country: "ARGENTINA", img: "images/stickers/messidour.png", color: "border-[#FFDF00]" },
              { name: "Kylian Mbappé", country: "FRANÇA", img: "images/stickers/mbapeedou.png", color: "border-white/10" },
              { name: "Lamine Yamal", country: "ESPANHA", img: "images/stickers/yamalrox.png", color: "border-white/10" },
              { name: "Vinicius Junior", country: "BRASIL", img: "images/stickers/vinijrdour.png", color: "border-[#009B3A]" },
              { name: "Jude Bellingham", country: "INGLATERRA", img: "images/stickers/judebelingham.png", color: "border-white/10" },
              { name: "Erling Haaland", country: "NORUEGA", img: "images/stickers/haaland.png", color: "border-white/10" },
              { name: "Rodri", country: "ESPANHA", img: "images/stickers/rodri.png", color: "border-[#FFDF00]" },
              { name: "Harry Kane", country: "INGLATERRA", img: "images/stickers/Kane.png", color: "border-white/10" },
              { name: "Cristiano Ronaldo", country: "PORTUGAL", img: "images/stickers/cristianoronaldo.png", color: "border-[#FFDF00]" },
              { name: "Bruno Fernandes", country: "PORTUGAL", img: "images/stickers/brunofernand.png", color: "border-white/10" }
            ]).map((player, idx) => {
              const hasError = imgErrors[idx];
              return (
                <div 
                  key={idx}
                  className={`sticker-container sticker-shiny w-36 h-48 rounded-xl p-2 flex flex-col justify-between shrink-0 bg-darkSurface ${player.color} border-2 hover:scale-105 transition-all duration-300 shadow-lg select-none cursor-pointer`}
                >
                  <div className="bg-[#002776] text-white text-[7px] font-mono p-0.5 rounded uppercase font-black text-center tracking-wider">
                    {player.country}
                  </div>
                  
                  <div className="my-auto h-24 w-full bg-gradient-to-b from-[#0b0f16]/30 to-[#1a2233]/30 rounded-lg flex items-center justify-center relative overflow-hidden border border-white/5">
                    <div className="absolute inset-0 bg-[#009B3A]/5" />
                    {!hasError ? (
                      <img 
                        src={player.img} 
                        alt={player.name}
                        onError={() => setImgErrors(prev => ({ ...prev, [idx]: true }))}
                        className="w-full h-full object-contain object-center"
                      />
                    ) : (
                      <span className="font-sporty text-xl text-[#FFDF00] opacity-80 select-none tracking-wider">
                        {player.name.split(' ').pop()}
                      </span>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-[10px] font-bold text-[#002776] uppercase tracking-wide truncate">{player.name}</div>
                    <div className="text-[7px] font-mono text-[#009B3A] font-extrabold uppercase mt-0.5">FIGURINHA OFICIAL</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* THE TRANSFORMATION / METODO COMPARISON */}
      <section id="comparativo" className="py-24 bg-darkBg border-t border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-condensed text-sm uppercase tracking-[0.2em] text-[#009B3A] block mb-3 font-bold">A DECISÃO INTELIGENTE</span>
            <h2 className="text-4xl md:text-6xl font-sporty font-normal uppercase text-white tracking-wide leading-none">
              POR QUE O SUPERKIT <span className="text-[#FFDF00]">MUDA O JOGO</span>
            </h2>
            <p className="text-darkTextSecondary mt-4 text-sm md:text-base leading-relaxed">
              Compare e veja por que milhares de colecionadores experientes abandonaram a sorte dos envelopes e adotaram o SuperKit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* TRADITIONAL WAY */}
            <div className="compare-anim bg-darkSurface p-8 md:p-12 rounded-container-lg border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-red-500 uppercase tracking-widest block mb-4 font-bold">MÉTODO TRADICIONAL</span>
                <h3 className="text-2xl font-bold font-condensed text-white uppercase tracking-wide mb-6">
                  Depender da Sorte
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-darkTextSecondary text-sm">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5 font-bold">✕</span>
                    <span>Gastos descontrolados com pacotinhos (R$ 3.287+)</span>
                  </li>
                  <li className="flex items-start gap-3 text-darkTextSecondary text-sm">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5 font-bold">✕</span>
                    <span>Acúmulo de centenas de figurinhas repetidas</span>
                  </li>
                  <li className="flex items-start gap-3 text-darkTextSecondary text-sm">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5 font-bold">✕</span>
                    <span>Dependência de pontos de troca presenciais aos finais de semana</span>
                  </li>
                  <li className="flex items-start gap-3 text-darkTextSecondary text-sm">
                    <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5 font-bold">✕</span>
                    <span>Processo lento, desgastante e que gera ansiedade</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500">
                  <DollarSign size={24} />
                </div>
                <div>
                  <div className="text-xs text-darkTextSecondary font-mono uppercase">CUSTO TOTAL MÉDIO</div>
                  <div className="text-xl font-bold text-red-500 font-condensed">R$ 3.287,00 ou mais</div>
                </div>
              </div>
            </div>

            {/* SUPERKIT WAY */}
            <div className="compare-anim bg-[#002776]/30 text-white p-8 md:p-12 rounded-container-lg border-2 border-[#FFDF00] shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FFDF00] text-darkBg text-[10px] font-mono font-black uppercase tracking-wider py-1.5 px-6 rounded-bl-2xl">
                RECOMENDADO
              </div>
              
              <div>
                <span className="text-xs font-mono text-[#FFDF00] uppercase tracking-widest block mb-4 font-bold">SUPERKIT COPA 2026</span>
                <h3 className="text-2xl font-bold font-condensed text-white uppercase tracking-wide mb-6">
                  Controle & Praticidade
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#009B3A] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</span>
                    <span>Apenas um pagamento único e extremamente barato</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#009B3A] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</span>
                    <span>Acesso a 100% das figurinhas organizadas, sem repetidas</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#009B3A] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</span>
                    <span>Tamanho e proporção milimetricamente exatos para colar</span>
                  </li>
                  <li className="flex items-start gap-3 text-white/90 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#009B3A] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold">✓</span>
                    <span>Economia gigantesca de tempo e dinheiro de forma 100% garantida</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="p-3 bg-[#009B3A] rounded-xl text-white">
                  <DollarSign size={24} />
                </div>
                <div>
                  <div className="text-xs text-[#FFDF00]/80 font-mono uppercase">CUSTO DO PRODUTO</div>
                  <div className="text-2xl font-black text-[#FFDF00] font-condensed">R$ 49,90</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS/NUMBERS SECTION */}
      <section ref={statsRef} className="py-20 bg-darkSurface text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#009B3A]/5 via-[#002776]/5 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="p-4">
              <div className="text-5xl md:text-7xl font-bold font-sporty tracking-wide text-[#FFDF00] mb-2">
                {stats.stickers}
              </div>
              <div className="text-xs md:text-sm font-condensed uppercase tracking-wider text-darkTextSecondary">
                Figurinhas Inclusas
              </div>
            </div>

            <div className="p-4">
              <div className="text-5xl md:text-7xl font-bold font-sporty tracking-wide text-[#FFDF00] mb-2">
                {stats.teams}
              </div>
              <div className="text-xs md:text-sm font-condensed uppercase tracking-wider text-darkTextSecondary">
                Seleções Completas
              </div>
            </div>

            <div className="p-4">
              <div className="text-5xl md:text-7xl font-bold font-sporty tracking-wide text-[#FFDF00] mb-2">
                {stats.pages}
              </div>
              <div className="text-xs md:text-sm font-condensed uppercase tracking-wider text-darkTextSecondary">
                Páginas Otimizadas
              </div>
            </div>

            <div className="p-4">
              <div className="text-5xl md:text-7xl font-bold font-sporty tracking-wide text-[#FFDF00] mb-2">
                R$ {stats.savings.toLocaleString('pt-BR')}
              </div>
              <div className="text-xs md:text-sm font-condensed uppercase tracking-wider text-darkTextSecondary">
                De Economia Média
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VISUAL PROOF SECTION (ABUNDANCE) */}
      <section id="prova" className="py-24 bg-darkBg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-condensed text-sm uppercase tracking-[0.2em] text-[#FFDF00] block mb-3 font-bold">TUDO O QUE VOCÊ RECEBE</span>
            <h2 className="text-4xl md:text-6xl font-sporty font-normal uppercase text-white tracking-wide">
              ENTREGUE DIRETO NO SEU E-MAIL
            </h2>
            <p className="text-darkTextSecondary mt-4 text-sm md:text-base leading-relaxed">
              Arquivos digitais diagramados de forma inteligente para que sua única preocupação seja imprimir, cortar e se divertir colando.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Visual Item 1 */}
            <div className="proof-item bg-darkSurface rounded-container-lg overflow-hidden border border-white/5 flex flex-col justify-between">
              <div className="p-4">
                <div className="bg-darkBg rounded-2xl overflow-hidden flex items-center justify-center min-h-[260px] border border-white/10">
                  <img
                    src="images/newmarjrespc.png"
                    alt="Figurinha especial Neymar Jr"
                    className="w-full h-full object-contain object-center rounded-xl max-h-[260px]"
                  />
                </div>
              </div>
              <div className="p-8 border-t border-white/5">
                <h3 className="text-xl font-bold font-condensed text-white uppercase tracking-wider mb-2">Figurinhas Bonitas e Nítidas</h3>
                <p className="text-darkTextSecondary text-xs leading-relaxed">
                  Arquivos vetorizados em altíssima definição (300 DPI) que garantem cores vibrantes e contornos perfeitos após a impressão.
                </p>
              </div>
            </div>

            {/* Visual Item 2 */}
            <div className="proof-item bg-darkSurface rounded-container-lg overflow-hidden border border-white/5 flex flex-col justify-between">
              <div className="p-4">
                <div className="bg-darkBg rounded-2xl overflow-hidden flex items-center justify-center min-h-[260px] border border-white/10">
                  <img
                    src="images/copaorg.png"
                    alt="Organização das figurinhas da Copa"
                    className="w-full h-full object-contain object-center rounded-xl max-h-[260px]"
                  />
                  
                </div>
              </div>
              <div className="p-8 border-t border-white/5">
                <h3 className="text-xl font-bold font-condensed text-white uppercase tracking-wider mb-2">Organização Sem Perda de Tempo</h3>
                <p className="text-darkTextSecondary text-xs leading-relaxed">
                  Encontre exatamente o cromo que procura em segundos. Diagramação A4 com linhas de guias para um corte rápido e preciso.
                </p>
              </div>
            </div>

            {/* Visual Item 3 */}
            <div className="proof-item bg-darkSurface rounded-container-lg overflow-hidden border border-white/5 flex flex-col justify-between">
              <div className="p-4">
                <div className="bg-darkBg rounded-2xl overflow-hidden flex items-center justify-center min-h-[260px] border border-white/10">
                  <img
                    src="images/yamalespc.png"
                    alt="Figurinha especial Lamine Yamal"
                    className="w-full h-full object-contain object-center rounded-xl max-h-[260px]"
                  />
                </div>
              </div>
              <div className="p-8 border-t border-white/5">
                <h3 className="text-xl font-bold font-condensed text-white uppercase tracking-wider mb-2">Especiais e Metalizadas</h3>
                <p className="text-darkTextSecondary text-xs leading-relaxed">
                  Todos os escudos brilhantes, lendas raras e figurinhas especiais inclusas sem custos ou burocracia extra.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="beneficios" className="py-24 bg-darkBg border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-condensed text-sm uppercase tracking-[0.2em] text-[#009B3A] block mb-3 font-bold">VANTAGENS EXCLUSIVAS</span>
            <h2 className="text-4xl md:text-6xl font-sporty font-normal uppercase text-white tracking-wide leading-none">
              A FORMA <span className="text-[#FFDF00]">INTELIGENTE</span> DE COLECIONAR
            </h2>
            <p className="text-darkTextSecondary mt-4 text-sm md:text-base leading-relaxed">
              Veja por que o SuperKit Copa 2026 é o atalho perfeito para preencher o seu álbum físico com orgulho e economia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="benefit-card bg-darkSurface p-8 rounded-container-lg border border-white/5 flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-[#009B3A]/10 border border-[#009B3A]/25 flex items-center justify-center shrink-0 text-[#009B3A]">
                <DollarSign size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-condensed text-white uppercase tracking-wider mb-2">Economia Absurda</h3>
                <p className="text-darkTextSecondary text-sm leading-relaxed">
                  Pague apenas uma vez e economize até 90% do valor total necessário comparado a comprar pacotinhos cegos de repetidas.
                </p>
              </div>
            </div>

            <div className="benefit-card bg-darkSurface p-8 rounded-container-lg border border-white/5 flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-[#009B3A]/10 border border-[#009B3A]/25 flex items-center justify-center shrink-0 text-[#009B3A]">
                <Printer size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-condensed text-white uppercase tracking-wider mb-2">Facilidade de Impressão</h3>
                <p className="text-darkTextSecondary text-sm leading-relaxed">
                  Imprima em casa em papel adesivo comum de jato de tinta ou leve em qualquer gráfica rápida de bairro para impressão a laser.
                </p>
              </div>
            </div>

            <div className="benefit-card bg-darkSurface p-8 rounded-container-lg border border-white/5 flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-[#009B3A]/10 border border-[#009B3A]/25 flex items-center justify-center shrink-0 text-[#009B3A]">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-condensed text-white uppercase tracking-wider mb-2">Tamanho Correto Garantido</h3>
                <p className="text-darkTextSecondary text-sm leading-relaxed">
                  Todas as figurinhas foram calibradas seguindo as medidas oficiais milimétricas das edições da Copa de 2026.
                </p>
              </div>
            </div>

            <div className="benefit-card bg-darkSurface p-8 rounded-container-lg border border-white/5 flex gap-6">
              <div className="w-12 h-12 rounded-2xl bg-[#009B3A]/10 border border-[#009B3A]/25 flex items-center justify-center shrink-0 text-[#009B3A]">
                <Sparkles size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold font-condensed text-white uppercase tracking-wider mb-2">Conquista Sem Frustração</h3>
                <p className="text-darkTextSecondary text-sm leading-relaxed">
                  Sinta a real satisfação de terminar sua coleção rapidamente e poder exibir o álbum cheio para seus amigos e familiares.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SOCIAL PROOF (TESTIMONIALS) */}
      <section id="depoimentos" className="py-16 bg-darkBg border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-condensed text-xs uppercase tracking-[0.2em] text-[#009B3A] block mb-2 font-bold">DEPOIMENTOS DE COLECIONADORES</span>
            <h2 className="text-3xl md:text-5xl font-sporty font-normal uppercase text-white tracking-wide leading-none">
              QUEM JÁ ESTÁ <span className="text-[#FFDF00]">COMPLETANDO O ÁLBUM</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Comment 1 */}
            <div className="bg-darkSurface/40 border border-white/5 p-4 rounded-xl flex gap-3 hover:border-white/10 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" 
                alt="pedro_almeida" 
                className="w-8 h-8 rounded-full object-cover shrink-0"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="font-bold text-white hover:underline cursor-pointer">pedro_almeida</span>
                      <span className="text-darkTextSecondary/40 text-[8px]">•</span>
                      <span className="text-darkTextSecondary/50 font-normal">hoje</span>
                    </div>
                    <svg className="w-3.5 h-3.5 text-darkTextSecondary/40 hover:text-red-500 hover:fill-red-500 cursor-pointer transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-darkText text-[13px] md:text-[14px] mt-1 leading-relaxed">
                    Já tinha gastado muito com envelopes repetidos. Valeu cada centavo.
                  </p>
                </div>
                <div className="mt-2 flex gap-4 text-[9px] font-bold text-darkTextSecondary/50">
                  <button className="hover:text-white transition-colors uppercase tracking-wider">Responder</button>
                </div>
              </div>
            </div>

            {/* Comment 2 */}
            <div className="bg-darkSurface/40 border border-white/5 p-4 rounded-xl flex gap-3 hover:border-white/10 transition-colors">
              <img 
                src="images/carolsouz.jpeg" 
                alt="carol_souza" 
                className="w-8 h-8 rounded-full object-cover shrink-0"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="font-bold text-white hover:underline cursor-pointer">carol_souza</span>
                      <span className="text-darkTextSecondary/40 text-[8px]">•</span>
                      <span className="text-darkTextSecondary/50 font-normal">1 d</span>
                    </div>
                    <svg className="w-3.5 h-3.5 text-darkTextSecondary/40 hover:text-red-500 hover:fill-red-500 cursor-pointer transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-darkText text-[13px] md:text-[14px] mt-1 leading-relaxed">
                    Meu filho adorou. Conseguimos completar várias páginas no mesmo dia.
                  </p>
                </div>
                <div className="mt-2 flex gap-4 text-[9px] font-bold text-darkTextSecondary/50">
                  <button className="hover:text-white transition-colors uppercase tracking-wider">Responder</button>
                </div>
              </div>
            </div>

            {/* Comment 3 */}
            <div className="bg-darkSurface/40 border border-white/5 p-4 rounded-xl flex gap-3 hover:border-white/10 transition-colors">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&h=80&q=80" 
                alt="rafael_oliveira" 
                className="w-8 h-8 rounded-full object-cover shrink-0"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="font-bold text-white hover:underline cursor-pointer">rafael_oliveira</span>
                      <span className="text-darkTextSecondary/40 text-[8px]">•</span>
                      <span className="text-darkTextSecondary/50 font-normal">3 d</span>
                    </div>
                    <svg className="w-3.5 h-3.5 text-darkTextSecondary/40 hover:text-red-500 hover:fill-red-500 cursor-pointer transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-darkText text-[13px] md:text-[14px] mt-1 leading-relaxed">
                    Imprimi numa gráfica rápida e ficou perfeito no álbum.
                  </p>
                </div>
                <div className="mt-2 flex gap-4 text-[9px] font-bold text-darkTextSecondary/50">
                  <button className="hover:text-white transition-colors uppercase tracking-wider">Responder</button>
                </div>
              </div>
            </div>

            {/* Comment 4 */}
            <div className="bg-darkSurface/40 border border-white/5 p-4 rounded-xl flex gap-3 hover:border-white/10 transition-colors">
              <img 
                src="images/fernandmart.jpg" 
                alt="fernanda_martins" 
                className="w-8 h-8 rounded-full object-cover shrink-0"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="font-bold text-white hover:underline cursor-pointer">fernanda_martins</span>
                      <span className="text-darkTextSecondary/40 text-[8px]">•</span>
                      <span className="text-darkTextSecondary/50 font-normal">5 d</span>
                    </div>
                    <svg className="w-3.5 h-3.5 text-darkTextSecondary/40 hover:text-red-500 hover:fill-red-500 cursor-pointer transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-darkText text-[13px] md:text-[14px] mt-1 leading-relaxed">
                    Me arrependi de não ter comprado antes. Economizei muito.
                  </p>
                </div>
                <div className="mt-2 flex gap-4 text-[9px] font-bold text-darkTextSecondary/50">
                  <button className="hover:text-white transition-colors uppercase tracking-wider">Responder</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THE OFFER SECTION */}
      <section id="oferta" className="py-24 bg-darkBg relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-darkBg" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-condensed text-sm uppercase tracking-[0.2em] text-[#FFDF00] block mb-3 font-bold">OFERTA ESPECIAL DE LANÇAMENTO</span>
            <h2 className="text-5xl md:text-7xl font-sporty font-normal uppercase tracking-wide">
              INVISTA MENOS QUE 10 PACOTINHOS
            </h2>
            <p className="text-darkTextSecondary mt-4 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              O valor de poucos envelopes na banca é tudo o que você precisa para garantir acesso a todas as 980 figurinhas da Copa 2026. Economize milhares de reais e complete seu álbum imediatamente.
            </p>
          </div>

          <div className="bg-darkCard text-white rounded-container-lg p-8 md:p-12 border-2 border-[#FFDF00] shadow-2xl max-w-2xl mx-auto pricing-card">
            <div className="text-center mb-8">
              <span className="bg-[#009B3A] text-white text-xs font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                ACESSO DIGITAL IMEDIATO
              </span>
              <h3 className="text-2xl font-bold font-condensed uppercase mt-4 text-white">SUPERKIT DIGITAL COPA 2026</h3>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-darkTextSecondary text-sm">
                <Check className="w-5 h-5 text-[#009B3A] shrink-0 mt-0.5" />
                <span>**Todas as 980 Figurinhas** da Copa do Mundo 2026 completas.</span>
              </li>
              <li className="flex items-start gap-3 text-darkTextSecondary text-sm">
                <Check className="w-5 h-5 text-[#009B3A] shrink-0 mt-0.5" />
                <span>**Uma única compra**: economize centenas de reais em pacotes de repetidas.</span>
              </li>
              <li className="flex items-start gap-3 text-darkTextSecondary text-sm">
                <Check className="w-5 h-5 text-[#009B3A] shrink-0 mt-0.5" />
                <span>**Custo de poucos pacotes** para ter acesso a toda a coleção.</span>
              </li>
              <li className="flex items-start gap-3 text-darkTextSecondary text-sm">
                <Check className="w-5 h-5 text-[#009B3A] shrink-0 mt-0.5" />
                <span>**Tamanho oficial exato** com guias de corte milimétricos.</span>
              </li>
              <li className="flex items-start gap-3 text-darkTextSecondary text-sm">
                <Check className="w-5 h-5 text-[#009B3A] shrink-0 mt-0.5" />
                <span>**Atualizações gratuitas** caso novos convocados sejam definidos.</span>
              </li>
              <li className="flex items-start gap-3 text-darkTextSecondary text-sm">
                <Check className="w-5 h-5 text-[#009B3A] shrink-0 mt-0.5" />
                <span>**Acesso Vitalício**: baixe e imprima quando e quantas vezes quiser.</span>
              </li>
            </ul>

            <div className="border-t border-white/5 pt-6 mb-8 text-center">
              <div className="text-darkTextSecondary/50 text-sm line-through">De R$ 149,90</div>
              <div className="flex items-baseline justify-center gap-1 my-2">
                <span className="text-darkTextSecondary font-bold text-lg">Por apenas</span>
                <span className="text-white text-5xl font-bold font-condensed">R$ 49,90</span>
              </div>
              <div className="text-[#009B3A] text-xs font-bold font-mono uppercase">PAGAMENTO ÚNICO — SEM ASSINATURA</div>
            </div>

            <a 
              href="https://pay.exemplo.com/superkit-copa-2026" 
              className="magnetic-button block w-full text-center py-4 bg-[#009B3A] hover:bg-white text-white hover:text-darkBg font-bold font-condensed uppercase tracking-wider text-sm rounded-full shadow-lg transition-colors"
            >
              <span>Garantir meu pack</span>
            </a>

            <div className="flex justify-center gap-6 mt-6 text-darkTextSecondary text-xs font-mono uppercase">
              <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-[#009B3A]" /> Compra Segura</span>
              <span className="flex items-center gap-1"><Download size={14} className="text-[#009B3A]" /> Download Imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="py-16 bg-darkBg border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-darkSurface p-8 md:p-12 rounded-container-lg border border-white/5 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Guarantee Badge SVG */}
            <div className="w-32 h-32 shrink-0 flex items-center justify-center bg-[#FFDF00] rounded-full text-darkBg relative border-4 border-[#009B3A] shadow-md">
              <div className="text-center font-bold font-condensed text-darkBg">
                <div className="text-xs font-mono uppercase tracking-wider">Garantia</div>
                <div className="text-4xl leading-none font-bold">7</div>
                <div className="text-xs uppercase">Dias</div>
              </div>
            </div>

            <div>
              <span className="font-condensed text-sm uppercase tracking-widest text-[#009B3A] block mb-2 font-bold">RISCO ZERO PARA VOCÊ</span>
              <h3 className="text-2xl font-bold font-condensed text-white uppercase tracking-wider mb-4">Garantia Incondicional de 7 Dias</h3>
              <p className="text-darkTextSecondary text-sm leading-relaxed">
                Nossa prioridade é sua satisfação em fechar seu álbum. Se por qualquer motivo você não gostar dos arquivos, achar que o tamanho não está correto ou simplesmente mudar de ideia, basta nos enviar um e-mail. Nós devolveremos 100% do seu dinheiro de forma simples e rápida.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION (REFINED SCALE) */}
      <section id="faq" className="py-16 bg-darkBg border-t border-white/5">
        <div className="max-w-[840px] mx-auto px-6">
          
          <div className="text-center mb-10">
            <span className="font-condensed text-xs uppercase tracking-[0.2em] text-[#009B3A] block mb-2 font-bold">SUPORTE & RESPOSTAS</span>
            <h2 className="text-3xl md:text-5xl font-sporty font-normal uppercase text-white tracking-wide leading-none">
              AINDA TEM <span className="text-[#FFDF00]">DÚVIDAS?</span>
            </h2>
            <p className="text-darkTextSecondary mt-2 text-xs md:text-sm leading-relaxed font-condensed tracking-wide">
              Esclareça suas principais dúvidas sobre o funcionamento do SuperKit Copa 2026.
            </p>
          </div>

          <div className="space-y-3">
            
            {[
              {
                q: "As figurinhas ficam com boa qualidade?",
                a: "Sim! Todos os arquivos foram vetorizados a 300 DPI (alta resolução). As cores ficam vivas, os textos nítidos e a qualidade idêntica às oficiais se impressas em papel fotográfico autoadesivo."
              },
              {
                q: "Posso imprimir quantas vezes quiser?",
                a: "Sim! O arquivo é seu para sempre. Você pode imprimir quantas páginas precisar e quantas vezes desejar para preencher o seu álbum ou o dos seus filhos."
              },
              {
                q: "Como recebo os arquivos?",
                a: "O envio é 100% imediato e automático. Assim que o pagamento for confirmado, você receberá um e-mail com os links para download direto dos arquivos digitais em PDF."
              },
              {
                q: "Preciso de impressora profissional?",
                a: "Não! Você pode imprimir na sua impressora comum jato de tinta ou laser convencional em casa. Se preferir, salve os arquivos em um pendrive e solicite a impressão em qualquer gráfica rápida de bairro."
              },
              {
                q: "As figurinhas têm o tamanho correto do álbum?",
                a: "Sim. O tamanho é milimetricamente exato. Todos os layouts foram criados seguindo as especificações de largura e altura oficiais para que caibam perfeitamente nos espaços do álbum original da Copa."
              },
              {
                q: "O acesso ao material é vitalício?",
                a: "Com certeza. Seu acesso não expira. Você pode baixar e imprimir os arquivos quando quiser, inclusive recebendo atualizações automáticas gratuitas caso haja mudanças na convocação final."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="border border-white/5 rounded-container-lg overflow-hidden transition-all duration-300 bg-darkSurface"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center py-2.5 px-4 md:py-3 md:px-5 text-left font-bold font-condensed text-white hover:text-[#FFDF00] transition-colors leading-tight"
                >
                  <span className="uppercase text-base md:text-[18px] pr-4 leading-tight">{item.q}</span>
                  <ChevronDown 
                    size={14} 
                    className={`text-[#009B3A] shrink-0 transition-transform duration-300 ${faqOpen[idx] ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {faqOpen[idx] && (
                  <div className="px-5 pb-5 pt-3 text-darkTextSecondary text-[15px] md:text-[16px] leading-relaxed border-t border-white/5 bg-darkCard">
                    {item.a}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-28 bg-darkBg text-white text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1920&q=80"
            alt="Estádio lotado de futebol à noite"
            className="w-full h-full object-cover object-center filter brightness-[0.12] contrast-125"
          />
          <div className="absolute inset-0 bg-[#0B0F16]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-sporty font-normal uppercase mb-6 leading-tight tracking-wide text-white">
            COMPLETE SEU ÁLBUM HOJE MESMO
          </h2>
          <p className="text-darkTextSecondary max-w-xl mx-auto text-sm md:text-base mb-10 leading-relaxed font-medium">
            Economize milhares de reais, fuja das figurinhas repetidas e tenha o prazer de ver seu álbum fechado com praticidade.
          </p>

          <a 
            href="#oferta"
            className="magnetic-button inline-block px-12 py-5 bg-[#FFDF00] hover:bg-white text-[#002776] font-bold font-condensed uppercase tracking-wider text-sm rounded-full shadow-2xl transition-colors"
          >
            <span>Garantir meu pack</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-darkSurface pt-16 pb-12 rounded-t-[3rem] relative z-20 border-t border-white/5 text-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <h3 className="font-sporty font-normal text-[#FFDF00] text-2xl md:text-3xl mb-4 tracking-wider">
                SUPERKIT COPA 2026
              </h3>
              <p className="text-xs text-darkTextSecondary leading-relaxed max-w-sm">
                Desenvolvemos arquivos diagramados de alta precisão para auxiliar colecionadores de todo o Brasil a fechar o álbum de figurinhas da Copa do Mundo 2026 com economia e agilidade.
              </p>
            </div>
            
            <div>
              <h4 className="font-condensed text-xs text-[#FFDF00] uppercase tracking-wider mb-4 font-bold">Navegação</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-darkTextSecondary font-medium font-condensed">
                <li><a href="#problema" className="hover:text-[#FFDF00] transition-colors">O Problema</a></li>
                <li><a href="#comparativo" className="hover:text-[#FFDF00] transition-colors">Comparação</a></li>
                <li><a href="#beneficios" className="hover:text-[#FFDF00] transition-colors">Benefícios</a></li>
                <li><a href="#prova" className="hover:text-[#FFDF00] transition-colors">Demonstração</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-condensed text-xs text-[#FFDF00] uppercase tracking-wider mb-4 font-bold">Contato & Suporte</h4>
              <p className="text-xs text-darkTextSecondary leading-relaxed">
                Dúvidas ou suporte? Entre em contato pelo e-mail:<br />
                <span className="text-[#FFDF00] font-bold font-mono">suporte@superkitcopa.com</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-4">
            <span className="text-[10px] font-mono text-darkTextSecondary/40">
              &copy; {new Date().getFullYear()} Superkit Copa 2026. Todos os direitos reservados.
            </span>

            {/* Operating System Status */}
            <div className="flex items-center gap-2 border border-[#009B3A]/40 rounded-full px-3 py-1 bg-[#009B3A]/10 text-[#009B3A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009B3A] animate-pulse" />
              <span className="text-[9px] font-mono uppercase tracking-widest font-bold">SISTEMA ATIVO</span>
            </div>
          </div>

        </div>
      </footer>

      {/* SMART STICKY CTA FOR MOBILE */}
      {showStickyCta && (
        <div className="fixed bottom-4 left-0 w-full z-40 px-4 md:hidden flex justify-center animate-[bounce_0.8s_ease-out_1]">
          <a
            href="#oferta"
            className="w-full max-w-sm text-center py-4 bg-[#FFDF00] text-[#002776] font-bold font-condensed uppercase tracking-wider text-xs rounded-full shadow-2xl border border-white/10 transition-all duration-300"
          >
            Garantir meu pack
          </a>
        </div>
      )}

    </div>
  );
}

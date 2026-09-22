import { useEffect } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Calendar, Menu, Scissors } from 'lucide-react';

function ThroneArtwork() {
  return <div className="throne-art" aria-label="Vector artwork of a person in black seated on a king's throne">
    <svg viewBox="0 0 720 760" role="img">
      <defs>
        <linearGradient id="gold" x1="0" x2="1"><stop offset="0" stopColor="#6b4b16"/><stop offset=".45" stopColor="#e0b957"/><stop offset="1" stopColor="#5c3d10"/></linearGradient>
        <linearGradient id="red" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#7f0808"/><stop offset="1" stopColor="#250000"/></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="10"/></filter>
      </defs>
      <ellipse cx="360" cy="710" rx="245" ry="24" fill="#8d0707" opacity=".22" filter="url(#glow)"/>
      <path d="M120 650V165c0-32 25-58 57-58h366c32 0 57 26 57 58v485z" fill="#120d0b" stroke="url(#gold)" strokeWidth="9"/>
      <path d="M164 650V194c0-16 13-29 29-29h334c16 0 29 13 29 29v456" fill="url(#red)" stroke="#a77724" strokeWidth="3"/>
      <path d="M91 120l36-78 45 54 54-72 45 72 54-73 45 73 55-72 44 73 52-52 35 77" fill="#120d0b" stroke="url(#gold)" strokeWidth="9" strokeLinejoin="round"/>
      <path d="M144 650h432l-18 48H162z" fill="#0b0807" stroke="url(#gold)" strokeWidth="7"/>
      <path d="M165 697v25M555 697v25" stroke="#d2a53d" strokeWidth="11" strokeLinecap="round"/>
      <circle cx="360" cy="256" r="49" fill="#17100e" stroke="#b98a30" strokeWidth="3"/>
      <path d="M312 249c10-45 88-55 100 0-19-16-64-17-100 0z" fill="#050505"/>
      <path d="M286 347c13-54 135-54 148 0l25 177H261z" fill="#050505" stroke="#292929" strokeWidth="4"/>
      <path d="M315 520l-47 105M405 520l47 105" stroke="#050505" strokeWidth="37" strokeLinecap="round"/>
      <path d="M257 402l-68 105M463 402l68 105" stroke="#050505" strokeWidth="28" strokeLinecap="round"/>
      <path d="M183 507h60M477 507h60" stroke="#b98a30" strokeWidth="3" opacity=".65"/>
      <path d="M287 351c42 28 103 28 146 0" fill="none" stroke="#333" strokeWidth="5"/>
      <path d="M335 205h50l-9 17h-32z" fill="#b98a30"/>
      <path d="M354 181l6-28 7 28" stroke="#d5ad4f" strokeWidth="4" fill="none"/>
    </svg>
    <span className="art-label">THE KING'S CHAIR · 01</span>
  </div>;
}

export default function App() {
  useEffect(() => {
    gsap.fromTo('.reveal',{y:42,opacity:0},{y:0,opacity:1,duration:1,stagger:.1,ease:'power4.out',delay:.15});
    gsap.fromTo('.throne-art',{scale:.94,opacity:0},{scale:1,opacity:1,duration:1.4,ease:'power3.out'});
  },[]);
  return <main>
    <div className="grain"/>
    <nav><div className="brand">NOIR<span> KINGDOM</span></div><div className="navlinks"><a href="#story">Story</a><a href="#services">Services</a><a href="#contact">Contact</a></div><button className="menu" aria-label="Open menu"><Menu size={20}/></button></nav>
    <section className="hero">
      <div className="hero-copy"><p className="eyebrow reveal"><Scissors size={14}/> THE DARK BEAUTY HOUSE</p><h1 className="blood reveal">RULE<br/><span>YOUR</span><br/>LOOK.</h1><p className="lead reveal">A cinematic salon experience for people who don't follow the room. They own it.</p><div className="actions reveal"><a className="primary" href="#contact">Claim your appointment <ArrowUpRight size={17}/></a><a className="secondary" href="#services">Enter the kingdom</a></div></div>
      <div className="hero-art"><ThroneArtwork/></div>
    </section>
    <section id="story" className="story"><div><p className="eyebrow">THE NOIR CODE</p><h2 className="blood small-blood">CUT.<br/>COLOUR.<br/>COMMAND.</h2></div><p>Black is the uniform. Red is the signal. Every detail is built around sharp silhouettes, controlled movement and a little danger.</p></section>
    <section id="services" className="services"><div className="section-head"><p className="eyebrow">THE ROYAL MENU</p><span>01 — 04</span></div><div className="service-grid">{[['01','THE CROWN CUT','Precision cut, sculpt & finish'],['02','BLACKOUT COLOUR','Deep colour with high-gloss finish'],['03','BLOOD RED GLOSS','Signature red transformation'],['04','THE ROYAL RITUAL','Complete private grooming session']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight/></article>)}</div></section>
    <section id="contact" className="booking"><div><p className="eyebrow">YOUR THRONE AWAITS</p><h2 className="blood">TAKE<br/>THE<br/>SEAT.</h2></div><a className="primary large" href="mailto:hello@noirkingdom.com"><Calendar size={18}/> Request an appointment</a></section>
    <footer><span>© 2026 NOIR KINGDOM</span><span>KOLKATA · INDIA</span></footer>
  </main>;
}
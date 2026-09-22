import { useEffect } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Calendar, Menu, Scissors, Rotate3D } from 'lucide-react';
import ThroneScene from './ThroneScene';

export default function App() {
  useEffect(() => {
    gsap.fromTo('.reveal',{y:42,opacity:0},{y:0,opacity:1,duration:1,stagger:.1,ease:'power4.out',delay:.15});
    gsap.fromTo('.throne-3d-shell',{scale:.94,opacity:0},{scale:1,opacity:1,duration:1.4,ease:'power3.out'});
  },[]);

  return <main>
    <div className="grain"/>
    <nav>
      <div className="brand">NOIR<span> KINGDOM</span></div>
      <div className="navlinks"><a href="#story">Story</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
      <button className="menu" aria-label="Open menu"><Menu size={20}/></button>
    </nav>

    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow reveal"><Scissors size={14}/> THE DARK BEAUTY HOUSE</p>
        <h1 className="blood reveal">RULE<br/><span>YOUR</span><br/>LOOK.</h1>
        <p className="lead reveal">A cinematic salon experience for people who don't follow the room. They own it.</p>
        <div className="actions reveal">
          <a className="primary" href="#contact">Claim your appointment <ArrowUpRight size={17}/></a>
          <a className="secondary" href="#services">Enter the kingdom</a>
        </div>
      </div>

      <div className="hero-art">
        <ThroneScene />
      </div>
    </section>

    <section id="story" className="story">
      <div><p className="eyebrow">THE NOIR CODE</p><h2 className="blood small-blood">CUT.<br/>COLOUR.<br/>COMMAND.</h2></div>
      <p>Black is the uniform. Red is the signal. Every detail is built around sharp silhouettes, controlled movement and a little danger.</p>
    </section>

    <section id="services" className="services">
      <div className="section-head"><p className="eyebrow">THE ROYAL MENU</p><span>01 — 04</span></div>
      <div className="service-grid">
        {[
          ['01','THE CROWN CUT','Precision cut, sculpt & finish'],
          ['02','BLACKOUT COLOUR','Deep colour with high-gloss finish'],
          ['03','BLOOD RED GLOSS','Signature red transformation'],
          ['04','THE ROYAL RITUAL','Complete private grooming session']
        ].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight/></article>)}
      </div>
    </section>

    <section id="contact" className="booking">
      <div><p className="eyebrow">YOUR THRONE AWAITS</p><h2 className="blood">TAKE<br/>THE<br/>SEAT.</h2></div>
      <a className="primary large" href="mailto:hello@noirkingdom.com"><Calendar size={18}/> Request an appointment</a>
    </section>

    <footer><span>© 2026 NOIR KINGDOM</span><span>KOLKATA · INDIA</span></footer>
  </main>;
}

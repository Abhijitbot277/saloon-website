import { FormEvent, useEffect, useState } from 'react';

const projects = [
  {
    num: '01 // E-COMMERCE',
    title: 'APEXSTORE',
    description: 'A modern gaming marketplace experience featuring dynamic theming and fluid product interactions.',
    tags: ['React', 'UI/UX'],
  },
  {
    num: '02 // IoT & SAFETY',
    title: 'AIR SENTINAL',
    description: 'Smart industrial safety concept combining H₂S detection with AI-assisted exposure interpretation.',
    tags: ['Hardware Integration', 'Dashboard'],
  },
  {
    num: '03 // CREATIVE WEB',
    title: 'NOIR KINGDOM',
    description: 'A cinematic premium salon website experiment focused on 3D elements and luxury storytelling.',
    tags: ['Three.js', 'Animation'],
  },
];

const skillGroups = [
  ['Development', ['React', 'TypeScript', 'JavaScript', 'Python', 'HTML/CSS']],
  ['AI & Automation', ['AI Agents', 'Prompt Eng', 'Automation', 'LLM Integration']],
  ['Design', ['UI/UX', 'Visual Design', 'Motion Concepts', 'Figma']],
  ['Tools', ['VS Code', 'GitHub', 'Three.js', 'GSAP']],
];

export default function App() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (event: MouseEvent) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:abhijitsingha.dev@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="portfolio-shell">
      <div className="cursor-orbit" style={{ left: cursor.x, top: cursor.y }} aria-hidden="true">
        <span />
      </div>

      <header>
        <a className="logo" href="#top">
          <span>Abhijit Singha</span>
          <small>ENGINEERING × CODE × AI × DESIGN</small>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-stars" aria-hidden="true">
            {Array.from({ length: 34 }).map((_, index) => <i key={index} style={{ '--i': index } as React.CSSProperties} />)}
          </div>
          <div className="hero-copy">
            <div className="hero-kicker">ENGINEERING × CODE × AI × DESIGN</div>
            <div className="hero-name-outline" aria-hidden="true">ABHIJIT.</div>
            <h1>HI, I'M<br />ABHIJIT.</h1>
            <p>I build digital experiences, experiment with AI, and turn abstract ideas into functional, real-world products.</p>
            <div className="cta-buttons">
              <a href="#work" className="btn-primary">EXPLORE MY WORK</a>
              <a href="#contact" className="btn-secondary">LET'S CONNECT</a>
            </div>
          </div>
          <div className="scroll-cue"><span />SCROLL</div>
        </section>

        <section id="about">
          <div className="subtitle">MORE THAN A STUDENT.</div>
          <h2>BUILD. BREAK. LEARN. REPEAT.</h2>
          <p className="section-copy">I am an EEE engineering student bridging the gap between hardware logic and software architecture. My focus lies at the intersection of web development, artificial intelligence, and creative technology.</p>
          <div className="meta-grid">
            <div className="meta-item"><h4>LOCATION</h4><p>Kolkata, India</p></div>
            <div className="meta-item"><h4>EDUCATION</h4><p>B.Tech — Electrical &amp; Electronics Engineering</p></div>
            <div className="meta-item"><h4>FOCUS</h4><p>AI • Web Development • Creative Technology</p></div>
          </div>
        </section>

        <section id="skills">
          <div className="subtitle">TECHNICAL ARCHITECTURE</div>
          <div className="skills-grid">
            {skillGroups.map(([title, skills]) => (
              <div className="skill-card" key={title}>
                <h3>{title}</h3>
                <ul>{(skills as string[]).map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="work">
          <h2>THINGS I'VE BUILT.</h2>
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="num">{project.num}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </section>

        <section>
          <div className="subtitle">THE JOURNEY</div>
          <div className="timeline">
            <div className="timeline-item"><div className="year">2026</div><div><h4>CONVERGENCE</h4><p>Scaling the intersection of Engineering, AI, and Web Development into full-stack product architecture.</p></div></div>
            <div className="timeline-item"><div className="year">2025–2026</div><div><h4>EXPERIMENTATION</h4><p>Deep technical learning, shipping projects, building the AI lab, and establishing a creative developer identity.</p></div></div>
            <div className="timeline-item"><div className="year">Earlier</div><div><h4>FOUNDATION</h4><p>Academic foundations, competitive exam preparation (JEE Main), and discovering the logic of code.</p></div></div>
          </div>
        </section>

        <section id="contact">
          <h2>LET'S BUILD SOMETHING INTERESTING.</h2>
          <p className="contact-intro">Have an idea, project, collaboration or opportunity? My inbox is always open.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="NAME" required />
            <input name="email" type="email" placeholder="EMAIL" required />
            <textarea name="message" rows={4} placeholder="MESSAGE" required />
            <button type="submit">SEND MESSAGE</button>
          </form>
        </section>
      </main>

      <footer><p>© 2026 ABHIJIT SINGHA. ENGINEERED WITH INTENT.</p></footer>
    </div>
  );
}

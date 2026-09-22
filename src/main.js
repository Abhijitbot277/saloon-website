import "./style.css";

const projects = [
  {
    number: "01",
    title: "APEXSTORE",
    type: "WEB EXPERIENCE",
    description: "A cinematic gaming marketplace interface built around immersive product discovery, motion and responsive UI.",
    stack: "React · Vite · TypeScript · GSAP"
  },
  {
    number: "02",
    title: "AIR SENTINAL",
    type: "SMART AUTOMATION",
    description: "A worker-safety concept combining a passive colorimetric H₂S dosimeter, AI-assisted reading and a wireless safety dashboard.",
    stack: "AI · IoT · BLE/Wi-Fi · Safety"
  },
  {
    number: "03",
    title: "NOIR KINGDOM",
    type: "3D EXPERIENCE",
    description: "An experimental luxury web experience using cinematic composition, 3D scenes and interactive transitions.",
    stack: "React · Three.js · R3F"
  }
];

const skills = [
  ["DEVELOPMENT", "HTML / CSS", "JavaScript", "React", "TypeScript", "Python"],
  ["AI & AUTOMATION", "AI FUNDAMENTALS", "AI WORKFLOWS", "AGENTS", "AUTOMATION"],
  ["DESIGN", "UI / UX", "CANVA", "MOTION", "VISUAL SYSTEMS"],
  ["TOOLS", "Git / GitHub", "VS Code", "Figma", "Vite"]
];

const root = document.querySelector("#root");

root.innerHTML = `
  <div class="site">
    <div class="stars" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>
    <div class="cursor" aria-hidden="true"></div>

    <header class="header">
      <a class="brand" href="#top" aria-label="Abhijit Singha home">
        <span class="brand-name">ABHIJIT SINGHA</span>
        <span class="brand-line"></span>
        <span class="brand-sub">ENGINEERING × CODE × AI × DESIGN</span>
      </a>
      <nav class="nav" aria-label="Primary navigation">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <button class="menu" aria-label="Open navigation"><span></span><span></span></button>
    </header>

    <main>
      <section class="hero" id="top">
        <div class="hero-copy">
          <div class="hero-title" aria-label="Hi, I'm Abhijit">
            <div class="solid-title">HI, I'M</div>
            <div class="outline-title">ABHIJIT.</div>
          </div>
          <p class="hero-description">I build digital experiences, experiment with AI, and turn<br class="desktop" /> abstract ideas into functional, real-world products.</p>
          <div class="hero-actions">
            <a class="button button-solid" href="#work">EXPLORE MY WORK</a>
            <a class="button button-ghost" href="#contact">LET'S CONNECT</a>
          </div>
        </div>
        <div class="hero-orb" aria-hidden="true"><span></span></div>
        <div class="scroll-cue"><span>SCROLL</span><i></i></div>
      </section>

      <section class="intro section" id="about">
        <div class="section-kicker">01 / ABOUT</div>
        <div class="intro-grid">
          <h2>MORE THAN<br /><em>A STUDENT.</em></h2>
          <div>
            <p class="lead">I like building things that feel as good as they function.</p>
            <p>I’m an engineering student exploring software, AI, automation and visual design. My work lives at the intersection of technical curiosity and cinematic digital experiences.</p>
            <div class="statement">BUILD. BREAK. LEARN. REPEAT.</div>
          </div>
        </div>
      </section>

      <section class="skills section" id="skills">
        <div class="section-kicker">02 / SKILLS</div>
        <div class="skills-grid">
          ${skills.map(([title, ...items], i) => `
            <article class="skill-card">
              <span class="skill-index">0${i + 1}</span>
              <h3>${title}</h3>
              <div class="tags">${items.map(item => `<span>${item}</span>`).join("")}</div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="work section" id="work">
        <div class="section-kicker">03 / SELECTED WORK</div>
        <div class="work-list">
          ${projects.map(project => `
            <article class="project">
              <div class="project-number">${project.number}</div>
              <div class="project-main">
                <div class="project-meta">${project.type}</div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <span class="project-stack">${project.stack}</span>
              </div>
              <span class="project-arrow">↗</span>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="journey section">
        <div class="section-kicker">04 / JOURNEY</div>
        <div class="timeline">
          <div class="timeline-item">
            <span>2026 — NOW</span>
            <div><h3>ENGINEERING × AI</h3><p>Building products, experimenting with AI and turning ideas into working experiences.</p></div>
          </div>
          <div class="timeline-item">
            <span>2025 — 2026</span>
            <div><h3>STARTED BUILDING</h3><p>Moved from learning concepts to shipping interfaces, experiments and real projects.</p></div>
          </div>
          <div class="timeline-item">
            <span>EARLIER</span>
            <div><h3>CURIOUS BY DEFAULT</h3><p>Technology, design and problem-solving became a habit rather than a subject.</p></div>
          </div>
        </div>
      </section>

      <section class="contact section" id="contact">
        <div class="section-kicker">05 / CONTACT</div>
        <div class="contact-wrap">
          <div>
            <h2>LET'S MAKE<br /><em>SOMETHING.</em></h2>
            <p>Have an idea, project or collaboration in mind?</p>
          </div>
          <form id="contact-form">
            <label><span>NAME</span><input name="name" required autocomplete="name" /></label>
            <label><span>EMAIL</span><input name="email" type="email" required autocomplete="email" /></label>
            <label><span>MESSAGE</span><textarea name="message" rows="4" required></textarea></label>
            <button class="button button-solid" type="submit">SEND MESSAGE ↗</button>
          </form>
        </div>
      </section>
    </main>

    <footer class="footer">
      <span>© 2026 ABHIJIT SINGHA</span>
      <span>ENGINEERING × CODE × AI × DESIGN</span>
    </footer>
  </div>
`;

const cursor = document.querySelector(".cursor");
window.addEventListener("pointermove", (event) => {
  cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
});

document.querySelectorAll("a, button, input, textarea").forEach((element) => {
  element.addEventListener("mouseenter", () => cursor.classList.add("active"));
  element.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
menu.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.classList.toggle("open");
});
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menu.classList.remove("open");
  });
});

const form = document.querySelector("#contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
  const body = encodeURIComponent(`Name: ${data.get("name")}\\nEmail: ${data.get("email")}\\n\\n${data.get("message")}`);
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .project, .timeline-item, .skill-card").forEach(el => observer.observe(el));

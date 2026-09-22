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
  { title: "Development", icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16"/></svg>', items: ["React", "TypeScript", "JavaScript", "Python", "HTML/CSS"] },
  { title: "AI & Automation", icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 8.5A3.5 3.5 0 1 1 12 5a3.5 3.5 0 1 1 3 3.5A3.5 3.5 0 1 1 15 15a3.5 3.5 0 1 1-6 0A3.5 3.5 0 1 1 9 8.5Z"/><path d="M12 5v14M5 12h14"/></svg>', items: ["AI Agents", "Prompt Eng", "Automation", "LLM Integration"] },
  { title: "Design", icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="12" cy="17" r="2"/><path d="M8 8h8M7.2 9.6l3.5 5M16.8 9.6l-3.5 5"/></svg>', items: ["UI/UX", "Visual Design", "Motion Concepts", "Figma"] },
  { title: "Tools", icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.7 6.3 3-3a5 5 0 0 0 0 7.1l-8.2 8.2a2.1 2.1 0 0 1-3-3l8.2-8.2a5 5 0 0 0 7.1 0l-3 3"/><path d="m5 19-2 2"/></svg>', items: ["VS Code", "GitHub", "Three.js", "GSAP"] }
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
        <div class="section-kicker technical-kicker">TECHNICAL ARCHITECTURE</div>
        <div class="skills-grid">
          ${skills.map(skill => `
            <article class="skill-card">
              <div class="skill-heading">
                <span class="skill-icon">${skill.icon}</span>
                <h3>${skill.title}</h3>
              </div>
              <div class="tags">${skill.items.map(item => `<span>${item}</span>`).join("")}</div>
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

// Generate the moving star field entirely with CSS/DOM — no image assets.
const starField = document.querySelector(".stars");
const starCount = window.innerWidth < 700 ? 85 : 150;
const starFragment = document.createDocumentFragment();

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("span");
  star.className = "star-particle";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.setProperty("--size", `${(Math.random() * 2.2 + 0.5).toFixed(2)}px`);
  star.style.setProperty("--duration", `${(Math.random() * 18 + 12).toFixed(1)}s`);
  star.style.setProperty("--delay", `-${(Math.random() * 25).toFixed(1)}s`);
  star.style.setProperty("--distance", `${(Math.random() * 180 + 70).toFixed(0)}px`);
  star.style.setProperty("--drift-x", `${(Math.random() * 2 - 1) * 90}px`);
  star.style.setProperty("--drift-y", `${(Math.random() * 2 - 1) * 90}px`);
  star.style.setProperty("--twinkle", `${(Math.random() * 2.5 + 1.5).toFixed(1)}s`);
  star.style.setProperty("--twinkle-delay", `-${(Math.random() * 4).toFixed(1)}s`);
  starFragment.appendChild(star);
}
starField.appendChild(starFragment);

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

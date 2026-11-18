import React, { useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Github, FileText, Code2, Database, Globe, ExternalLink, ArrowUpRight } from 'lucide-react';

const skills = [
  { group: 'Programming', items: ['Python', 'SQL', 'JavaScript'] },
  { group: 'Frontend', items: ['HTML', 'CSS', 'React.js'] },
  { group: 'Backend', items: ['Django', 'Django REST Framework', 'Flask', 'FastAPI', 'REST APIs'] },
  { group: 'Database & Tools', items: ['MySQL', 'Git', 'GitHub', 'Postman', 'Docker', 'Linux (Ubuntu)', 'VS Code'] },
];

const projects = [
  {
    title: 'Full-Stack CRUD Application',
    type: 'Web Development',
    description: 'Developed a full-stack CRUD application using React, Django REST Framework, and MySQL. Implemented dynamic forms, responsive UI, Django ORM, database migrations, CORS, and RESTful endpoints for create, read, update, and delete operations.',
    stack: ['React.js', 'Python', 'Django REST Framework', 'MySQL'],
    link: 'https://github.com/Vimal37864',
  },
  {
    title: 'Crime Pattern Forecasting System',
    type: 'Final-Year Project',
    description: 'Developed a web application for crime-pattern analysis, risk-level prediction, and suspect-profile prediction. Used feature engineering, categorical encoding, SMOTE, Random Forest, and XGBoost, with a Flask REST API and React dashboard featuring zone-wise insights and heatmap visualisation.',
    stack: ['Python', 'Machine Learning', 'Flask'],
    link: 'https://github.com/Vimal37864',
  },
];

function App() {
  const [active, setActive] = useState('All');
  const groups = ['All', ...skills.map(s => s.group)];
  const visible = active === 'All' ? skills : skills.filter(s => s.group === active);

  return (
    <main className="page">
      <div className="container">
        <section className="hero" id="home">
          <div className="avatar photo"><img src="/profile.jpg" alt="Vimal Balaji" /><i /></div>
          <p className="eyebrow">COMPUTER SCIENCE & ENGINEERING</p>
          <h1>Vimal Balaji</h1>
          <h2>Python Developer <b>|</b> Full-Stack Developer <b>·</b> React <b>·</b> Django</h2>
          <p className="intro">
            Computer Science and Engineering graduate interested in building practical web applications.
            I work with Python, JavaScript, React, Django, and MySQL, and I’m strengthening my development
            skills through hands-on projects and continuous learning.
          </p>
          <div className="contact-row">
            <span><MapPin size={17}/> Chennai, Tamil Nadu</span>
            <a href="mailto:vimalbalaji787@gmail.com"><Mail size={17}/> vimalbalaji787@gmail.com</a><a href="tel:+919025326045"><Phone size={17}/> +91 90253 26045</a>
          </div>
          <div className="actions">
            <a className="btn primary" href="https://linkedin.com/in/vimalbalajivr" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
            <a className="btn" href="https://github.com/Vimal37864" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
            <a className="btn lime" href="/resume.pdf" target="_blank"><FileText size={18}/> Download Résumé</a>
          </div>
          
        </section>

        <section className="section" id="skills">
          <div className="section-heading"><Code2/><h3>Technical Skills</h3></div>
          <div className="filters">
            {groups.map(g => <button key={g} className={active === g ? 'selected' : ''} onClick={() => setActive(g)}>{g}</button>)}
          </div>
          <div className="skill-grid">
            {visible.map(group => <article className="skill-card" key={group.group}>
              <span className="card-kicker">{group.group}</span>
              <div className="chips">{group.items.map(item => <span className="chip" key={item}>{item}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading"><Database/><h3>Featured Projects</h3></div>
          <div className="project-grid">
            {projects.map(p => <article className="project-card" key={p.title}>
              <div className="project-top"><span>{p.type}</span><a href={p.link} target="_blank" rel="noreferrer" aria-label="Open GitHub"><ArrowUpRight/></a></div>
              <h4>{p.title}</h4><p>{p.description}</p>
              <div className="chips">{p.stack.map(s => <span className="chip" key={s}>{s}</span>)}</div>
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={15}/></a>
            </article>)}
          </div>
        </section>

        <section className="section two-col" id="education">
          <div>
            <div className="section-heading"><Globe/><h3>Education</h3></div>
            <article className="simple-card">
              <h4>B.E. Computer Science and Engineering</h4>
              <p>Dhanalakshmi Srinivasan College of Engineering and Technology</p>
              <span className="muted">2026 · CGPA: 7.99 (through 6th semester, as previously provided)</span>
            </article>
          </div>
          <div>
            <div className="section-heading"><FileText/><h3>Certifications</h3></div>
            <article className="simple-card">
              <ul><li>Java Programming</li><li>Web Development Fundamentals</li></ul>
              <p className="muted small">Add issuer names, dates, and certificate links if available.</p>
            </article>
          </div>
        </section>

        <section className="contact-cta" id="contact">
          <p className="eyebrow">LET’S CONNECT</p>
          <h3>Looking for an entry-level IT opportunity.</h3>
          <p>Open to entry-level opportunities in Python development, backend development, and full-stack software development.</p>
          <a className="btn lime" href="https://linkedin.com/in/vimalbalajivr"><Linkedin size={18}/> Connect on LinkedIn</a>
        </section>
        <footer>© {new Date().getFullYear()} Vimal Balaji · Built with React</footer>
      </div>
    </main>
  );
}

export default App;
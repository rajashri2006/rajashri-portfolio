import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Firebase',
  'Python', 'MySQL', 'Git & GitHub', 'Figma', 'AWS / Cloud', 'Unity & Blender'
]

const projects = [
  {
    title: 'Disaster Management System',
    type: 'Web Application',
    description:
      'A web-based emergency response system that receives a victim’s GPS location, stores it in a database, identifies nearby rescue teams, and shares the location for rescue support.',
    tech: ['JavaScript', 'Firebase', 'Google Maps']
  },
  {
    title: 'Commercial Website',
    type: 'Frontend Project',
    description:
      'A responsive commercial website created to practice modern layouts, Flexbox, reusable UI sections, navigation, and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'React Web Applications',
    type: 'Frontend Practice',
    description:
      'A collection of React applications including a calculator, BMI calculator, image carousel, forms, routing, protected routes, and Context API examples.',
    tech: ['React', 'Vite', 'JavaScript']
  }
]

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div>
      <header className="navbar">
        <a className="logo" href="#home">Rajashri<span>.</span></a>
        <nav>
          {['home','about','skills','projects','education','contact'].map(item => (
            <a key={item} href={`#${item}`}>{item[0].toUpperCase() + item.slice(1)}</a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">COMPUTER SCIENCE ENGINEERING STUDENT</p>
            <h1>Hi, I'm <span>Rajashri</span>.</h1>
            <h2>Aspiring Full-Stack Web Developer</h2>
            <p className="lead">
              I build responsive web experiences and practical software solutions
              while continuously learning modern technologies.
            </p>
            <div className="actions">
              <button onClick={() => scrollTo('projects')}>View Projects</button>
              <a className="outline" href="#contact">Contact Me</a>
            </div>
            <div className="quick-links">
              <a href="https://github.com/rajashri2006" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/rajashriillayaraja/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="avatar">RI</div>
            <div className="code-window">
              <span>const</span> developer = {'{'}<br/>
              &nbsp;&nbsp;name: <b>"Rajashri"</b>,<br/>
              &nbsp;&nbsp;focus: <b>"Full-Stack"</b>,<br/>
              &nbsp;&nbsp;status: <b>"Learning & Building"</b><br/>
              {'}'};
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Building skills through real projects.</h2>
          <p className="section-intro">
            I am a 3rd-year B.E. Computer Science and Engineering student at
            Saveetha Engineering College. I enjoy web development, UI/UX design,
            software development, and exploring cloud and emerging technologies.
          </p>
          <div className="about-grid">
            <div className="info-card">
              <strong>01</strong><h3>Web Development</h3>
              <p>Creating responsive and user-friendly websites with modern frontend technologies.</p>
            </div>
            <div className="info-card">
              <strong>02</strong><h3>Problem Solving</h3>
              <p>Turning practical problems into simple, useful software solutions.</p>
            </div>
            <div className="info-card">
              <strong>03</strong><h3>Continuous Learning</h3>
              <p>Exploring React, cloud computing, AI/ML, IoT, UI/UX, and game development.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt">
          <p className="eyebrow">SKILLS</p>
          <h2>Technologies I work with.</h2>
          <div className="skill-list">
            {skills.map(skill => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">PROJECTS</p>
          <h2>Things I've built.</h2>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{i + 1}</div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section alt">
          <p className="eyebrow">EDUCATION</p>
          <h2>My academic journey.</h2>
          <div className="timeline">
            <div>
              <span>2024 — 2028</span>
              <h3>B.E. Computer Science and Engineering</h3>
              <p>Saveetha Engineering College</p>
              <p>Currently pursuing 3rd year.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">CONTACT</p>
          <h2>Let's build something useful.</h2>
          <p className="section-intro">I'm open to internship opportunities, projects, and learning collaborations.</p>
          <div className="contact-links">
            <a href="mailto:your-email@example.com">Email Me ↗</a>
            <a href="https://www.linkedin.com/in/rajashriillayaraja/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/rajashri2006" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Rajashri I</span>
        <span>Designed & built with React</span>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)

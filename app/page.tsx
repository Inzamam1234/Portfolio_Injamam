import { ArrowUpRight, ArrowDown, Mail, MapPin, Phone, Download, GraduationCap, Award, Code2, BriefcaseBusiness, Server, BrainCircuit, Rocket, Workflow } from "lucide-react";
import { Github, Linkedin } from "@/components/portfolio/brand-icons";
import Navigation from "@/components/portfolio/navigation";
import ContactForm from "@/components/portfolio/contact-form";
import { projects, certifications } from "@/lib/portfolio";

function SectionTitle({ label, title, accent }: { label: string; title: string; accent?: string }) {
  return <header className="section-heading"><p className="eyebrow">{label} <span aria-hidden="true">—</span></p><h2>{title}{accent && <><br /><span className="purple">{accent}</span></>}</h2></header>;
}
function SocialLinks() {
  return <div className="socials"><a href="https://github.com/Inzamam1234" target="_blank" rel="noopener noreferrer" aria-label="Injamam on GitHub"><Github size={20} /></a><a href="https://www.linkedin.com/in/inzamam888" target="_blank" rel="noopener noreferrer" aria-label="Injamam on LinkedIn"><Linkedin size={20} /></a><a href="mailto:injamami85@gmail.com" aria-label="Email Injamam"><Mail size={20} /></a></div>;
}
const buildCapabilities = [
  { index: "01", Icon: Server, title: "Design the backend", description: "Secure, structured APIs that make complex workflows easier to use.", items: ["Java", "Spring Boot", "REST APIs", "Spring Security", "PostgreSQL"] },
  { index: "02", Icon: BrainCircuit, title: "Make systems intelligent", description: "Practical AI/ML solutions built around useful signals, not just experiments.", items: ["Python", "Machine Learning", "NLP", "Deep Learning", "Generative AI"] },
  { index: "03", Icon: Rocket, title: "Turn models into products", description: "Inference experiences that move beyond notebooks and into something people can try.", items: ["TensorFlow", "PyTorch", "Hugging Face", "Flask", "Streamlit"] },
  { index: "04", Icon: Workflow, title: "Ship with clarity", description: "A thoughtful workflow for testing, documenting, and delivering dependable work.", items: ["Git", "GitHub", "Maven", "Postman", "Jupyter"] },
];
function NeuralConstellation() {
  return <div className="constellation-field" aria-hidden="true">
    <svg className="constellation-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M4 20 C18 6 26 31 40 24 S65 6 84 20" />
      <path d="M8 64 C24 48 38 74 54 58 S79 46 96 70" />
      <path d="M25 92 C40 73 56 91 70 76 S88 83 99 54" />
      <path d="M40 24 C45 39 46 46 54 58" />
      <path d="M84 20 C77 37 82 49 96 70" />
      <path d="M25 92 C20 78 16 72 8 64" />
    </svg>
    <span className="constellation-orbit orbit-one" />
    <span className="constellation-orbit orbit-two" />
    <span className="constellation-node node-a"><i /><b>API</b></span>
    <span className="constellation-node node-b"><i /><b>DATA</b></span>
    <span className="constellation-node node-c"><i /><b>MODEL</b></span>
    <span className="constellation-node node-d"><i /><b>WEB</b></span>
    <span className="constellation-node node-e"><i /><b>SHIP</b></span>
    <span className="constellation-core"><i /><b>AI / ML</b></span>
  </div>;
}
function ProjectArt({ index }: { index: number }) {
  if (index === 0) return <div className="interview-art"><span className="art-word">Interview<span>IQ</span></span><div className="art-window"><div><i /><i /><i /></div><p>INTERVIEW JOURNAL</p><span className="mock-line" /><span className="mock-line short" /><div className="art-window-bottom"><Code2 size={19} /><span>Prepare. Reflect. Improve.</span></div></div></div>;
  if (index === 1) return <div className="network-art"><div className="network-core"><span>CNN</span><span>×</span><span>LSTM</span></div><div className="signal-bars">{[25, 45, 32, 76, 51, 90, 40, 65, 34, 55, 85, 44].map((height, n) => <i style={{ height }} key={n} />)}</div><span className="art-caption">NETWORK INTRUSION DETECTION</span></div>;
  if (index === 3) return <div className="company-art"><div className="company-lockup"><strong>PRIDE</strong><span>ENGINEERING SERVICES LLC</span></div><div className="facility-grid"><span>REFRIGERATION</span><span>COLD ROOMS</span><span>COMMERCIAL KITCHEN</span><span>BMS / MONITORING</span></div><span className="art-caption">MUSCAT / OMAN</span></div>;
  return <div className="nlp-art"><span className="art-word">Words matter<span>« »</span></span><div className="comment-bubble">Language → understanding<small>DistilBERT · multi-label classification</small></div><span className="art-caption">NLP / CONTENT MODERATION</span></div>;
}
export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="portfolio-shell">
      <Navigation />
      <aside className="profile-card" aria-label="About Injamam">
        <a href="#home" className="monogram" aria-label="Injamam, home"><img className="profile-photo" src="/profile-photo.png" alt="Portrait of Injamam" /></a>
        <p className="profile-overline">SOFTWARE & AI / ML</p><h2>Injamam<span className="purple">.</span></h2>
        <p className="profile-role">Backend & AI/ML developer.<br />Building with purpose.</p><p className="availability-tag"><span className="availability-icon" aria-hidden="true"><BriefcaseBusiness size={11} strokeWidth={2.4} /></span><span>OPEN TO ROLES</span></p>
        <div className="profile-rule" />
        <p className="profile-summary">I build secure Java & Spring Boot APIs and practical AI/ML systems with Python.</p>
        <p className="location"><MapPin size={14} /> Tiruchirappalli, India</p>
        <SocialLinks />
        <a className="button purple-button resume-button" href="/Injamam-Resume.pdf" download>Download resume <Download size={15} /></a>
        <p className="profile-note">B.Tech. CSE · AI & ML<br />SRM IST · Class of 2027</p>
      </aside>
      <main id="main" className="main-panel">
        <NeuralConstellation />
        <section id="home" className="hero">
          <div className="hero-top"><span className="mini-brand">INJAMAM / PORTFOLIO</span><span className="hero-label">Java <i /> Spring Boot <i /> AI / ML</span></div>
          <div className="hero-composition"><span className="hero-flourish" aria-hidden="true">D</span><span className="hero-spark" aria-hidden="true">✦</span><div className="hero-title"><p>Backend engineering + AI/ML</p><h1><span className="sr-only">D</span>EVELOPER<span className="purple">.</span></h1></div></div>
          <div className="hero-copy"><p>I build secure Java & Spring Boot APIs and practical AI/ML systems.</p><div className="button-row"><a className="button dark-button" href="#projects">View projects <ArrowUpRight size={17} /></a><a className="text-link" href="#contact">Contact me <ArrowUpRight size={16} /></a></div><div className="hero-proof" aria-label="Selected results"><span><strong>4</strong> featured projects</span><span><strong>97%+</strong> NIDS accuracy</span><span><strong>8.76</strong> / 10 GPA</span></div></div>
          <div className="hero-bottom"><span>CODE WITH PURPOSE. BUILD WITH CURIOSITY.</span><a href="#about" aria-label="Scroll to about"><ArrowDown size={18} /></a></div>
        </section>
        <section id="about" className="content-section about-section">
          <SectionTitle label="A little about me" title="MEET THE" accent="DEVELOPER." />
          <div className="about-copy"><p className="about-lede">I’m a Computer Science Engineering student and backend-focused developer who enjoys making complex systems feel simple.</p><p>I design secure Java and Spring Boot APIs, develop practical Python-based AI/ML solutions, and build software with clarity, performance, and real-world impact.</p><div className="about-snapshot about-profile-band" aria-label="Professional snapshot"><div className="about-profile-top"><span>WHAT I BUILD</span><span>BACKEND · AI/ML</span></div><div className="about-profile-body"><strong>Build systems people can trust.</strong><span>Secure backend engineering with practical AI/ML.</span></div><div className="about-profile-meta"><span>JAVA + SPRING BOOT</span><span>PYTHON + AI/ML</span><span className="about-profile-open"><span className="status-dot" /> OPEN TO ROLES</span></div></div></div>
        </section>
        <section id="skills" className="content-section build-section">
          <SectionTitle label="My engineering approach" title="HOW I" accent="BUILD." />
          <p className="skills-intro">I combine reliable backend engineering with practical AI/ML to turn ideas into clear, useful software.</p>
          <div className="build-grid" aria-label="How I build">
            {buildCapabilities.map(({ index, Icon, title, description, items }) => <article className="build-card" key={title}>
              <div className="build-card-top"><span className="build-index">{index}</span><span className="build-icon" aria-hidden="true"><Icon size={19} strokeWidth={1.8} /></span></div>
              <h3>{title}</h3><p>{description}</p>
              <div className="tags">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
              <span className="build-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
            </article>)}
          </div>
        </section>
        <section id="projects" className="content-section projects-section">
          <div className="heading-row"><SectionTitle label="Selected work" title="BUILT TO" accent="SOLVE." /><span className="side-note">Problem → build<br />→ outcome.</span></div>
          <div className="project-list">{projects.map((project, i) => <article className="project-card" key={project.title}>
            <div className={`project-art art-${i}`} aria-label={project.artLabel} role="img"><span className="art-top">{project.category}<span>0{i + 1}</span></span><ProjectArt index={i} /></div>
            <div className="project-info"><div className="project-meta"><span>{project.category}</span>{project.status && <span className="project-status">{project.status}</span>}</div><h3>{project.title}</h3><p>{project.description}</p><span className="project-highlights-label">What I built</span><ul className="project-highlights" aria-label={`${project.title} highlights`}>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul><p className="project-result"><strong>Outcome:</strong> {project.result}</p><div className="tags">{project.stack.map(item => <span key={item} className="tag">{item}</span>)}</div><a href={project.url} className="text-link" target="_blank" rel="noopener noreferrer">{project.status?.startsWith("Live") ? "View live site" : "View repository"} <ArrowUpRight size={16} /></a></div>
          </article>)}</div>
          <a className="button dark-button all-projects" href="https://github.com/Inzamam1234" target="_blank" rel="noopener noreferrer">More on GitHub <Github size={17} /></a>
        </section>
        <section id="experience" className="content-section">
          <SectionTitle label="Experience & leadership" title="BEYOND" accent="THE CODE." />
          <article className="timeline-item"><div className="timeline-date">OCT 2025<span>Leadership</span></div><div><h3>Yuva — 24-Hour Hackathon</h3><p className="muted">SRM Institute of Science and Technology, Tiruchirappalli</p><p>Coordinated end-to-end operations for a hackathon with 100+ participants. Managed a three-member logistics team and supported technical infrastructure across all event rounds.</p><a className="text-link" href="https://drive.google.com/file/d/183p7JDEj5Xb2MBf7T85eYB3eXcT49I7U/view?usp=sharing" target="_blank" rel="noopener noreferrer">View certificate <ArrowUpRight size={15} /></a></div></article>
        </section>
        <section id="education" className="content-section">
          <SectionTitle label="Learning & credentials" title="A STRONG" accent="FOUNDATION." />
          <article className="education-card"><GraduationCap size={27} /><div><span className="eyebrow">AUG 2023 — MAY 2027</span><h3>B.Tech. Computer Science & Engineering</h3><p>Specialization in Artificial Intelligence and Machine Learning</p><p className="muted">SRM Institute of Science and Technology<br />Tiruchirappalli campus</p></div><span className="gpa"><strong>8.76</strong>/ 10 GPA</span></article>
          <h3 className="certification-heading">Certifications <span aria-hidden="true">—</span></h3>
          <div className="cert-grid">{certifications.map((cert, i) => <a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-card"><div className="cert-top"><span>{cert.date}</span><Award size={19} /></div><span className="cert-number" aria-hidden="true">0{i + 1}</span><h4>{cert.title}</h4><p>{cert.provider}</p><span className="cert-detail">{cert.description}</span><span className="cert-link">View certificate <ArrowUpRight size={16} /></span></a>)}</div>
        </section>
        <section id="contact" className="content-section contact-section">
          <SectionTitle label="Get in touch" title="LET'S BUILD" accent="SOMETHING." />
          <p className="contact-intro">Have an opportunity in software engineering or AI/ML?<br />I&apos;d love to hear from you.</p>
          <div className="contact-grid"><div className="contact-details"><div className="contact-details-copy"><div className="contact-channel"><span className="contact-channel-icon"><Mail size={18} /></span><div><span className="contact-channel-label">EMAIL ADDRESS</span><a className="contact-email" href="mailto:injamami85@gmail.com">injamami85@gmail.com <ArrowUpRight size={16} /></a></div></div><div className="contact-channel"><span className="contact-channel-icon"><Phone size={18} /></span><div><span className="contact-channel-label">PHONE</span><a className="phone-link" href="tel:+918883049479">+91 88830 49479</a></div></div><div className="contact-channel"><span className="contact-channel-icon"><MapPin size={18} /></span><div><span className="contact-channel-label">LOCATION</span><p className="location">Tiruchirappalli, India</p></div></div><div className="contact-profiles"><span className="contact-channel-label">ONLINE PROFILES</span><div className="contact-profile-links"><a href="https://www.linkedin.com/in/inzamam888" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/Inzamam1234" target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a></div><a className="contact-resume" href="/Injamam-Resume.pdf" download><Download size={16} /> Download resume <ArrowUpRight size={14} /></a></div></div></div><ContactForm /></div>
        </section>
        <footer><a className="footer-name" href="#home">Injamam<span className="purple">.</span></a><p>© {new Date().getFullYear()} Injamam</p><div className="footer-right"><SocialLinks /><a href="#home" className="text-link">Back to top <ArrowUpRight size={16} /></a></div></footer>
      </main>
    </div>
  </>;
}

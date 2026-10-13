"use client";
import { useEffect, useState } from "react";
import { Home, UserRound, Code2, FolderOpen, BriefcaseBusiness, GraduationCap, Mail, Download, Menu, X } from "lucide-react";
const links = [ { id: "home", label: "Home", Icon: Home }, { id: "about", label: "About", Icon: UserRound }, { id: "skills", label: "Skills", Icon: Code2 }, { id: "projects", label: "Projects", Icon: FolderOpen }, { id: "experience", label: "Experience", Icon: BriefcaseBusiness }, { id: "education", label: "Education", Icon: GraduationCap }, { id: "contact", label: "Contact", Icon: Mail } ];
export default function Navigation() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => {
      const offset = window.innerWidth <= 760 ? 120 : 180;
      let current = "home";
      links.forEach(({ id }) => { if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= offset) current = id; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = "contact";
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);
      setActive(current);
    };
    window.addEventListener("scroll", update, { passive: true }); update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", escape); return () => window.removeEventListener("keydown", escape);
  }, []);
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".content-section, .build-card, .project-card, .education-card, .timeline-item, .cert-card, .contact-signal, .contact-channel, .contact-profiles, .contact-form"));
    if (!elements.length) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    elements.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty("--motion-delay", `${(index % 4) * 70}ms`);
    });
    if (reduced || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero || window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const move = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty("--cursor-x", `${event.clientX - bounds.left}px`);
      hero.style.setProperty("--cursor-y", `${event.clientY - bounds.top}px`);
      hero.classList.add("cursor-active");
    };
    const leave = () => hero.classList.remove("cursor-active");
    hero.addEventListener("pointermove", move, { passive: true });
    hero.addEventListener("pointerleave", leave);
    return () => { hero.removeEventListener("pointermove", move); hero.removeEventListener("pointerleave", leave); };
  }, []);
  useEffect(() => {
    const panel = document.querySelector<HTMLElement>(".main-panel");
    if (!panel || window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const move = (event: PointerEvent) => {
      const bounds = panel.getBoundingClientRect();
      panel.style.setProperty("--panel-cursor-x", `${event.clientX - bounds.left}px`);
      panel.style.setProperty("--panel-cursor-y", `${event.clientY - bounds.top}px`);
      panel.classList.add("cursor-active");
    };
    const leave = () => panel.classList.remove("cursor-active");
    panel.addEventListener("pointermove", move, { passive: true });
    panel.addEventListener("pointerleave", leave);
    return () => { panel.removeEventListener("pointermove", move); panel.removeEventListener("pointerleave", leave); };
  }, []);
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".project-card"));
    if (!cards.length || window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    const cleanups = cards.map((card) => {
      const move = (event: PointerEvent) => {
        const bounds = card.getBoundingClientRect();
        const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
        const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
        card.style.setProperty("--tilt-x", `${(horizontal * 7).toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${(vertical * -7).toFixed(2)}deg`);
        card.style.setProperty("--spot-x", `${((horizontal + 0.5) * 100).toFixed(1)}%`);
        card.style.setProperty("--spot-y", `${((vertical + 0.5) * 100).toFixed(1)}%`);
        card.classList.add("tilt-active");
      };
      const leave = () => {
        card.classList.remove("tilt-active");
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      };
      card.addEventListener("pointermove", move, { passive: true });
      card.addEventListener("pointerleave", leave);
      return () => { card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", leave); };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);
  return <nav className="navigation" aria-label="Main navigation"><div className="mobile-nav-top"><a href="#home" className="mobile-brand" onClick={() => setOpen(false)}>Injamam<span className="purple">.</span></a><a href="/Injamam-Resume.pdf" className="mobile-resume" download>Resume <Download size={14} /></a><button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="section-links" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div><div id="section-links" className={`nav-links ${open ? "is-open" : ""}`}>{links.map(({ id, label, Icon }) => <a key={id} href={`#${id}`} className={active === id ? "nav-item active" : "nav-item"} aria-current={active === id ? "location" : undefined} onClick={() => { setActive(id); setOpen(false); }}><Icon size={19} strokeWidth={1.6} /><span>{label}</span></a>)}<a className="nav-item nav-resume" href="/Injamam-Resume.pdf" download><Download size={19} /><span>Resume</span></a></div><span className="rail-note" aria-hidden="true">MADE OF CODE & CURIOSITY</span></nav>;
}

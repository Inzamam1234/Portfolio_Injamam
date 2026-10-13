"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, MessageSquare } from "lucide-react";
export default function ContactForm() {
  const [opened, setOpened] = useState(false);
  function compose(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name")).trim();
    const subjectText = String(data.get("subject")).trim() || `Portfolio inquiry from ${name}`;
    const subject = encodeURIComponent(subjectText);
    const body = encodeURIComponent(`${String(data.get("message")).trim()}\n\nFrom: ${String(data.get("name")).trim()}\nReply to: ${String(data.get("email")).trim()}`);
    window.location.href = `mailto:injamami85@gmail.com?subject=${subject}&body=${body}`;
    setOpened(true);
  }
  return <form onSubmit={compose} className="contact-form">
    <div className="contact-form-heading"><MessageSquare size={18} /><h3>Send a direct message</h3></div>
    <div className="contact-fields">
      <div className="contact-field"><label htmlFor="name">Your name <span aria-hidden="true">*</span></label><input id="name" name="name" autoComplete="name" required maxLength={100} placeholder="How should I address you?" /></div>
      <div className="contact-field"><label htmlFor="email">Your email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="your.email@company.com" /></div>
      <div className="contact-field contact-field-wide"><label htmlFor="subject">Subject</label><input id="subject" name="subject" maxLength={180} placeholder="A role, project, or collaboration" /></div>
      <div className="contact-field contact-field-wide"><label htmlFor="message">Message <span aria-hidden="true">*</span></label><textarea id="message" name="message" rows={5} required maxLength={2000} placeholder="Tell me what you're working on and how I can help…" /></div>
    </div>
    <div className="contact-form-footer"><p className="form-note" aria-live="polite">{opened ? "Draft ready — review it in your email app before sending." : "Your message opens as a draft in your email app."}</p><button className="button purple-button" type="submit">Send email <ArrowUpRight size={16} /></button></div>
  </form>;
}

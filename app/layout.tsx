import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Injamam | Backend & AI/ML Developer",
  description: "Injamam's portfolio of secure Java and Spring Boot APIs, Python AI/ML systems, deep learning, NLP projects, and software engineering work.",
  authors: [{ name: "Injamam" }],
  openGraph: { title: "Injamam | Backend & AI/ML Developer", description: "Secure Java/Spring Boot backends and practical Python AI/ML systems. Explore projects, skills, and credentials.", type: "website" },
  twitter: { card: "summary", title: "Injamam | Backend & AI/ML Developer", description: "Java, Spring Boot, Python, deep learning, and NLP projects." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Injamam",
    jobTitle: "Backend & AI/ML Developer",
    description: "Computer Science Engineering student building secure Java/Spring Boot backends and practical Python AI/ML systems.",
    sameAs: ["https://github.com/Inzamam1234", "https://www.linkedin.com/in/inzamam888"],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }} />{children}</body></html>;
}

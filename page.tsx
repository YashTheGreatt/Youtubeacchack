"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Menu,
  Shield,
  Terminal,
  X
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Code2,
    title: "SCRIPT LIBRARY",
    description:
      "A curated space for community-made tools, snippets, and experiments. Built to help creators learn and build responsibly."
  },
  {
    number: "02",
    icon: Terminal,
    title: "DEV RESOURCES",
    description:
      "Helpful references, clean examples, and practical notes for improving your Roblox Studio workflow."
  },
  {
    number: "03",
    icon: Shield,
    title: "COMMUNITY FIRST",
    description:
      "A place to share ideas, ask questions, and collaborate. Keep projects transparent, respectful, and safe."
  }
];

export default function Home() {
  const [trust, setTrust] = useState(100);
  const [menuOpen, setMenuOpen] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const startDelay = window.setTimeout(() => setEntered(true), 350);
    const start = window.setTimeout(() => {
      const duration = 2600;
      const startTime = performance.now();
      let frame = 0;

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // Ease-out cubic: quick start, smooth landing.
        const eased = 1 - Math.pow(1 - progress, 3);
        setTrust(Math.max(0, Math.round(100 * (1 - eased))));
        if (progress < 1) frame = window.requestAnimationFrame(animate);
        else setTrust(0);
        return frame;
      };

      frame = window.requestAnimationFrame(animate);
      return () => window.cancelAnimationFrame(frame);
    }, 900);

    return () => {
      window.clearTimeout(startDelay);
      window.clearTimeout(start);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="The Darkness home" onClick={closeMenu}>
          <span className="brand-mark"><Shield size={18} strokeWidth={1.8} /></span>
          <span>THE <b>DARKNESS</b></span>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>ABOUT</a>
          <a href="#library" onClick={closeMenu}>LIBRARY</a>
          <a href="#community" onClick={closeMenu}>COMMUNITY</a>
          <a className="nav-cta" href="#library" onClick={closeMenu}>
            EXPLORE <ArrowUpRight size={14} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className={`eyebrow reveal ${entered ? "visible" : ""}`}>
            <span className="status-dot" /> INDEPENDENT SCRIPTING COMMUNITY
          </div>
          <h1 className={`hero-title reveal delay-1 ${entered ? "visible" : ""}`}>
            WELCOME TO
            <span>THE <em>DARKNESS</em><i>.</i></span>
          </h1>
          <p className={`hero-copy reveal delay-2 ${entered ? "visible" : ""}`}>
            A darker side of creation. Discover resources, explore ideas,
            and build something that is yours.
          </p>
          <div className={`hero-actions reveal delay-3 ${entered ? "visible" : ""}`}>
            <a className="button button-light" href="#library">
              EXPLORE SCRIPTS <ArrowRight size={16} />
            </a>
            <a className="text-link" href="#about">
              DISCOVER THE PROJECT <ArrowDownRight size={16} />
            </a>
          </div>
        </div>

        <div className={`trust-panel reveal delay-3 ${entered ? "visible" : ""}`} aria-live="polite">
          <div className="trust-top">
            <span className="trust-label">THE DARKNESS</span>
            <span className="live-indicator"><span /> LIVE INTRO</span>
          </div>
          <div className="trust-number-wrap">
            <span className="trust-number">{String(trust).padStart(3, "0")}</span>
            <span className="trust-unit">/ 100</span>
          </div>
          <div className="trust-track"><span style={{ width: `${trust}%` }} /></div>
          <div className="trust-bottom">
            <span>TRUST LEVEL</span>
            <span>{trust === 0 ? "SIGNAL LOST" : "CALIBRATING..."}</span>
          </div>
          <div className="panel-watermark">D/00</div>
        </div>

        <div className="hero-footer">
          <span>EST. 2026 — BUILT FOR CREATORS</span>
          <a href="#about">SCROLL TO EXPLORE <span className="scroll-line" /></a>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="section-kicker"><span>01</span> / THE IDEA</div>
        <div className="intro-layout">
          <h2>LESS NOISE.<br /><span>MORE CONTROL.</span></h2>
          <div className="intro-copy">
            <p>
              THE DARKNESS is a monochrome concept for Roblox creators and
              scripters. A focused space for sharing knowledge, finding
              resources, and turning ideas into projects.
            </p>
            <p className="muted">
              No clutter. No unnecessary noise. Just the tools and people
              that move your work forward.
            </p>
          </div>
        </div>
        <div className="horizontal-rule" />
        <div className="stats-row">
          <div><strong>01</strong><span>VISION</span></div>
          <div><strong>B/W</strong><span>VISUAL LANGUAGE</span></div>
          <div><strong>∞</strong><span>ROOM TO CREATE</span></div>
        </div>
      </section>

      <section className="library section" id="library">
        <div className="section-heading">
          <div>
            <div className="section-kicker"><span>02</span> / WHAT'S INSIDE</div>
            <h2>THE <span>ARSENAL.</span></h2>
          </div>
          <p>Resources for curious minds<br />and creators who keep building.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.number}>
                <div className="feature-top">
                  <span>{feature.number} / 03</span>
                  <Icon size={21} strokeWidth={1.5} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href="#community" aria-label={`Learn more about ${feature.title}`}>
                  LEARN MORE <ArrowUpRight size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="community section" id="community">
        <div className="community-box">
          <div className="community-orb" aria-hidden="true" />
          <div className="section-kicker"><span>03</span> / JOIN THE MOVEMENT</div>
          <h2>MAKE YOUR<br /><span>MARK.</span></h2>
          <p>
            Got an idea? Start building. The next great project could begin
            with a single line of code.
          </p>
          <a className="button button-light" href="https://create.roblox.com/" target="_blank" rel="noreferrer">
            OPEN ROBLOX CREATOR HUB <ArrowUpRight size={16} />
          </a>
          <span className="community-note">UNOFFICIAL COMMUNITY CONCEPT · NOT AFFILIATED WITH ROBLOX CORPORATION</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark"><Shield size={16} /></span>
          <span>THE <b>DARKNESS</b></span>
        </a>
        <span>© 2026 THE DARKNESS — ROBLOX SCRIPTS</span>
        <a className="back-top" href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

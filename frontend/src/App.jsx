import { useEffect, useMemo, useState } from "react";
import "./index.css";

const dataFromCV = {
  name: "Abdelhadi ELIDRISSI",
  role: "Étudiant en 4ᵉ année — Ingénierie Informatique & Réseaux (MIAGE)",
  location: "Casablanca, Maroc",
  internship: "Stage de fin d’année — 2 mois à partir de juin 2026",
  email: "elabdolhadi@gmail.com",
  phone: "+212 766608150",
  links: [
    { label: "GitHub", href: "https://github.com/abdelhadi-01" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abdelhadi-elidrissi-55860134b/" },
  ],
  about:
    "Profil orienté solution : autonomie, rigueur, esprit d’analyse et travail d’équipe. Intéressé par le développement web, les SI et l’optimisation des workflows.",
  education: [
    {
      title: "École Marocaine des Sciences de l’Ingénieur (EMSI), Casablanca",
      time: "2024–2027",
      desc: "Cycle d’ingénieur — Ingénierie Informatique & Réseaux (Option MIAGE).",
    },
    { title: "Années préparatoires", time: "2022–2024", desc: "Prépa ingénieur." },
    {
      title: "Lycée Al Baida, Casablanca",
      time: "2021–2022",
      desc: "Baccalauréat Sciences Physiques & Chimiques — Mention Bien.",
    },
  ],
  experiences: [
    {
      company: "Omnishore — Group MedTech",
      role: "Stage — Plateforme de suivi du plan de charge & affectation des projets",
      time: "15 juillet – 15 août 2025 (1 mois)",
      bullets: [
        "Développement d’une plateforme interne (suivi plan de charge, affectation projets).",
        "Participation à l’analyse des besoins et présentation des fonctionnalités.",
      ],
    },
    {
      company: "Ministère de la Justice — Casablanca",
      role: "Stage — Cellule Technique : Analyse des Données",
      time: "23 juillet – 23 août 2024 (1 mois)",
      bullets: [
        "Analyse et vérification des dossiers.",
        "Reporting : édition et présentation de rapports hebdomadaires.",
        "Soutien à la gestion des données et mise à jour des SI.",
      ],
    },
  ],
  projects: [
    {
      name: "AH.FORMS — Plateforme de Formation en Ligne",
      stack: "Flask • MySQL • HTML/CSS • JavaScript",
      desc: "Gestion multi-rôles, création de cours, suivi des apprenants, génération de certificats.",
      tags: ["Multi-rôles", "Certificats", "Dashboard"],
    },
    {
      name: "OMNISHORE MANAGEMENT — Gestion de Projets",
      stack: "Django • MySQL • HTML/CSS • JavaScript",
      desc: "Création/gestion projets, affectation tâches, suivi d’avancement, Kanban, rapports, calendrier collaboratif.",
      tags: ["Kanban", "Rapports", "Planning"],
    },
    {
      name: "MERCEDES PARTS HUB — Vente de Pièces Détachées",
      stack: "Java • JavaFX/SceneBuilder • MySQL",
      desc: "Application desktop : catalogue, stock, commandes, facturation.",
      tags: ["Desktop", "Stocks", "Facturation"],
    },
  ],
  skills: [
    {
      group: "Langages",
      items: ["C", "C++", "Java", "JavaScript", "Python"],
    },
    {
      group: "Web & Frameworks",
      items: ["React", ".NET", "Flask", "Symfony", "HTML", "CSS", "PHP"],
    },
    {
      group: "Bases de données",
      items: ["MySQL", "Neo4j"],
    },
    {
      group: "Systèmes & Outils",
      items: ["Linux", "Oracle", "VS Code", "IntelliJ IDEA", "Visual Studio", "Code::Blocks"],
    },
  ],
  certs: ["JavaScript", "Linux", "POO (C++)", "React Native"],
  languages: ["Arabe : Maternelle", "Français : Courant", "Anglais : Courant"],
  interests: ["Veille technologique & open source", "Sport", "Bénévolat associatif", "Music"],
};

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0] || "");
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.2, 0.3, 0.4] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids.join("|")]);

  return active;
}

export default function App() {
  const d = dataFromCV;

  const sections = useMemo(
    () => [
      { id: "top", label: "Accueil" },
      { id: "about", label: "À propos" },
      { id: "skills", label: "Compétences" },
      { id: "experience", label: "Expériences" },
      { id: "projects", label: "Projets" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const active = useScrollSpy(sections.map((s) => s.id));
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onNav = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app">
      <div className="bg" aria-hidden="true" />

      {/* NAV */}
      <header className="nav">
        <div className="container nav__row">
          <button className="brand" onClick={() => onNav("top")} aria-label="Aller à l’accueil">
            <span className="brand__dot" />
            <span className="brand__text">{d.name}</span>
          </button>

          <nav className="nav__links" aria-label="Navigation principale">
            {sections.slice(1).map((s) => (
              <button
                key={s.id}
                className={`nav__link ${active === s.id ? "is-active" : ""}`}
                onClick={() => onNav(s.id)}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="nav__actions">
            <a className="btn btn--ghost" href="http://127.0.0.1:8000/admin/" target="_blank" rel="noreferrer">
              /admin
            </a>

            <button
              className="btn btn--ghost"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              aria-label="Changer le thème"
              title="Thème"
            >
              {theme === "dark" ? "☾" : "☀"}
            </button>

            <button
              className="btn btn--ghost nav__hamb"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`nav__mobile ${menuOpen ? "open" : ""}`}>
          <div className="container nav__mobileInner">
            {sections.slice(1).map((s) => (
              <button key={s.id} className="nav__mobileLink" onClick={() => onNav(s.id)}>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="container">
        {/* HERO */}
        <section id="top" className="hero">
          <div className="hero__grid">
            <div className="card hero__left">
              <div className="chips">
                <span className="chip">{d.role}</span>
                <span className="chip">{d.location}</span>
              </div>

              <h1 className="h1">
                Salut, je suis <span className="grad">{d.name}</span>
              </h1>

              <p className="lead">
                {d.about}
                <br />
                <strong className="lead__strong">{d.internship}</strong>
              </p>

              <div className="hero__cta">
                <button className="btn btn--primary" onClick={() => onNav("contact")}>
                  Me contacter
                </button>
                <button className="btn" onClick={() => onNav("projects")}>
                  Voir projets
                </button>
              </div>

              <div className="info">
                <span className="info__item">✉️ {d.email}</span>
                <span className="info__item">📞 {d.phone}</span>
              </div>
            </div>

            <aside className="card hero__right">
              <div className="avatar" aria-label="Photo">
                {/* Tu peux remplacer par ton image */}
                <div className="avatar__fallback">AE</div>
              </div>

              <div className="stack">
                {d.links.map((l) => (
                  <a key={l.label} className="pill" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="miniGrid">
                <div className="mini">
                  <div className="mini__k">Langues</div>
                  <div className="mini__v">{d.languages.join(" • ")}</div>
                </div>
                <div className="mini">
                  <div className="mini__k">Certifications</div>
                  <div className="mini__v">{d.certs.join(" • ")}</div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section__head">
            <h2 className="h2">À propos</h2>
            <p className="sub">Formation, profil et objectifs.</p>
          </div>

          <div className="grid2">
            <div className="card">
              <h3 className="h3">Profil</h3>
              <p className="p">{d.about}</p>
              <div className="note">{d.internship}</div>
            </div>

            <div className="card">
              <h3 className="h3">Formation</h3>
              <div className="timeline">
                {d.education.map((e) => (
                  <div key={e.title} className="titem">
                    <div className="titem__dot" />
                    <div className="titem__body">
                      <div className="titem__top">
                        <div className="titem__title">{e.title}</div>
                        <div className="titem__time">{e.time}</div>
                      </div>
                      <div className="titem__desc">{e.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section__head">
            <h2 className="h2">Compétences</h2>
            <p className="sub">Stack & outils (organisés par catégorie).</p>
          </div>

          <div className="grid2">
            {d.skills.map((g) => (
              <div key={g.group} className="card">
                <h3 className="h3">{g.group}</h3>
                <div className="tags">
                  {g.items.map((it) => (
                    <span key={it} className="tag">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="card">
              <h3 className="h3">Centres d’intérêt</h3>
              <div className="tags">
                {d.interests.map((it) => (
                  <span key={it} className="tag tag--soft">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section__head">
            <h2 className="h2">Expériences</h2>
            <p className="sub">Stages et contributions.</p>
          </div>

          <div className="list">
            {d.experiences.map((x) => (
              <article key={x.company} className="card item">
                <div className="item__top">
                  <div>
                    <div className="item__title">{x.company}</div>
                    <div className="item__role">{x.role}</div>
                  </div>
                  <div className="item__time">{x.time}</div>
                </div>
                <ul className="bullets">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section__head">
            <h2 className="h2">Projets</h2>
            <p className="sub">Sélection de projets académiques & stages.</p>
          </div>

          <div className="grid3">
            {d.projects.map((p) => (
              <article key={p.name} className="card project">
                <div className="project__head">
                  <h3 className="h3">{p.name}</h3>
                  <div className="muted">{p.stack}</div>
                </div>
                <p className="p">{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="section__head">
            <h2 className="h2">Contact</h2>
            <p className="sub">On peut discuter de ton stage / projets.</p>
          </div>

          <div className="grid2">
            <div className="card">
              <h3 className="h3">Coordonnées</h3>
              <div className="contact">
                <div className="contact__row"><span>✉️</span><span>{d.email}</span></div>
                <div className="contact__row"><span>📞</span><span>{d.phone}</span></div>
                <div className="contact__row"><span>📍</span><span>{d.location}</span></div>
              </div>

              <div className="stack" style={{ marginTop: 12 }}>
                {d.links.map((l) => (
                  <a key={l.label} className="pill" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="note" style={{ marginTop: 14 }}>
                Astuce : tu peux gérer le contenu via <b>/admin</b> (si tu utilises Django derrière).
              </div>
            </div>

            <div className="card">
              <h3 className="h3">Message rapide</h3>
              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("✅ Ici tu peux brancher l’API Django (/api/contact) si tu veux.");
                }}
              >
                <div className="form__row">
                  <label>Nom</label>
                  <input placeholder="Ton nom" required />
                </div>
                <div className="form__row">
                  <label>Email</label>
                  <input type="email" placeholder="ton@email.com" required />
                </div>
                <div className="form__row">
                  <label>Message</label>
                  <textarea placeholder="Dis-moi ce dont tu as besoin…" required />
                </div>
                <button className="btn btn--primary" type="submit">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div>© {new Date().getFullYear()} {d.name}</div>
          <div className="footer__right">
            <span className="muted">Built with React</span>
          </div>
        </footer>
      </main>
    </div>
  );
}

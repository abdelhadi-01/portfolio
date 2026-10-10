import React, {useState} from 'react';
import {profile, projects, experience, skills, certificates, education, languages, interests, repositoryDescriptions} from './data';
import repos from './repos.json';
export function Icon({name,size=20}){
 const paths={arrow:'M7 17 17 7M7 7h10v10',download:'M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5',mail:'M3 5h18v14H3ZM3 6l9 7 9-7',code:'m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18',data:'M3 5c0-4 18-4 18 0s-18 4-18 0v14c0 4 18 4 18 0V5M3 12c0 4 18 4 18 0',mobile:'M6 2h12v20H6ZM10 18h4',school:'m2 8 10-5 10 5-10 5-10-5Zm4 3v6c4 3 8 3 12 0v-6M22 8v8',office:'M5 3h14v18H5ZM9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1M11 21v-3h2v3',justice:'M12 3v18M4 7h16M7 7l-4 7h8L7 7Zm10 0-4 7h8l-4-7ZM7 21h10',github:'M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-3c3 0 6-1.5 6-5A4 4 0 0 0 19 7a4 4 0 0 0 0-4s-1 0-4 2a14 14 0 0 0-6 0C6 3 5 3 5 3a4 4 0 0 0 0 4 4 4 0 0 0-1 3c0 3.5 3 5 6 5a3.5 3.5 0 0 0-1 3v4',linkedin:'M3 3h18v18H3ZM7 10v7M7 7v.1M11 17v-7m0 3c0-4 6-4 6 0v4',menu:'M4 6h16M4 12h16M4 18h16'};
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]||paths.code}/></svg>;
}
const Out=({href,children,...p})=><a href={href} target="_blank" rel="noopener noreferrer" {...p}>{children}</a>;
function Organization({ kind }) {
  const [failed, setFailed] = useState(false);

  const logos = {
    emsi: ['./logos/emsi.png', 'EMSI'],
    omni: ['./logos/omnishore.png', 'Omnishore'],
    baida: ['./logos/al-baida.png', 'Groupe scolaire Al Baida'],
    payment: ['./logos/attijari-payment.png', 'Attijari Payment'],
    justice: ['./logos/ministere-justice.png', 'Ministère de la Justice'],
  };

  const logo = logos[kind];

  
  return (
    <span className={`organization-logo org-${kind}`}>
      {logo && !failed ? (
        <img
          src={logo[0]}
          alt={logo[1]}
          onError={() => setFailed(true)}
        />
      ) : kind === 'payment' ? (
        <span
          aria-label="Attijari Payment"
          style={{
            fontWeight: 800,
            fontSize: 18,
            color: '#145d75',
          }}
        >
          AP
        </span>
      ) : (
        <Icon
          name={
            kind === 'justice'
              ? 'justice'
              : kind === 'emsi' || kind === 'baida'
                ? 'school'
                : 'office'
          }
          size={27}
        />
      )}
    </span>
  );
}
const Title=({index,label,title,accent})=><div className="section-title"><p className="eyebrow"><span>{index}</span> / {label}</p><h2>{title} <span>{accent}</span></h2></div>;
export const allProjects=repos.map(r=>{const p=projects.find(x=>x.repo===r.name);return p?{...p,href:r.html_url}:{id:r.name,name:r.name.replaceAll('-',' '),repo:r.name,description:repositoryDescriptions[r.name]||r.description||'Retrouvez le code et les fichiers de ce projet sur GitHub.',category:['portfolio','transitweb','vite-react'].includes(r.name)?'Web':'Autres',stack:r.language?[r.language]:[],href:r.html_url};}).sort((a,b)=>(a.number||'99').localeCompare(b.number||'99'));
export default function App(){
 const [filter,setFilter]=useState('Tous'),[menu,setMenu]=useState(false);
 const visible=allProjects.filter(p=>filter==='Tous'||p.category===filter);
 return <><a className="skip" href="#main">Aller au contenu</a><header className="site-header"><a href="#accueil" className="brand">AE<span>.</span><span className="brand-label">ABDELHADI<br/>ELIDRISSI</span></a><button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-controls="nav" aria-label="Ouvrir ou fermer le menu"><Icon name="menu"/></button><nav id="nav" className={menu?'open':''} aria-label="Navigation principale">{[['apropos','À propos'],['projets','Projets'],['parcours','Parcours'],['competences','Compétences']].map(([id,label])=><a key={id} href={'#'+id} onClick={()=>setMenu(false)}>{label}</a>)}<a href="#contact" className="nav-cta" onClick={()=>setMenu(false)}>Contact <Icon name="arrow" size={15}/></a></nav></header><main id="main">
 <section className="hero shell" id="accueil"><div className="hero-content"><p className="eyebrow hero-status"><i/> ÉTUDIANT INGÉNIEUR · EMSI · 5ᵉ ANNÉE</p><h1>Abdelhadi<br/><span>Elidrissi</span><b>.</b></h1><p className="hero-role">Développement web, mobile <span>& data.</span></p><p className="hero-description">Je transforme des besoins métier en applications utiles, de l’interface utilisateur à la base de données.</p><div className="flex flex-wrap gap-3 hero-buttons"><a href="#projets" className="btn primary">Découvrir mes projets <Icon name="arrow"/></a><a href={profile.cv} download="CV-Abdelhadi-Elidrissi.pdf" className="btn secondary"><Icon name="download"/> Télécharger mon CV</a></div><div className="socials"><Out href={profile.github}><Icon name="github"/> GitHub</Out><Out href={profile.linkedin}><Icon name="linkedin"/> LinkedIn</Out><a href={'mailto:'+profile.email}><Icon name="mail"/> E-mail</a></div></div><div className="portrait-panel"><div className="portrait-grid"/><div className="portrait-orbit orbit-one"/><div className="portrait-orbit orbit-two"/><div className="portrait-frame"><img src={profile.photo} alt="Portrait d’Abdelhadi Elidrissi" fetchPriority="high"/></div><span className="portrait-cross cross-one">+</span><span className="portrait-cross cross-two">+</span><div className="floating-code"><span>&lt;/&gt;</span> CONCEVOIR. CODER. CONNECTER.</div><div className="portrait-location"><span className="live-dot"/> Casablanca, Maroc <span>33.57° N</span></div><div className="portrait-tag">WEB <span>×</span> MOBILE <span>×</span> DATA</div></div><div className="hero-strip"><span>DES IDÉES. DU CODE. DES SOLUTIONS.</span><div><span>Python</span><span>Java</span><span>React</span><span>SQL</span></div><a href="#apropos">Explorer ↓</a></div></section>
 <section className="shell about" id="apropos"><Title index="01" label="À PROPOS" title="Une approche concrète." accent="Une vraie curiosité."/><div className="about-grid"><p className="about-description">{profile.about}</p><div className="about-info"><div><span>FORMATION</span><strong>Ingénierie informatique & réseaux</strong></div><div><span>LOCALISATION</span><strong>{profile.location}</strong></div><div><span>LANGUES</span><strong>{languages.join(' / ')}</strong></div></div></div><div className="interest-line"><span>AU-DELÀ DU CODE</span>{interests.map(x=><span key={x}>{x}</span>)}</div></section>
 <section className="projects-area" id="projets"><div className="shell"><div className="heading-row"><Title index="02" label="PROJETS" title="Des idées qui prennent" accent="forme."/><Out href={profile.github} className="subtle-link">Tout mon GitHub <Icon name="arrow" size={17}/></Out></div><div className="project-toolbar"><div className="filters" role="group" aria-label="Filtrer les projets">{['Tous','Web','Mobile','Data','Desktop','Autres'].map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div><span aria-live="polite">{visible.length} projets</span></div><div className="project-grid">{visible.map(p=><Out href={p.href} key={p.id} className={'project-card project-'+p.category.toLowerCase()} aria-label={'Voir '+p.name+' sur GitHub'}><div className="project-visual"><span className="project-counter">{String(allProjects.indexOf(p)+1).padStart(2,'0')}</span><div className="visual-symbol"><Icon name={p.category==='Data'?'data':p.category==='Mobile'?'mobile':'code'} size={60}/></div><span className="visual-word">{p.category==='Data'?'DATA → INSIGHTS':p.category==='Mobile'?'CONNECT & MOVE':p.category==='Desktop'?'BUILD & MANAGE':'DESIGN → DEVELOP'}</span><span className="project-arrow"><Icon name="arrow"/></span></div><div className="project-body"><p className="project-type">{p.label||p.category}</p><h3>{p.name}</h3><p className="project-description">{p.description}</p><div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div><span className="repo-link">Voir le projet sur GitHub <Icon name="github" size={17}/></span></div></Out>)}</div></div></section>
<section className="shell journey" id="parcours">
  <Title
    index="03"
    label="PARCOURS"
    title="Apprendre, construire,"
    accent="progresser."
  />

  <div className="journey-grid">
    <div>
      <h3 className="column-title">
        <Icon name="office" />
        Expériences professionnelles
      </h3>

      <div className="timeline">
        {experience.map((e) => (
          <article className="journey-card" key={e.company}>
            <Organization kind={e.organization} />

            <div>
              <p className="date">{e.date}</p>
              <h4>{e.company}</h4>
              <p className="role">{e.role}</p>
              <p className="journey-text">{e.text}</p>

              {e.post && (
                <Out
                  href={e.post}
                  className="subtle-link"
                  style={{
                    marginTop: 14,
                    color: 'var(--cyan)',
                  }}
                >
                  <Icon name="linkedin" size={16} />
                  Voir ma publication LinkedIn
                  <Icon name="arrow" size={15} />
                </Out>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>

    <div>
      <h3 className="column-title">
        <Icon name="school" />
        Formation
      </h3>

      <div className="timeline">
        {education.map((e, i) => (
          <article className="journey-card" key={e.name}>
            <Organization kind={i < 2 ? 'emsi' : 'baida'} />

            <div>
              <p className="date">{e.date}</p>
              <h4>{e.name}</h4>
              <p className="journey-text">{e.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>
 <section className="skills-area" id="competences"><div className="shell"><Title index="04" label="COMPÉTENCES" title="Les outils derrière" accent="les solutions."/><div className="skills-grid">{skills.map((s,i)=><article className="skill-card" key={s.name}><div className="skill-icon"><Icon name={['code','office','data'][i]} size={26}/></div><span className="skill-index">0{i+1}</span><h3>{s.name}</h3><div className="tags">{s.items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div></div></section>
 <section className="shell certificates"><Title index="05" label="CERTIFICATIONS" title="Toujours en" accent="progression."/><div className="cert-grid">{certificates.map(c=><article key={c.name}><span className="cert-icon">✧</span><div><h3>{c.name}</h3><p>{c.issuer}</p><span>{c.date}</span></div></article>)}</div></section>
<section className="contact-area" id="contact">
  <div className="shell">
    <p className="eyebrow">06 / CONTACT</p>

    <h2>
      Construisons ensemble
      <br />
      <span>votre prochaine solution.</span>
    </h2>

    <p>
      Une opportunité de stage, un projet ou une collaboration ?
      <br />
      Je serais ravi d’échanger avec vous.
    </p>

    <a
      className="contact-email"
      href={`mailto:${profile.email}`}
    >
      {profile.email}
      <Icon name="arrow" size={28} />
    </a>

    <div className="flex flex-wrap gap-3">
      <a
        className="btn primary"
        href={`mailto:${profile.email}`}
      >
        <Icon name="mail" />
        Envoyer un e-mail
      </a>

      <Out className="btn secondary" href={profile.linkedin}>
        <Icon name="linkedin" />
        LinkedIn
      </Out>

      <Out className="btn secondary" href={profile.github}>
        <Icon name="github" />
        GitHub
      </Out>
      <a className="btn secondary" href="tel:+212766608150">
  📞 Télephone
</a>
      <a
        className="btn secondary"
        href={profile.cv}
        download="CV-Abdelhadi-Elidrissi.pdf"
      >
        <Icon name="download" />
        Télécharger mon CV
      </a>
    </div>

    <footer>
      <a className="brand" href="#accueil">
        AE<span>.</span>
      </a>
      
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>

      <span>{profile.location}</span>

      <a href="#accueil">Retour en haut ↑</a>
    </footer>
  </div>
</section> </main></>;
}

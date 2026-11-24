import { profile, experience, projects, skills, certifications, education } from "@/data/profile";

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <span className="section-num">{num}</span>
    </div>
  );
}

export default function Home() {
  const [first, ...rest] = profile.name.split(" ");
  const year = new Date().getFullYear();

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="nav-name">{profile.name}</a>
          <nav className="nav-links">
            <a href="#about" className="hide-sm">About</a>
            <a href="#experience" className="hide-sm">Experience</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="container">
        <section className="hero">
          <p className="eyebrow">{profile.role} · {profile.location}</p>
          <h1>
            {first} <em>{rest.join(" ")}</em>
          </h1>
          <p>{profile.tagline}</p>
          <div className="actions">
            <a className="link" href={`mailto:${profile.email}`}>Get in touch</a>
            {profile.resumeUrl && (
              <a className="link" href={profile.resumeUrl} target="_blank" rel="noreferrer">Résumé</a>
            )}
            {profile.links.map((l) => (
              <a key={l.label} className="link" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <SectionHead num="01" title="About" />
          {profile.about.map((p, i) => <p key={i}>{p}</p>)}
          <dl className="stats">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="experience" className="section">
          <SectionHead num="02" title="Experience" />
          {experience.map((job) => (
            <article key={job.company + job.period} className="entry">
              <div className="entry-meta">{job.period}<br />{job.location}</div>
              <div>
                <h3>{job.title} <span>· {job.company}</span></h3>
                <ul>{job.points.map((pt, i) => <li key={i}>{pt}</li>)}</ul>
                <div className="tags">{job.stack.map((s) => <span key={s}>{s}</span>)}</div>
              </div>
            </article>
          ))}
        </section>

        <section id="projects" className="section">
          <SectionHead num="03" title="Selected Work" />
          {projects.map((p) => {
            const body = (
              <>
                <div className="entry-meta">{p.year}</div>
                <div>
                  <h3>{p.name} {p.href && <span className="arrow">↗</span>}</h3>
                  <p>{p.description}</p>
                  <div className="tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                </div>
              </>
            );
            return p.href ? (
              <a key={p.name} className="entry" href={p.href} target="_blank" rel="noreferrer">{body}</a>
            ) : (
              <article key={p.name} className="entry">{body}</article>
            );
          })}
        </section>

        <section className="section">
          <SectionHead num="04" title="Skills" />
          <dl className="skills">
            {skills.map((g) => (
              <div key={g.group} className="skill-row">
                <dt>{g.group}</dt>
                <dd>{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section">
          <SectionHead num="05" title="Education" />
          {education.map((e) => (
            <article key={e.school} className="entry">
              <div className="entry-meta">{e.period}</div>
              <div>
                <h3>{e.degree} <span>· {e.school}</span></h3>
                {e.note && <p>{e.note}</p>}
              </div>
            </article>
          ))}
        </section>

        <section className="section">
          <SectionHead num="06" title="Certifications" />
          {certifications.map((c) => (
            <article key={c.name} className="entry">
              <div className="entry-meta">{c.issuer}</div>
              <div><h3>{c.name}</h3></div>
            </article>
          ))}
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">Contact</p>
          <h2>Let&rsquo;s work <em>together.</em></h2>
          <p>Open to new opportunities and conversations. The best way to reach me is by email.</p>
          <a className="link mail" href={`mailto:${profile.email}`}>{profile.email}</a>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <span>© {year} {profile.name}</span>
          <span>{profile.location}</span>
        </div>
      </footer>
    </>
  );
}

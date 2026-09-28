'use client';

import { useState } from 'react';
import {
  siApacheairflow,
  siDiagramsdotnet,
  siDocker,
  siGooglecloud,
  siGoogleanalytics,
  siNodedotjs,
  siPython,
  siReact,
  siSqlite,
  siTypescript,
} from 'simple-icons';

const skills = [
  { label: 'TypeScript', value: '95%', icon: siTypescript },
  { label: 'React / Next.js', value: '92%', icon: siReact },
  { label: 'Node.js', value: '94%', icon: siNodedotjs },
  { label: 'Python', value: '90%', icon: siPython },
  { label: 'SQL', value: '92%', icon: siSqlite },
  { label: 'Data Engineering', value: '89%', icon: siApacheairflow },
  { label: 'Data Analytics', value: '88%', icon: siGoogleanalytics },
  { label: 'AWS / Cloud', value: '88%', icon: siGooglecloud },
  { label: 'System Design', value: '91%', icon: siDiagramsdotnet },
  { label: 'Docker', value: '86%', icon: siDocker },
  { label: 'Kubernetes', value: '85%', icon: siGooglecloud },

];

const projects = [
  {
    title: 'yadag.io',
    category: 'Seasonal Labour Platform',
    link: 'https://yadag.io/',
    image: '/yadag.png',
    description:
      'Designed and developed RESTful API endpoints for worker management, worker profiles, farm and employer accounts, job postings, applications, and payroll workflows.',
    result: 'Simpler workforce operations',
    tags: [],
  },
  {
    title: 'purchs.io',
    category: 'Ecommerce Platform',
    image: '/purchs.png',
    description:
      'Ecommerce platform enhanced with a Freightcom.com API integration that ingests live freight payloads to improve purchasing and fulfillment workflows.',
    result: 'Live freight data',
    link: 'https://purchs.io/',
    tags: [],
  },
  {
    title: 'Budtenders Association of Canada',
    category: 'LLM Research Platform',
    link: 'https://gojo.budtendersassociation.ca/',
    image: '/bta.png',
    description:
      'LLM-powered cannabis research platform with a Research Director Agent and Platform Engagement Consultant Agent. The agents research cannabis-related information in Canada, organize and synthesize findings, and provide clear insights and recommendations.',
    result: 'Multi-agent research insights',
    tags: [],
  },
  {
    title: 'Amplicam Inc.',
    category: 'Air Quality Monitoring Portal',
    link: 'https://www.amplicam.com/',
    image: '/amplicam.png',
    description:
      'User-friendly web portal for monitoring real-time air quality data from environmental sensors, viewing historical trends, visualizing air quality indices, and receiving alerts when conditions change significantly.',
    result: 'Real-time environmental insights',
    tags: [],
  },
  {
    title: 'IDClear',
    category: 'Identity Verification Platform',
    link: 'https://idclearapp.com/',
    image: '/idclear.png',
    description:
      'Identity verification platform for Ghana Card, passport, and DVLA licence checks, combining document authenticity, OCR and MRZ validation, optional chip authentication, face liveness, and human review into one verification pipeline.',
    result: 'Fast, evidence-based verification',
    tags: [],
  },
];

const experience = [
  {
    role: 'DevOps Engineer',
    company: 'JOMACS · Contract Full-time',
    link: 'https://www.jomacsit.com/',
    period: 'Jan 2024 — Present · Canada · Remote',
    description:
      'Built and maintained CI/CD pipelines using GitHub Actions and Azure DevOps to automate application builds, testing, and deployments across development and production environments.',
  },
  {
    role: 'Software Engineer',
    company: 'Vision-Allies · Contract Full-time',
    link: 'https://vision-allies.com/',
    period: 'Apr 2021 — Oct 2023 · Ottawa, Ontario, Canada · Hybrid',
    description:
      'Designed, developed, and maintained scalable backend services and RESTful APIs to support core product features.',
  },
  {
    role: 'Data Engineer',
    company: 'Bitbuy · Freelance',
    link: 'https://bitbuy.ca/en-ca',
    period: 'Nov 2018 — Dec 2020 · Ontario, Canada · Remote',
    description:
      'Wrote and optimized SQL queries and scripts to clean, validate, and transform large datasets for analytics and crypto reporting.',
  },
  {
    role: 'Application Developer',
    company: 'First Atlantic Bank Ghana · Permanent Full-time',
    link: 'https://www.firstatlanticbank.com.gh/',
    period: 'Nov 2016 — Jul 2018 · Ghana · On-site',
    description:
      'Integrated applications with internal systems, third-party services, and databases to enable reliable data exchange and streamlined workflows.',
  },
];

export default function Page() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('owusumensahbernard@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      setCopiedEmail(false);
    }
  };

  const copyCode = async () => {
    const snippet = 'const dev = { handle: "bernard-owusu-mensah", stack: ["TypeScript", "React", "Node.js"], status: "available" };';
    try {
      await navigator.clipboard.writeText(snippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 1800);
    } catch {
      setCopiedCode(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#040b14] text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-40" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.18),_transparent_28%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-cyan-400/30 bg-cyan-500/10">
              <img src="/profile.png" alt="Bernard Owusu-Mensah" className="h-full w-full object-cover" />
            </span>
            <div>
              <div className="font-heading text-lg font-bold tracking-tight">codeBernard<span className="text-cyan-400">.</span></div>
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">portfolio</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 md:flex">
            {['Home', 'About', 'Skills', 'Work', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-300 transition hover:bg-white/6 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-emerald-300">
            Available for hire
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">
                Senior software & systems engineer
              </div>

              <h1 className="max-w-xl font-heading text-5xl font-black tracking-tight text-white md:text-6xl">
                Building <span className="text-cyan-400">reliable digital products</span> for ambitious teams.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                I’m Bernard Owusu-Mensah, an engineer focused on modern web experiences, resilient cloud systems, and product work that scales with real users.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#work" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:brightness-110">
                  View my work
                </a>
                <a href="#contact" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:text-white">
                  Get in touch
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-300">
                {['TypeScript', 'Python', 'SQL', 'React', 'Next.js', 'Data', 'Analytics', 'Node.js', 'AWS'].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono uppercase tracking-[0.14em] text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="glow-card rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">developer.config.ts</div>
                <button onClick={copyCode} className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300 transition hover:text-cyan-200">
                  {copiedCode ? 'copied' : 'copy'}
                </button>
              </div>

              <div className="space-y-2 font-mono text-sm text-slate-300">
                <p className="text-slate-500">// developer runtime</p>
                <p><span className="text-violet-300">const</span> <span className="text-sky-300">dev</span> = &#123;</p>
                <p className="pl-4">name: <span className="text-amber-300">"Bernard Owusu-Mensah"</span>,</p>
                <p className="pl-4">role: <span className="text-amber-300">"Full-Stack Engineer"</span>,</p>
                <p className="pl-4">focus: [<span className="text-emerald-300">"UX"</span>, <span className="text-emerald-300">"Systems"</span>, <span className="text-emerald-300">"Cloud"</span>],</p>
                <p className="pl-4">status: <span className="text-emerald-300">"Available"</span></p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-white/10 bg-slate-950/55">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glow-card rounded-3xl border border-white/10 bg-slate-900/60 p-8">
              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-cyan-400/30 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                <img
                  src="/profile.png"
                  alt="Bernard Owusu-Mensah portrait"
                  className="h-full w-full object-cover"
                  loading="eager"
                  onError={(event) => {
                    const target = event.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.parentElement?.querySelector('[data-fallback]') as HTMLElement | null;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />
                <div
                  data-fallback
                  className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-4xl font-black text-cyan-200"
                  style={{ display: 'none' }}
                >
                  CB
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="font-heading text-2xl font-bold text-white">Bernard Owusu-Mensah</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-400">Ontario, Toronto, Canada • Senior Software &amp; Systems Engineer</div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {[
                  ['7+', 'Years'],
                  ['20+', 'Projects'],
                  ['99.9%', 'Uptime'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/4 p-3">
                    <div className="font-heading text-2xl font-bold text-cyan-300">{value}</div>
                    <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">01 // About</div>
              <h2 className="mt-4 font-heading text-4xl font-black text-white md:text-5xl">Designing dependable experiences from product idea to deployment.</h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
                <p>
                  I help teams turn complex ideas into clear, polished software. My work sits at the intersection of frontend product design, backend architecture, and operational reliability.
                </p>
                <p>
                  Whether I’m improving user flows, building APIs, or tightening the infrastructure behind them, I care most about making systems clearer, faster, and easier to trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">02 // Skills</div>
              <h2 className="mt-3 font-heading text-4xl font-black text-white">Core strengths</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {skills.map((skill) => (
              <div key={skill.label} className="glow-card flex min-h-32 flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-center transition hover:-translate-y-1 hover:border-cyan-400/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white p-1.5 shadow-[0_0_16px_rgba(34,211,238,0.12)]">
                  <svg viewBox="0 0 24 24" role="img" aria-label={`${skill.label} logo`} className="h-full w-full" style={{ color: `#${skill.icon.hex}` }}>
                    <path d={skill.icon.path} fill="currentColor" />
                  </svg>
                </div>
                <div className="mt-3 text-sm font-semibold text-white">{skill.label}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-300">{skill.value} strength</div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="border-y border-white/10 bg-slate-950/60">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">03 // Selected work</div>
            <h2 className="mt-3 font-heading text-4xl font-black text-white">Recent projects</h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article key={project.title} className="glow-card rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:-translate-y-1">
                  {project.image && (
                    <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
                      <img src={project.image} alt={`${project.title} project visual`} className="h-40 w-full object-contain p-5" />
                    </div>
                  )}
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">{project.category}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">{project.result}</span>
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-heading text-2xl font-bold text-white transition hover:text-cyan-300"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <h3 className="font-heading text-2xl font-bold text-white">{project.title}</h3>
                  )}
                  <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                  {project.tags && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">04 Experience</div>
          <h2 className="mt-3 font-heading text-4xl font-black text-white">Career highlights</h2>

          <div className="mt-10 space-y-6 border-l border-white/10 pl-6">
            {experience.map((item) => (
              <div key={item.role} className="relative">
                <div className="absolute -left-[31px] top-2 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-cyan-400" />
                <div className="text-xl font-bold text-white">{item.role}</div>
                <div className="mt-1 font-mono text-sm text-cyan-300">
                  <a href={item.link} target="_blank" rel="noreferrer" className="transition hover:text-white">
                    {item.company}
                  </a>{' '}
                  · {item.period}
                </div>
                <p className="mt-3 max-w-2xl leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-slate-950/60">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300">05 // Contact</div>
              <h2 className="mt-3 font-heading text-4xl font-black text-white">Let’s build something meaningful.</h2>
              <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
                I’m open to product work, product engineering roles, and collaborations where thoughtful systems and clear UX matter.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button onClick={copyEmail} className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300 transition hover:bg-cyan-500/15">
                  {copiedEmail ? 'Email copied' : 'Copy email'}
                </button>
                <a href="mailto:owusumensahbernard@gmail.com" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-200 transition hover:border-cyan-400/40 hover:text-white">
                  owusumensahbernard@gmail.com
                </a>
              </div>
              <a href="tel:+14374409767" className="mt-3 inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs tracking-[0.16em] text-slate-200 transition hover:border-cyan-400/40 hover:text-white">
                +1 437-440-9767
              </a>
            </div>

            <div className="glow-card rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              {!submitted ? (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
                  />
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the project..."
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400/50 focus:outline-none"
                  />
                  <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 font-medium text-white transition hover:brightness-110">
                    Send message
                  </button>
                </form>
              ) : (
                <div className="flex min-h-[220px] flex-col items-center justify-center text-center">
                  <div className="mb-3 text-3xl">✅</div>
                  <div className="font-heading text-2xl font-bold text-white">Thanks for reaching out.</div>
                  <p className="mt-3 max-w-sm text-slate-300">I’ll get back to you soon with a thoughtful response.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>codeBernard @ {new Date().getFullYear()}</span>
          <span>Built with Next.js and Tailwind</span>
        </div>
      </footer>
    </div>
  );
}


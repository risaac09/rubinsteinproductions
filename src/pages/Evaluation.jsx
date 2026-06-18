import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { markReady, staggerEntrance } from '../hooks/useScrollAnimations.js'
import usePageMeta from '../hooks/usePageMeta.js'
import StructuredData from '../components/StructuredData.jsx'
import './Evaluation.css'

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const services = [
  {
    n: 'i.',
    name: 'Program Evaluation',
    desc: 'Formative, process, and outcome evaluations for state and federally funded programs. Logic models, theory of change, evaluation plan design.',
    keys: 'Logic models · Theory of change · CDC Framework',
  },
  {
    n: 'ii.',
    name: 'Data Collection & Analysis',
    desc: 'Surveys, interviews, focus groups, and administrative data review. Quantitative and qualitative analysis and reporting.',
    keys: 'Survey design · Qualitative coding · Admin data',
  },
  {
    n: 'iii.',
    name: 'Stakeholder Reporting',
    desc: 'Evaluation briefs, dashboards, and presentations for funders, leadership, and program staff. Formatted for the decisions each audience faces.',
    keys: 'Federal reporting · Briefs · Dashboards',
  },
  {
    n: 'iv.',
    name: 'Health Equity & Place-Based Evaluation',
    desc: 'Evaluation design for Health Equity Zone initiatives, community health assessments, and place-based programs addressing social determinants of health.',
    keys: 'HEZ · SDOH · Community health · Place-based',
  },
  {
    n: 'v.',
    name: 'Capacity Building & Advisory',
    desc: 'Readiness assessments, data infrastructure guidance, and technical assistance for organizations building evaluation capacity.',
    keys: 'Readiness · TA · Evaluation culture',
  },
]

const commitments = [
  {
    name: 'Utilization-focused',
    desc: 'Named primary users, theory of change, and intended use are fixed in writing before design begins. If the named user can’t tell me which decision the report will inform, we redesign the question before we collect data.',
  },
  {
    name: 'Participatory',
    desc: 'The people closest to the program help shape the questions and interpret the findings, but participation is scoped, not symbolic. Every engagement names which decisions are co-owned with community partners and which are mine to make.',
  },
  {
    name: 'Equity-centered',
    desc: 'Three questions ride every design: who benefits, who is missing from the data, whose voice shapes the narrative. They appear in the evaluation plan, not the appendix.',
  },
]

export default function Evaluation() {
  const containerRef = useRef(null)

  usePageMeta({
    title: 'Evaluation',
    description: 'Independent program evaluation: mixed-methods evaluation, logic models, theory of change, and stakeholder reporting for public health, safety, and community development programs. Isaac Rubinstein, MPH.',
    path: '/evaluation',
  })

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set('.scroll-reveal', { visibility: 'visible', opacity: 1 })
      return
    }
    const blocks = document.querySelectorAll('.eval-block')
    blocks.forEach(b => {
      markReady(b)
      gsap.fromTo(b, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: b, start: 'top 82%' },
      })
    })
    const cards = document.querySelectorAll('.eval-service-card')
    if (cards.length) staggerEntrance(document.querySelector('.eval-services'), cards)
  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Rubinstein Productions: Evaluation & Advisory',
        description: 'Independent program evaluation and advisory services for public health, safety, and community development programs.',
        url: 'https://rubinsteinproductions.com/evaluation',
        provider: { '@id': 'https://rubinsteinproductions.com/#isaac' },
        areaServed: { '@type': 'Country', name: 'United States' },
        serviceType: [
          'Program Evaluation',
          'Data Collection and Analysis',
          'Stakeholder Reporting',
          'Capacity Building and Advisory',
        ],
      }} />

      {/* ——— HERO ——— */}
      <section className="eval-hero section-pad">
        <div className="content-narrow">
          <p className="small-caps">Evaluation &amp; Advisory</p>
          <h1 className="eval-hero-headline">
            What works, for whom,<br />and <em>why.</em>
          </h1>
          <p className="eval-hero-lede">
            Isaac Rubinstein, MPH, is an independent program evaluator. He helps
            state agencies, foundations, and community coalitions answer the
            evaluation questions their decisions actually depend on, across health
            equity, traffic safety, behavioral health, and place-based initiatives.
          </p>
          <p className="eval-hero-cred">
            Member, American Evaluation Association · Evaluation Network of Rhode Island
          </p>
        </div>
      </section>

      {/* ——— ABOUT ——— */}
      <section className="bg-bone section-pad">
        <div className="content-wide eval-about eval-block scroll-reveal">
          <div className="eval-about-text">
            <p className="small-caps">About the practice</p>
            <div className="divider-short" />
            <p className="eval-lead">
              Trained in public health and community systems, he has led
              evaluations across multi-site, multi-stakeholder programs, from
              place-based health equity initiatives to statewide safety and
              behavioral health efforts.
            </p>
            <p>
              He works across quantitative and qualitative methods: survey design,
              administrative data analysis, focus groups, stakeholder interviews.
              Typical engagements involve state and federally funded initiatives in
              health equity, traffic safety, injury prevention, behavioral health,
              and community development, with a focus on social determinants of
              health and place-based approaches that center resident voice.
            </p>
          </div>
          <figure className="eval-portrait">
            <img
              src="/images/isaac-rubinstein-headshot.jpg"
              alt="Portrait of Isaac Rubinstein"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Isaac Rubinstein, MPH</figcaption>
          </figure>
        </div>
      </section>

      {/* ——— APPROACH ——— */}
      <section className="section-pad">
        <div className="content-narrow eval-block scroll-reveal">
          <p className="small-caps">Approach</p>
          <div className="divider-short" />
          <h2 className="eval-section-headline">Three commitments shape every engagement.</h2>
          <div className="eval-commitments">
            {commitments.map(c => (
              <div key={c.name} className="eval-commitment">
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
          <blockquote className="eval-quote">
            If the named user can’t tell me which decision the report will inform,
            we redesign the question before we collect data.
          </blockquote>
          <p className="eval-foundation">
            All of this sits on the <strong>CDC Framework for Program Evaluation</strong>.
            Agencies and funders get something they can act on: what is working,
            where it breaks down, what to try next.
          </p>
        </div>
      </section>

      {/* ——— SERVICES ——— */}
      <section className="bg-bone section-pad">
        <div className="content-wide eval-block scroll-reveal">
          <p className="small-caps">Services</p>
          <div className="divider-short" />
          <div className="eval-services">
            {services.map(s => (
              <div key={s.n} className="eval-service-card scroll-reveal">
                <span className="eval-svc-num">{s.n}</span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <span className="eval-svc-keys">{s.keys}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— SELECTED PROJECTS ——— */}
      <section className="section-pad">
        <div className="content-narrow eval-block scroll-reveal">
          <p className="small-caps">Selected projects</p>
          <div className="divider-short" />

          <article className="eval-project">
            <dl className="eval-project-meta">
              <div><dt>Role</dt><dd>Lead Evaluator</dd></div>
              <div><dt>Scope</dt><dd>60+ partners</dd></div>
              <div><dt>Funder</dt><dd>Federal &amp; local</dd></div>
            </dl>
            <div>
              <h3>Multi-Site Community Development Coalition Evaluation, Providence, RI</h3>
              <p>
                Led evaluation across a coalition focused on housing stability,
                workforce development, and resident engagement. Designed data
                collection systems, facilitated cross-site learning sessions,
                delivered quarterly reports to federal and local funders.
              </p>
            </div>
          </article>

          <article className="eval-project">
            <dl className="eval-project-meta">
              <div><dt>Role</dt><dd>Change &amp; Eval Lead</dd></div>
              <div><dt>Scope</dt><dd>Enterprise rollout</dd></div>
              <div><dt>Domain</dt><dd>Pediatric healthcare</dd></div>
            </dl>
            <div>
              <h3>Pediatric Healthcare System ERP Implementation Readiness</h3>
              <p>
                Led change management evaluation for a pediatric healthcare
                system’s ERP rollout. Developed readiness assessments, tracked
                adoption KPIs across finance, research, and supply chain, produced
                stakeholder communications and training reports.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ——— WRITING TEASER ——— */}
      <section className="bg-bone section-pad">
        <div className="content-narrow eval-block scroll-reveal">
          <p className="small-caps">Writing</p>
          <div className="divider-short" />
          <h2 className="eval-section-headline">The parts that don’t make it into the report.</h2>
          <p style={{ color: 'var(--ash)', marginBottom: '1.5rem' }}>
            Short essays on evaluation practice: naming the question before the
            methods, and the facilitation layer that turns a delivered dashboard
            into a used one.
          </p>
          <Link to="/writing" className="cta-link">Read the working notes →</Link>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="section-pad">
        <div className="content-narrow eval-block scroll-reveal" style={{ textAlign: 'center' }}>
          <p className="small-caps">Work together</p>
          <h2 className="eval-section-headline">Best fit, named plainly.</h2>
          <p style={{ color: 'var(--ash)', maxWidth: '38rem', margin: '0 auto 2rem' }}>
            Federally or state-funded evaluation contracts, place-based or
            multi-stakeholder programs, engagements where a named decision-maker
            can describe what the report needs to change. Available for
            project-based and contract work.
          </p>
          <Link to="/contact" className="btn-primary">Get in touch</Link>
        </div>
      </section>
    </div>
  )
}

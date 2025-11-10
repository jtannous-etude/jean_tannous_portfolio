import React from 'react'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Projects(){
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'fr'
  return (
    <section className="projects-section">
      <div className="container">
        <h2>{t('projects.title')}</h2>
        <div className="projects-grid">
          {projects.map(p => (
            <motion.article key={p.id} initial={{ y:20, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once:true }} className="project-card">
              {p.image && (
                <div style={{marginBottom:12}}>
                  <img src={p.image} alt={p.title[lang]} className="project-image" />
                </div>
              )}
              <h3>{p.title[lang]} — <span className="project-meta">{p.org} / {p.year}</span></h3>
              <ul>
                {p.bullets[lang].map((b,i) => <li key={i}>{b}</li>)}
              </ul>
              <div className="tech-badges">
                {p.tech.map((t, i) => <span key={i} className="tech-badge">{t}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

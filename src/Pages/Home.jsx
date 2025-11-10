import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home(){
  const { t } = useTranslation()
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <motion.div className="hero-content" initial={{ x: -40, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
            <h1>{t('hero.title')}</h1>
            <p className="subtitle">{t('hero.subtitle')}</p>
            <p className="lead">{t('about.p1')}<br/>{t('about.p2')}</p>
            <Link to="/projects" className="btn">{t('hero.cta')}</Link>
          </motion.div>
          <motion.div className="hero-image" initial={{ x: 40, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
            <div>
              <img src="/src/assets/photo.jpg" alt="photo" className="profile-img" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container education-section" style={{paddingTop:20}}>
        <h2>Formations</h2>
        <ul>
          <li>
            <strong>Bachelor Universitaire de Technologie en Informatique</strong> — Actuellement en 2ème année<br/>
            <em>Université de La Rochelle / 2024-2027</em>
          </li>
          <li>
            <strong>Baccalauréat général</strong><br/>
            <em>Lycée Notre Dame de la Compassion / Marmande / 2024</em>
          </li>
          <li>
            <strong>PSC1</strong> — Prévention et Secours Civiques de niveau 1 — 2021
          </li>
        </ul>
      </section>

      <section className="container experience-section" style={{paddingTop:10}}>
        <h2>Expérience Professionnelle</h2>
        <details className="exp-details">
          <summary>
            <span>Employé Polyvalent — Boulangerie-Pâtisserie / L’Ecrin des Douceurs</span>
            <small style={{color:'var(--muted)'}}>St Pierre de Mons | 2023, 2024 et 2025</small>
          </summary>
          <div className="exp-content">
            <div className="project-card" style={{padding:12,margin:0}}>
              <p style={{margin:0}}>Je travaille pendant chaque vacance scolaire ainsi que l’été. Chargé de l’accueil des clients et de la vente de produits. Aide du boulanger/pâtissier pour réaliser des tâches comme le façonnage, le placage ou encore la création de produits de pâtisserie.</p>
            </div>
          </div>
        </details>
      </section>
    </>
  )
}


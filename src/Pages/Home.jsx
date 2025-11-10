import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home(){
  const { t } = useTranslation()
  return (
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
  )
}

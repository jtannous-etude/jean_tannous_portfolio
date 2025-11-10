import React from 'react'
import { useTranslation } from 'react-i18next'
import { skillsData } from '../data/skills'

export default function Skills(){
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'fr'
  const qualities = skillsData.qualities[lang]
  return (
    <section className="skills-section">
      <div className="container skills-grid">
        <div>
          <h2>{t('skills.title')}</h2>
          {skillsData.categories.map(cat=> (
            <div key={cat.key} style={{marginBottom: '16px'}}>
              <h4>{cat.title[lang]}</h4>
              <div style={{marginTop: '8px'}}>
                {cat.items.map(s=> <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h4>{lang === 'fr' ? 'Qualités' : 'Qualities'}</h4>
          <ul>
            {qualities.map(q=> <li key={q}>{q}</li>)}
          </ul>
          <div style={{marginTop: '24px'}}>
            <h4>{lang === 'fr' ? 'Langues' : 'Languages'}</h4>
            <p>Arabe C1 / Anglais B1</p>
            <h4 style={{marginTop:'16px'}}>{lang === 'fr' ? 'Permis' : 'Driving license'}</h4>
            <p>Permis B + véhicule</p>
          </div>
        </div>
      </div>
    </section>
  )
}

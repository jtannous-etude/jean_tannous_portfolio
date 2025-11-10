import React from 'react'
import { useTranslation } from 'react-i18next'
import { skillsData } from '../data/skills'

export default function Skills(){
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'fr'
  const qualities = skillsData.qualities[lang]
  return (
    <section className="skills-section">
      <div className="container skills-columns">
        <div>
          <h2>{t('skills.title')}</h2>
          <div className="skills-grid">
            {[
              // sort categories by number of items (descending) so denser cards appear first
              ...skillsData.categories
            ].sort((a,b) => b.items.length - a.items.length).map(cat => {
              const sizeClass = cat.items.length > 3 ? 'skill-card--large' : 'skill-card--small'
              return (
                <div key={cat.key} className={`skill-card ${sizeClass}`} data-key={cat.key}>
                  <h4>{cat.title[lang]}</h4>
                  <div className="skill-card-body">
                    {cat.items.map(s => <span key={s} className="skill-tag">{s}</span>)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <aside>
          <div className="qualities-card">
            <h4>{lang === 'fr' ? 'Qualités' : 'Qualities'}</h4>
            <ul>
              {qualities.map(q => <li key={q}>{q}</li>)}
            </ul>
          </div>

          <div className="qualities-card" style={{marginTop:12}}>
            <h4>{lang === 'fr' ? 'Langues' : 'Languages'}</h4>
            <p>Arabe C1 / Anglais B1</p>
            <h4 style={{marginTop:'12px'}}>{lang === 'fr' ? 'Permis' : 'Driving license'}</h4>
            <p>Permis B + véhicule</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

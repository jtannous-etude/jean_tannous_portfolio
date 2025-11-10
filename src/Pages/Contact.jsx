import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact(){
  const { t } = useTranslation()
  const handleSubmit = (e) => {
    e.preventDefault()
    // sending disabled — fallback to direct email
    alert('L\'envoi de messages via le formulaire est désactivé. Merci d\'envoyer un email à : ' + (t('contact.email') || 'tjean0909@gmail.com'))
  }

  return (
    <section className="contact-section">
      <div className="container">
        <h2>{t('contact.title')}</h2>
        <div className="contact-card">
          <h3>Coordonnées</h3>
          <p className="mb-2">Email : <a href={`mailto:${t('contact.email')}`}>{t('contact.email')}</a></p>
          <p className="mb-2">Téléphone : {t('contact.phone')}</p>
          <p>Adresse : 367 Rue Merlot, 33210 St Pierre de Mons</p>
          <p style={{marginTop:12}}><a href="/src/assets/CV_Jean_Tannous.pdf" download className="btn btn--primary" style={{display:'inline-block',marginTop:8}}>{t('contact.download_cv')}</a></p>
        </div>
      </div>
    </section>
  )
}

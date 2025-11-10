import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Footer(){
  const { t } = useTranslation()
  return (
    <footer className="site-footer">
      <div className="container" style={{fontSize: '0.9rem'}}>© {new Date().getFullYear()} Jean — {t('hero.subtitle')}</div>
    </footer>
  )
}
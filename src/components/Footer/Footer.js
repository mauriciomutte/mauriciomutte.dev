import Image from 'next/image'

import styles from './Footer.module.css'

const links = [
  {
    title: 'Github',
    url: 'https://github.com/mauriciomutte',
    icon: '/static/images/social-github.svg',
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/mauriciomutte',
    icon: '/static/images/social-twitter.svg',
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/mauriciomutte/',
    icon: '/static/images/social-linkedin.svg',
  },
]

const Footer = () => (
  <footer className={styles.footer}>
    {links.map(({ title, url, icon }) => (
      <a key={title} href={url} target="_blank" className={styles.footer__link}>
        <span>{title}</span>
        <Image height="16" width="16" src={icon} alt={`${title} logo`} />
      </a>
    ))}
  </footer>
)

export default Footer

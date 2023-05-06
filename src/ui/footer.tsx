import Image from 'next/image'

import styles from './footer.module.css'

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

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {links.map(({ title, url, icon }) => (
        <a
          key={title}
          href={url}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footer__link}
        >
          <span>{title}</span>
          <Image src={icon} alt={`${title} logo`} height="16" width="16" />
        </a>
      ))}
    </footer>
  )
}

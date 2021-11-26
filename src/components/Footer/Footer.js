import styles from './Footer.module.css'

const links = [
  {
    title: 'Github',
    url: 'https://github.com/mauriciomutte',
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/mauriciomutte',
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/mauriciomutte/',
  },
]

const Footer = () => (
  <footer className={styles.footer}>
    {links.map(({ title, url }) => (
      <a key={title} href={url} target="_blank" className={styles.footer__link}>
        {title}
      </a>
    ))}
  </footer>
)

export default Footer

import Link from 'next/link'

import styles from './Header.module.css'

const pages = ['Blog', 'Sobre']

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.header__logo}>
          Maurício <span className={styles.header__logoBold}>Mutte</span>
        </a>
      </Link>

      <nav>
        <ul className={styles.nav__ul}>
          {pages.map((page) => {
            const pagePath = page.toLowerCase()

            return (
              <li key={page}>
                <Link href={pagePath}>
                  <a className={styles.nav__link}>{page}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header

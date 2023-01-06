import Link from 'next/link'

import styles from './Header.module.css'

const pages = ['Blog', 'Sobre']

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo}>
          Maurício <span className={styles.header__logoBold}>Mutte</span>
        </Link>

        <nav>
          <ul className={styles.nav__ul}>
            {pages.map((page) => {
              const pagePath = page.toLowerCase()

              return (
                <li key={page}>
                  <Link href={pagePath} className={styles.nav__link}>
                    {page}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

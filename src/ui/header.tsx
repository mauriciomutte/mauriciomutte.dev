import Link from 'next/link'

import styles from './header.module.css'

const pages = ['Blog', 'About']

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo}>
          Maurício <span className={styles.header__logoBold}>Mutte</span>
        </Link>

        <div>
          {pages.map((page) => {
            return (
              <Link key={page} href="/" className={styles.nav__link}>
                {page}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Header

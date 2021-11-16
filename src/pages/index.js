import Main from '../layouts/Main'
import styles from '../styles/Home.module.css'

function HomePage() {
  return (
    <div className={styles.home__wrapper}>
      <h1 className={styles.home__title}>Maurício Mutte</h1>
      <p className={styles.home__description}>
        Desenvolvedor Front-end na Juntos Somos Mais.
      </p>
    </div>
  )
}

HomePage.Layout = Main

export default HomePage

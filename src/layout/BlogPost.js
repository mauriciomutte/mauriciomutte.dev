import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from '../styles/Post.module.css'

const BlogPost = ({ children }) => {
  const { title, formattedDate } = children.props

  return (
    <>
      <Header />
      <main className="main">
        <article className={styles.post__article}>
          <header className={styles.post__header}>
            <h1 className={`${styles.post__title} gradient`}>{title}</h1>
            <time className={styles.post__date}>{formattedDate}</time>
          </header>
          <section className={styles.post__content}>{children}</section>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default BlogPost

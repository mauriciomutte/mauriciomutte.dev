import Link from 'next/link'

import styles from './BlogItem.module.css'

const BlogItem = ({ title, description, date, tags, slug }) => (
  <Link href={`/${slug}`} className={styles.blogItem__link}>
    <article className={styles.blogItem}>
      <h1 className={styles.blogItem__title}>{title}</h1>
      <h2 className={styles.blogItem__description}>{description}</h2>
      <div className={styles.blogItem__infos}>
        <div>
          {tags.map((tag) => (
            <span key={tag} className={styles.blogItem__tag}>
              {tag}
            </span>
          ))}
        </div>
        <time className={styles.blogItem__date}>{date}</time>
      </div>
    </article>
  </Link>
)

export default BlogItem

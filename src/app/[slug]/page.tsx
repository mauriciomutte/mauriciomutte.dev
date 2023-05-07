import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'

import { allPosts } from '@/contentlayer/generated'
import styles from '@/styles/Post.module.css'
import { formatDate } from '@/lib/utils'
import '@/styles/mdx.css'

type PostPageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) notFound()

  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div>
      <article className={styles.post__article}>
        <header className={styles.post__header}>
          <h1 className={`${styles.post__title} gradient`}>{post.title}</h1>
          <time className={styles.post__date}>{formatDate(post.date)}</time>
        </header>
        <section className={styles.post__content}>
          <MDXContent />
        </section>
      </article>
    </div>
  )
}

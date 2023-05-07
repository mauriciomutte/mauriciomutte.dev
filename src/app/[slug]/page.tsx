import { notFound } from 'next/navigation'

import { allPosts } from '@/contentlayer/generated'
import styles from '@/styles/Post.module.css'

type PostPageProps = {
  params: {
    slug: string
  }
}

async function getPostFromParams({ slug }: PostPageProps['params']) {
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) return null

  return post
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostFromParams(params)

  if (!post) return notFound()

  return (
    <div>
      <article className={styles.post__article}>
        <header className={styles.post__header}>
          <h1 className={`${styles.post__title} gradient`}>{post.title}</h1>
          <time className={styles.post__date}>{post.date}</time>
        </header>
        <section className={styles.post__content}>
          <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </section>
      </article>
    </div>
  )
}

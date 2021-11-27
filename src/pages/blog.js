import Head from 'next/head'

import { getAllPosts } from '../lib/blog'
import BlogItem from '../components/BlogItem/BlogItem'
import Main from '../layouts/Main'

function Blog(props) {
  const { title, description, posts } = props

  return (
    <div style={{ width: '100%' }}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://mauriciomutte.dev/sobre/" />
      </Head>

      <h1 className="gradient">Todas as publicações</h1>
      <div style={{ margin: '0 -24px' }}>
        {posts.map((post) => (
          <BlogItem
            key={post.slug}
            slug={post.slug}
            date={post.formattedDate}
            tags={post.tags}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
    props: {
      title: 'Blog | Maurício Mutte',
      description: 'Publicações de Maurício Mutte',
      posts,
    },
  }
}

Blog.Layout = Main

export default Blog

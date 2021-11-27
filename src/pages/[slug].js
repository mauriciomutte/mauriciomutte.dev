import Head from 'next/head'

import BlogPost from '../layouts/BlogPost'
import { getAllPosts, getPostBySlug, convertMarkdownToHtml } from '../lib/blog'

const Post = ({ title, description, slug, content }) => {
  return (
    <>
      <Head>
        <title>{title} | Maurício Mutte</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} | Maurício Mutte`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://mauriciomutte.dev/${slug}`} />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const slug = params.slug
  const post = getPostBySlug(slug)
  const content = await convertMarkdownToHtml(post.content || '')

  return {
    revalidate: 60,
    props: {
      ...post,
      content,
    },
  }
}

Post.Layout = BlogPost

export default Post

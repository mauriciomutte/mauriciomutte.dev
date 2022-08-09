import { useEffect } from 'react'
import Head from 'next/head'

import BlogPost from '../layout/BlogPost'
import { getAllPosts, getPostBySlug, convertMarkdownToHtml } from '../lib/blog'

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL

const Post = ({ title, description, slug, content }) => {
  const ogImageUrl = `${BASE_URL}/og-image.png?title=${title}`

  useEffect(() => {
    fetch(ogImageUrl)
  }, [title])

  return (
    <>
      <Head>
        <title>{title} | Maurício Mutte</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} | Maurício Mutte`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${BASE_URL}/${slug}`} />
        <meta property="og:locale" content="pt_BR" />
        <meta name="author" content="Maurício Mutte" />
        <meta name="twitter:creator" content="@mauriciomutte" />

        <meta name="image" content={ogImageUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:image:src" content={ogImageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:alt" content={title} />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
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

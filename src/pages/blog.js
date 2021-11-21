import Head from 'next/head'

import Main from '../layouts/Main'

function Blog(props) {
  const { title, description } = props

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://mauriciomutte.dev/sobre/" />
      </Head>

      <h1>Soon</h1>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Blog | Maurício Mutte',
      description: 'Publicações de Maurício Mutte',
    },
  }
}

Blog.Layout = Main

export default Blog

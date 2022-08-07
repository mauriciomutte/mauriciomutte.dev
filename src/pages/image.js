import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from '../styles/Image.module.css'

function ImagePage() {
  const { query } = useRouter()

  const title = query.title || ''

  return (
    <main className={styles.main}>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <h1 className="gradient">{title}</h1>
      <div className={styles.author}>
        <Image
          src="https://github.com/mauriciomutte.png"
          height={65}
          width={65}
          alt="Foto de perfil"
        />
        <h2>Maurício Mutte</h2>
      </div>
    </main>
  )
}

export default ImagePage

import '../styles/prism.css'
import '../styles/global.css'

const Noop = ({ children }) => children

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

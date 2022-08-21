import '../styles/global.css'
import '../../public/static/css/prism.css'

const Noop = ({ children }) => children

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

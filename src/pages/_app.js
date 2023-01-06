import { Inter, Fira_Code } from '@next/font/google'

import '../styles/global.css'
import '../../public/static/css/prism.css'

const fontInter = Inter({ subsets: ['latin'] })
const fontFiraCode = Fira_Code({ subsets: ['latin'] })

const Noop = ({ children }) => children

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop

  return (
    <>
      <style jsx global>
        {`
          :root {
            --inter-font: ${fontInter.style.fontFamily};
            --fira-code-font: ${fontFiraCode.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

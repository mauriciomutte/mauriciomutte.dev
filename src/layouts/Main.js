import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Main = ({ children }) => (
  <>
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </>
)

export default Main

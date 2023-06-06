import Layout from '../components/Layout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout className="font-mono" >
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

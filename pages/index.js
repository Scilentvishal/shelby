import Head from 'next/head'
import Main from '../components/home/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Best Makeup Services</title>
        <meta name="description" content="Best Makeup Services" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Main />


    </div>
  )
}

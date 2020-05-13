import Layout from '../../components/layout'
import Head from 'next/head'
import Upload from '../api/hello'

export default function Show ({ person }) {
  const handleClick = () => {
    // Upload()
  }

  return (
    <Layout>
      <Head>
        <title>Test</title>
      </Head>
      <section>
        <p>show</p>
        <button onClick={handleClick}>Click</button>
      </section>
    </Layout>
  )
}

/**
 * 研究一下js写请求
 */

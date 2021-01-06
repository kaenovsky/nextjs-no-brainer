import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>you fight like a dairy farmer 🐮🥛</p>
        <p>
          (follow me{' '}
          <a href="https://github.com/kaenovsky" target="_blank">on github</a>.)
        </p>
      </section>
    </Layout>
  )
}

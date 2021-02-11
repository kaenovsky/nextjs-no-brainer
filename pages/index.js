import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className='link-social-networks'>
          <a rel="noreferrer" href='https://www.github.com/kaenovsky' target='_blank'><Image alt='github' src="/github.svg" width={30} height={30} /></a>
          <a rel="noreferrer" href='https://www.linkedin.com/in/martinkaen' target='_blank'><Image alt='linkedin' src="/linkedin.svg" width={30} height={30} /></a>              
          <a rel="noreferrer" href='https://www.twitter.com/guybrushsays' target='_blank'><Image alt='twitter' src="/twitter.svg" width={30} height={30} /></a>
          <a rel="noreferrer" href='https://medium.com/@mkaen' target='_blank'><Image alt='medium' src="/medium.svg" width={30} height={30} /></a>
          <a rel="noreferrer" href='https://www.instagram.com/guybrushsays' target='_blank'><Image alt='instagram' src="/instagram.svg" width={30} height={30} /></a>
        </div>
        <div className='flaticon'>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </section>
    </Layout>
  )
}

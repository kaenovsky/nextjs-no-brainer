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
          <a rel="noreferrer" href='https://medium.com/@mkaen' target='_blank'><Image alt='medium' src="/medium.svg" width={30} height={30} /></a>
          <a rel="noreferrer" href='https://www.twitch.tv/jesuisguybrush/clip/SeductiveAttractiveDragonflyMcaT' target='_blank'><Image alt='twitch' src="/twitch.svg" width={30} height={30} /></a>
          <a rel="noreferrer" href='https://www.bandcamp.com/kaenovsky' target='_blank'><Image alt='bandcamp' src="/bandcamp.png" width={30} height={30} /></a>
        </div>
      </section>
      <section className='getcv'>
        <p><a className='btn-cv' target='_blank' href='https://github.com/kaenovsky/kaenovsky/blob/main/cv.md'>click here</a> to get a copy of my CV</p>
      </section>
      <section className='emailme'>
        <p>And feel free to email me: <a href='mailto:mkaen@vivaldi.net'>mkaen@vivaldi.net</a></p>
      </section>
    </Layout>
  )
}

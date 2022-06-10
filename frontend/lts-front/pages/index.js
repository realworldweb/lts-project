import Head from 'next/head'
import dynamic from 'next/dynamic'

import Standard from './layouts/standard';

import HeroImg from './components/hero-img';
import AdvSearch from './components/adv-search';

export default function Home() {
  return (
    <>
      <Head>
        <title>LTS hotel search</title>
        <meta name="description" content="Search and find your favourite hotels worldwide with LTS" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <Standard>
      <main>
      <HeroImg />
      <AdvSearch />
      </main>
      </Standard>
      
    </>
  )
}

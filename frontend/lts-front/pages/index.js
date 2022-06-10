import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import Standard from './layouts/standard';

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
        
      </main>
      </Standard>
      
    </>
  )
}

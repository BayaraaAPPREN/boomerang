import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section from "../components/Section/index"
import Team from '../components/Team'
import Video from '../components/Video'
import WhatWe from '../components/WhatWe/nuur'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Boomerang</title>
        <meta name="description" content="Boomerang.mn" />
        <meta property='og:title' content='Boomerang.mn'/>
        <link rel="icon" href="/logo.png" />
      </Head>
       <div className=''>
        <Navbar/>
        <Section/>
        <Video/>
        <WhatWe/>
        <Team/>
        <Footer/>
       </div>
    </div>
  )
}

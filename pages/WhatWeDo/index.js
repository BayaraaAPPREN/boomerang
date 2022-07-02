import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar/dednav"
import Team from "../../components/Team"
import WhatWe from "../../components/WhatWe"
import Head from 'next/head'
import Grid from "../../components/WhatWe/grid"
export default function WhatWeDo(){
    return(
        <div>
            <Head>
        <title>Boomerang</title>
        <meta name="description" content="Boomerang.mn" />
        <meta property='og:title' content='Boomerang.mn'/>
        <link rel="icon" href="/logo.png" />
      </Head>
            <Navbar/>
            <div className="bg-header bg-cover bg-center">
                <div className="py-24  md:mx-40 grid justify-center">
                    <h1 className=" rounded-lg px-4 xs:text-5xl md:text-7xl text-white  font-ExtraBold ">What We Do</h1>
                </div>
            </div>
            <WhatWe/>
            <Grid/>
            <Footer/>
        </div>
    )
}
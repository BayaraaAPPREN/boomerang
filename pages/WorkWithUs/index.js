import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar/dednav"
import Head from 'next/head'
import WorkWithUs1 from "../../components/WorkWithUs1/index"
export default function WorkWithUs(){
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
                <div className="py-24 md:mx-40 grid justify-center ">
                    <h1 className="xs:text-5xl md:text-7xl text-white  font-ExtraBold ">Work With Us</h1>
                </div>
            </div>
            <WorkWithUs1/>
            <Footer/>
        </div>
    )
}
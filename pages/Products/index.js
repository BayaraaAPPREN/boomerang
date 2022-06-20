import Footer from "../../components/Footer"
import DedNav from "../../components/Navbar/dednav" 
import Navbar from "../../components/Navbar/index"
import Team from "../../components/Team"
import Head from 'next/head'
export default function Products(){
    return(
        <div>
            <Head>
        <title>Boomerang</title>
        <meta name="description" content="Boomerang.mn" />
        <meta property='og:title' content='Boomerang.mn'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <DedNav/>
            <Navbar/>
            <div className="bg-header bg-cover bg-center">
                <div className="py-24 mx-40 ">
                    <h1 className="text-xl text-black font-bold uppercase font-Gothic">Home / Products</h1>
                    <h1 className="text-7xl text-blue-900  font-ExtraBold ">Products</h1>
                </div>
            </div>
            <div className="mx-20">
                <div className="flex flex-wrap">
                    <div className=" mt-16 md:w-1/2 xs:w-full">
                        <p>Maximus Distribution LLC is established to deliver the highest quality food products to Mongolian consumers.
                        Currently we have around 140 staff and reaching a sales turnover of over $20 million USD per year, Maximus Distribution LLC has become a leader in the field.
                        As a company, Maximus Distribution LLC continues to work at discovering the highest quality products with
                         the mission of building premium brands to Mongolian consumers at excellent prices.
                         Currently we have around 140 staff and reaching a sales turnover of over $20 million USD per year, Maximus Distribution LLC has become a leader in the field.
                        As a company, Maximus Distribution LLC continues to work at discovering the highest quality products with
                         the mission of building premium brands to Mongolian consumers at excellent prices. 
                         As a company, Maximus Distribution LLC continues to work at discovering the highest quality products with
                         the mission of building premium brands to Mongolian consumers at excellent prices. 
                        </p>
                    </div>
                    <div className="mx-20">
                        <img className="w-96" src="/logo.png"/>
                    </div>
                </div>
            </div>
            <Team/>
            <Footer/>
        </div>
    )
}
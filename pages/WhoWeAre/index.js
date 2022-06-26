import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar/dednav"
import Head from 'next/head'
import Team from "../../components/Team"
export default function Contact(){
    return(
        <div>
            <Head>
        <title>Boomerang</title>
        <meta name="description" content="Boomerang.mn"/>
        <meta property='og:title' content='Boomerang.mn'/>
        <link rel="icon" href="/logo.png" />
      </Head>
            <Navbar/>
            <div className="bg-header bg-cover bg-center">
                <div className="py-24  md:mx-40 grid justify-center ">
                    <h1 className="xs:text-5xl xl:text-7xl text-blue-900  font-ExtraBold ">Who We Are</h1>
                </div>
            </div>
            <div className="xs:mx-4 lg:mx-20">
                <div className="grid xs:grid-cols-1 lg:grid-cols-2">
                    <div className="grid col-span-1">
                        <div className="xs:mx-2 xs:my-8 xl:mx-10 xl:my-10 flex items-center">
                        <p>Maximus Distribution LLC is established to deliver the highest quality food products to Mongolian consumers.
                        Currently we have around 140 staff and reaching a sales turnover of over $20 million USD per year, Maximus Distribution LLC has become a leader in the field.
                        As a company, Maximus Distribution LLC continues to work at discovering the highest quality products with
                         the mission of building premium brands to Mongolian consumers at excellent prices.
                        </p>
                        </div>
                    </div>

                    <div className="grid col-span-1">
                        <div className="flex justify-center">
                           <img className="w-96" src="/logo.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <Team/>
            <Footer/>
        </div>
    )
}
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar/dednav"
import Head from 'next/head'
import Team from "../../components/Team"
// import { useState, useEffect } from "react"
// import RingLoader from "react-spinners/RingLoader";

export default function Contact(){
    // const [loading, setLoading] = useState(false)
    // useEffect(()=> {
    //     setLoading(true)
    //     setTimeout(()=>{
    //         setLoading(false) 
    //     },5000)
    // },[])

    return(
        <div className="">
            <div className="">
           
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
                    <h1 className="xs:text-5xl xl:text-7xl text-white  font-ExtraBold ">Who We Are</h1>
                </div>
            </div>
            <div className="xs:mx-4 lg:mx-20">
                <div className="grid xs:grid-cols-1 lg:grid-cols-2">
                    <div className="grid col-span-1">
                        <div className="xs:mx-2 xs:my-8 xl:mx-10 xl:my-10 flex items-center">
                        <p>Boomerang trade LLC is a trade and service company established to deliver healthy, organic, high-quality products and services that meet international standards to Mongolian consumers at excellent prices. We strive to discover the world&apos;s best products to match the demands of the domestic market. 
                            Our marketing strategy related to market access and brand recognition is unique and one of the main advantages of our company that maximizes our product sales. On behalf of the client company, we deal with all legal issues such as permits, customs and taxes related to the official sale in Mongolia on a contractual basis. 
                            Boomerang trade LLC is run by a team of top professionals and experts specialized in management, marketing, law, investment, and international trade. We have taken great care to select team members who not only have the right technical skills, but who also are strong facilitators and communicators. We are working with our customers and partners to establish long-term cooperation aiming at quality and value. Customer satisfaction is the final destination of our efforts.

                        </p>
                        </div>
                    </div>
                    <div className="grid col-span-1">
                        <div className="flex justify-center">
                           <img className="xs:py-20 md:py-36 xs:px-10 md:px-20" src="/logoTrans1.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <Team/>
            <Footer/>
            </div>
             
            </div>
        </div>
    )
}
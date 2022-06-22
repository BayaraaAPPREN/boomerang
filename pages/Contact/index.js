import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar/dednav"
import Head from "next/head"
export default function Contact(){
    return(
        <div>
            <Head>
        <title>Boomerang</title>
        <meta name="boomerang.mn" ccontent="initial-scale=1.0, width=device-width" />
        <meta property='og:title' content='Boomerang.mn'/>
        <link rel="icon" href="/logo.png" />
      </Head>
            <Navbar/>
            <div className="bg-header bg-cover bg-center">
                <div className="py-24 mx-40 ">
                    <h1 className="text-xl text-black font-bold uppercase font-Gothic">Home / Contact</h1>
                    <h1 className="text-7xl text-blue-900  font-ExtraBold ">Contact Us</h1>
                </div>
            </div>
            <div className="flex justify-center flex-wrap py-20">
                <div className="">
                    <div className="mt-8 mx-8 mb-16">
                        <h1 className="mb-4 text-lg"> {"<<<"} CONTACT US  {"  >>>"}</h1>
                        <div className="text-5xl font-medium tracking-tightest leading-none text-blue-800">
                            <h1>Feel free to get in </h1>
                            <h1>touch with </h1>
                            <h1>experts</h1>
                        </div>
                        <div className="flex items-center mt-6 ">
                            <div>
                              <img className="h-14" src="tele.png"/>
                            </div>
                            <div className="mx-8 text-xl text-blue-900">
                               <h1 className="text-medium">(+976) 77307733</h1>
                               <h1 className="text-medium">info@boomerang.mn</h1>
                            </div>
                        </div>
                        <div className="text-lg text-slate-600 font-medium mt-8">
                            <h1>1-504, Gegeenten complex, 15th
                                subdistrict, </h1>
                            <h1>Khan-Uul district,
                                Ulaanbaatar, Mongolia</h1>
                        </div>
                    </div>
                </div>
                <div className="mt-10 mx-10">
                    <div className="flex">
                        <input className="mr-6 bg-gray-200 py-4 appearance-none border-2 border-gray-200 rounded w-full px-16 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Your name"/>
                        <input className="bg-gray-200 py-4 appearance-none border-2 border-gray-200 rounded w-full px-16 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Email address"/>
                    </div>
                    <div className="flex my-4">
                        <input className="mr-6 bg-gray-200 py-4 appearance-none border-2 border-gray-200 rounded w-full px-16 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Phone number"/>
                        <input className="bg-gray-200 py-4 appearance-none border-2 border-gray-200 rounded w-full px-16 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Subject"/>
                    </div>
                    <div>
                       <textarea className="mr-6 bg-gray-200 pt-4 pb-20 appearance-none border-2 border-gray-200 rounded w-full px-16 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Write a message"/>
                    </div>
                    <div className="mt-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg">
                            Send a message
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
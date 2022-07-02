import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar/dednav"
import Head from "next/head"
import { useState } from "react";
export default function Contact(){
const [user, setUserData] = useState({ name:"", email:"", message:""})

   async function handleOnSubmit(e){
       e.preventDefault();
       console.log(user)
    }
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
                <div className="py-24  md:mx-40 grid justify-center ">
                    <h1 className="xs:text-5xl md:text-7xl text-white  font-ExtraBold ">Contact Us</h1>
                </div>
            </div>
            <div className="flex justify-center flex-wrap py-20">
                <div className="">
                    <div className="mt-8 mx-8 xs:mb-4 md:mb-16">
                        <h1 className="mb-4 text-lg"> {"<<<"} CONTACT US  {"  >>>"}</h1>
                        <div className="text-5xl font-medium tracking-tightest leading-none text-blue-800">
                            <h1 className="md:w-80">Feel free to get in touch with experts</h1>
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
                            <h1 className="md:w-80">1-504, Gegeenten complex, 15th Khan-Uul district,Ulaanbaatar, Mongolia subdistrict, </h1>
                        </div>
                    </div>
                </div>
                <div className="mt-10 mx-10">
                    <form method="post" onSubmit={handleOnSubmit}>
                    {/* <div className="flex">
                        <input className="mr-6 bg-gray-200 py-4 appearance-none border-2 border-gray-200 rounded w-full xs:px-2 md:px-16 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Your name"/>
                        <input className="bg-gray-200 py-4 appearance-none border-2 border-gray-200 rounded w-full xs:px-2 md:px-16 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="email" placeholder="Email address"/>
                    </div> */}
                    <div className="flex my-4">
                        <input className="mr-6 bg-gray-200 py-4 appearance-none border-2 border-gray-200 rounded w-full xs:px-2 md:px-16 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        value={user.name}
                        onChange={e => setUserData({...user, name:e.target.value})}
                        type="text" name="name" placeholder="Name"/>
                        <input className="bg-gray-200 py-4 appearance-none border-2 border-gray-200 rounded w-full xs:px-2 md:px-16 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        value={user.email}
                        onChange={e => setUserData({...user, email:e.target.value})}
                        type="email" name="email" placeholder="Email"/>
                    </div>
                    <div>
                       <textarea className="mr-6 bg-gray-200 pt-4 pb-20 appearance-none border-2 border-gray-200 rounded w-full px-16 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                       value={user.message}
                       onChange={e => setUserData({...user, message:e.target.value})}
                       type="text" name="message" placeholder="Write a message"/>
                    </div>
                    <div className="mt-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg">
                            Send a message
                        </button>
                    </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
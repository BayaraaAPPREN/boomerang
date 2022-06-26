import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar/dednav"
import Head from 'next/head'
export default function Products(){
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
                <div className="py-24  md:mx-40 grid justify-center ">
                    <h1 className="xs:text-5xl md:text-7xl text-blue-900  font-ExtraBold ">Products</h1>
                </div>
            </div>
            <div className="my-20">
                <div className="flex justify-center flex-wrap">
                    <div className="mx-4">
                        <div>
                            <img src="/image 14.png"/>
                            <h1 className="flex justify-center mt-4 text-xl">Hydrating Serum</h1>
                            <div className="flex justify-center mt-2">
                                <img className="h-10" src="/star.png"/>
                                <img className="h-10" src="/star.png"/>
                                <img className="h-10" src="/star.png"/>
                            </div>
                            <h1 className="flex justify-center mt-2 xs:lg md:text-2xl">49.999</h1>
                        </div>
                    </div>
                    <div className="mx-4">
                        <div>
                            <img src="/image 14.png"/>
                            <h1 className="flex justify-center mt-4 text-xl">Hydrating Serum</h1>
                            <div className="flex justify-center mt-2">
                                <img className="h-10" src="/star.png"/>
                                <img className="h-10" src="/star.png"/>
                                <img className="h-10" src="/star.png"/>
                            </div>
                            <h1 className="flex justify-center mt-2 xs:lg md:text-2xl">49.999</h1>
                        </div>
                    </div>
                    <div className="mx-4">
                        <div>
                            <img src="/image 14.png"/>
                            <h1 className="flex justify-center mt-4 text-xl">Hydrating Serum</h1>
                            <div className="flex justify-center mt-2">
                                <img className="h-10" src="/star.png"/>
                                <img className="h-10" src="/star.png"/>
                                <img className="h-10" src="/star.png"/>
                            </div>
                            <h1 className="flex justify-center mt-2 xs:lg md:text-2xl">49.999</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 mb-20">
                <div className="grid col-span-1">
                    <div className="grid justify-center xs:mx-8">
                        <img src="/image 17.png"/>
                    </div>
                </div>
                <div className="grid col-span-1">
                    <div className="">
                        <h1 className="text-5xl text-blue-900 xs:mx-8 mb-8">Hydrating Serum</h1>
                        <p className="md:w-96 xs:mx-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                             standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It 
                             has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
                             1960s with the release of Letraset sheets
                             containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div className="flex">
                            <div className="mx-8 my-8">
                                <h1 className="text-blue-500 uppercase">Price</h1>
                                <h1 className="text-5xl xs:text-3xl font-bold">45.000</h1>
                            </div>
                            <div className="mx-8 my-8">
                                <h1 className="text-blue-500 uppercase">Validity date</h1>
                                <h1 className="text-5xl xs:text-3xl font-bold">1 year</h1>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
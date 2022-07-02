
import Link from 'next/link'
export default function WorkWithUs1(){
    return(
        <div>
           <div className="grid justify-center mt-12">
                <h1 className="text-2xl xs:ml-4 md:ml-40 mb-8">Why Boomerang Trade LLC?</h1>
                <p className='xs:mx-4 sm:mx-20 md:mx-40'>We offer you a long-term and win-win cooperation. We handle all of the issues related to entering the Mongolian market officially, from the beginning to the end, regarding all of the laws, regulations and international treaties. Our team of professionals work to create loyal customers by intensely focusing on the value and reputation of the brand. Our branding technique makes us unique and irreplaceable. Our new projects and strategic decisions are based on market research and customer needs.
                     Our clients thoroughly enjoy our complete and qualified services related to accessing the Mongolian market. We invite you to become our partner.</p>
            </div>

        <div className='grid xs:grid-cols-1 md:grid-cols-2 mt-10 mb-20'>
            <div className='grid col-span-1'>
                <div className='flex justify-center'>
                    <div className='xs:mx-4 xs:mt-4 md:ml-40 mx-4'>
                        <div className="group">
                            <div className="px-8 py-8 group-hover:bg-slate-50 group-hover:rounded-xl border-t-8 border-blue-500 rounded-xl transition delay-75 shadow-2xl">
                              <div className="">
                                <h1 className="font-bold text-slate-900 group-hover:text-black text-center">To become partner</h1>
                                <p className=" mt-4 text-slate-600">If you are searching trustworthy partner that will help you to export your products to the Mongolian market officially 
                                and introduce your brand to the public, please get in touch with us.
                                We offer you long-term and win-win cooperation that aims the value and quality.</p>

                                <Link href="/Contact">
                                    <div className="border-2 border-blue-500 group-hover:border-white rounded-full mt-8 py-2 mx-10 my-10 group-hover:bg-blue-500 transition delay-75 cursor-pointer">
                                        <a>
                                        <h1 className="text-center group-hover:text-white">Contact</h1>
                                        </a>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid col-span-1'>
                <div className='flex justify-center'>
                    <div className='xs:mx-4 xs:mt-4 md:mr-40 mx-4'>
                       <div className="group">
                        <div className="px-8 py-8 group-hover:bg-slate-50 group-hover:rounded-xl border-t-8 border-blue-500 rounded-xl transition delay-75 shadow-2xl  cursor-pointer">
                            <div className="">
                                <h1 className="font-bold text-slate-900 group-hover:text-black text-center">To invest</h1>
                                <p className=" mt-4 text-slate-600">If you are seeking to invest in international trade, marketing and management service field, and importing business, don&apos;t hesitate to contact us. A professional team, 
                                long-term cooperation and trustworthy partners are waiting for you. We will do our best to maximize the return on your investment.</p>

                                    <Link href="/Contact">
                                    <div className="border-2 border-blue-500 group-hover:border-white rounded-full mt-8 py-2 mx-10 my-10 group-hover:bg-blue-500 transition delay-75 ">
                                        <a>
                                        <h1 className="text-center group-hover:text-white">Contact</h1>
                                        </a>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
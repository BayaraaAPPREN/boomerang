import Link from "next/link"
import Mobile from "./dopdown"



export default function dedNav(){
    return(
        // xs:invisible hidden md:block md:visible"
        <div className=" w-screen bg-blue-900">
            <div className="flex justify-center items-center text-Gothic z-40 relative text-slate-100 ">
                <Link href="/">
                <div className="ml-4 cursor-pointer">
                    <img className="xs:h-40 md:h-60" src="/logowhite.png"/>
                </div>
				</Link>
					<Mobile/>
                <Link href="/WhoWeAre">
                <div className="xs:invisible hidden md:block md:visible mx-2 cursor-pointer rounded-lg hover:text-black hover:bg-slate-100 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>Who we are</h1>
                </div>
                </Link>
                <Link href="/WhatWeDo">
                <div className="xs:invisible hidden md:block md:visible mx-2 cursor-pointer rounded-lg hover:text-black hover:bg-slate-100 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>What we do</h1>
                </div>
                </Link>
                <Link href="/Products">
                <div className=" mx-2 xs:invisible hidden md:block md:visible cursor-pointer rounded-lg hover:text-black hover:bg-slate-100 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>Products</h1>
                </div>
                </Link>
                <Link href="/WorkWithUs">
                <div className="mx-2 xs:invisible hidden md:block md:visible cursor-pointer rounded-lg hover:text-black hover:bg-slate-100 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>Work with us</h1>
                </div>
                </Link>
                <Link href="/Contact">
                    <div className="mx-2 xs:invisible hidden md:block md:visible cursor-pointer rounded-lg hover:text-black hover:bg-slate-100 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                        <h1>Contact us</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}
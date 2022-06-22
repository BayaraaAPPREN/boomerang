import Link from "next/link"

export default function NavbarDed(){
    return(
        <div className=" w-screen xs:invisible hidden md:block md:visible">
            <div className="flex justify-center items-center text-Gothic z-40 relative text-slate-800">
                <Link href="/">
                <div className="mx-14 cursor-pointer">
                    <img className="h-60" src="/logoTrans.png"/>
                </div>
                </Link>
                
                <Link href="/WhoWeAre">
                <div className="mx-2 cursor-pointer rounded-lg hover:text-black hover:bg-slate-100 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>Who we are</h1>
                </div>
                </Link>
                <Link href="/WhatWeDo">
                <div className="mx-2 cursor-pointer rounded-lg hover:text-black hover:bg-slate-100 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>What we do</h1>
                </div>
                </Link>
                <Link href="/Products">
                <div className=" mx-2 cursor-pointer rounded-lg hover:text-black hover:bg-slate-100 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>Products</h1>
                </div>
                </Link>
                <Link href="/WorkWithUs">
                <div className="mx-2 cursor-pointer rounded-lg hover:text-black hover:bg-slate-100 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>Work with us</h1>
                </div>
                </Link>
                <Link href="/Contact">
                    <div className="mx-2 cursor-pointer rounded-lg hover:text-black hover:bg-slate-100 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                        <h1>Contact us</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}
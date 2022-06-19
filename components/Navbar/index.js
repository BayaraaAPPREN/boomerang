import Link from "next/link"

export default function Navbar(){
    return(
        <div className=" w-screen xs:invisible hidden md:block md:visible">
            <div className="flex justify-center items-center text-Gothic">
                <div className="mx-14">
                    <img className="h-40" src="/logo.png"/>
                </div>
                <div className="mx-2 rounded-lg cursor-pointer hover:text-white hover:bg-blue-900 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>Home</h1>
                </div>
                <Link href="/WhoWeAre">
                <div className="mx-2 cursor-pointer rounded-lg hover:text-white hover:bg-blue-900 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>Who we are</h1>
                </div>
                </Link>
                <div className="mx-2 cursor-pointer rounded-lg hover:text-white hover:bg-blue-900 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>What we do</h1>
                </div>
                <div className=" mx-2 cursor-pointer rounded-lg hover:text-white hover:bg-blue-900 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>Products</h1>
                </div>
                <div className="mx-2 cursor-pointer rounded-lg hover:text-white hover:bg-blue-900 hover:rounded-lg hover:py-2 hover:px-6 transition delay-75 px-6 py-2">
                    <h1>Work with us</h1>
                </div>
                <Link href="/Contact">
                <div className="mx-10 cursor-pointer rounded-lg border-2 uppercase border-sky-300 bg-blue-600 rounded-lg px-8 py-2 text-slate-100 hover:bg-blue-900 transition delay-75">
                    <h1>Contact us</h1>
                </div>
                </Link>
            </div>
        </div>
    )
}


export default function Team(){
    return(
        <div>
            <div className="flex flex-wrap items-center xs:mx-4 lg:mx-20">
                {/* <img src="/line1.png"/> */}
                <h1 className="mx-8 text-4xl text-blue-900">OUR TEAM</h1>
            </div>
            <div className="flex justify-center flex-wrap my-16 mb-32">
                <div className="text-center mx-5">
                    <img src="/tseej1.png"/>
                    <h1 className="text-xl mt-4">BAT-ERDENE. O</h1>
                    <h1 className="text-green-600 border-b-2 py-2 border-w-8">Founder, CEO</h1>
                </div>
                <div className="text-center mx-5">
                    <img src="/tseej2.png"/>
                    <h1 className="text-xl mt-4">NARANGARAV. B </h1>
                    <h1 className="text-green-600 border-b-2 py-2 border-w-8">Head of marketing division</h1>
                </div>
                <div className="text-center mx-5">
                    <img src="/tseej3.png"/>
                    <h1 className="text-xl mt-4">BAYARZAYA. B </h1>
                    <h1 className="text-green-600 border-b-2 py-2 border-w-8 w-60 ml-4">Head of communications and development division</h1>
                </div>
                <div className="text-center mx-5">
                    <img src="/tseej4.png"/>
                    <h1 className="text-xl mt-4">UNDRAM. J </h1>
                    <h1 className="text-green-600 border-b-2 py-2 border-w-8">Head of importing business division</h1>
                </div>
            </div>
        </div>
    )
}


export default function Grid(){
    return(
        <div>
            <div className="grid xs:grid-cols-1 md:grid-cols-2">
                <div className="grid col-span-1">
                    <div className="grid xs:justify-start md:justify-end xs:mx-4   ">
                        <div>
                            <h1 className="text-blue-600">FINANCIAL IMPACT</h1>
                            <h1 className="text-3xl uppercase">New Trends In Social Media</h1>
                            <p className="w-80">New Trends In Social Media New Trends In Social Media New Trends In Social Media New Trends In Social Media</p>
                        </div>
                        
                    </div>
                </div>
                <div className="grid col-span-1">
                    <div className="grid justify-start xs:mx-2 md:mx-8 xs:mt-4">
                        <div>
                            <img src="/image10.png"/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid xs:grid-cols-1 md:grid-cols-2">
                <div className="grid col-span-1 xs:invisible hidden md:block md:visible">
                    <div className="grid justify-end">
                        <img src="/image10.png"/>
                    </div>
                </div>
                <div className="grid col-span-1">
                    <div className="grid justify-start xs:mx-2 md:mx-8 xs:mt-4">
                        <div className="grid xs:justify-start md:justify-end xs:mx-4 xs:mt-8">
                        <div>
                            <h1 className="text-blue-600">FINANCIAL IMPACT</h1>
                            <h1 className="text-3xl uppercase">New Trends In Social Media</h1>
                            <p className="w-80">New Trends In Social Media New Trends In Social Media New Trends In Social Media New Trends In Social Media</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-1 xs:visible hidden xs:block md:invisible">
                    <div>
                        <img src="/image10.png"/>
                    </div>
                </div>
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2">
                <div className="grid col-span-1">
                    <div className="grid xs:justify-start md:justify-end xs:mx-4   ">
                        <div>
                            <h1 className="text-blue-600">FINANCIAL IMPACT</h1>
                            <h1 className="text-3xl uppercase">New Trends In Social Media</h1>
                            <p className="w-80">New Trends In Social Media New Trends In Social Media New Trends In Social Media New Trends In Social Media</p>
                        </div>
                        
                    </div>
                </div>
                <div className="grid col-span-1">
                    <div className="grid justify-start xs:mx-2 md:mx-8 xs:mt-4">
                        <div>
                            <img src="/image10.png"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
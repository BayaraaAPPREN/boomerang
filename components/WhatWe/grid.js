import Test from "./test";


export default function Grid(){
    return(
        <div>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 xs:mt-16">
                <div className="grid col-span-1">
                    <div className="grid xs:justify-end md:justify-end xs:mx-4   ">
                        <div className="xs:mx-2 md:mx-16">
                            <h1 className="text-blue-600 uppercase">Marketing consulting </h1>
                            <h1 className="text-3xl uppercase">Marketing consulting </h1>
                            <p className="w-full">  Marketing consulting service is one of the main operations of Boomerang trade LLC. We help clients 
                            to acheive fruitful growth through strategic marketing, branding, and digital marketing innovation. We offer highly specialized 
                            services and are adept at identifying and delivering market-driven opportunities. The main problem we realize is that many companies place 
                            their products and services in the market without conducting proper market research. Consequently, it leads to many difficulties that require 
                            much more time and cost. We would like to suggest you cooperate with marketing 
                            professionals who are specialized in strategic marketing, branding and digital marketing. We will fill the gaps in your marketing.</p>
                        </div>
                    </div>
                </div>
                <div className="grid col-span-1">
                    <div className="grid justify-start xs:mx-2 md:mx-8 xs:mt-4">
                        <div>
                            <img className="rounded-lg" src="/3.jpg"/>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid xs:grid-cols-1 md:grid-cols-2">
                <div className="grid col-span-1 xs:invisible hidden md:block md:visible">
                    <div className="grid justify-end">
                        <img className="p-10 rounded-lg" src="/1.jpg"/>
                    </div>
                </div>
                <div className="grid col-span-1">
                    <div className="grid justify-start items-center xs:mx-2 md:mx-8 xs:mt-4">
                        <div className="grid xs:justify-start md:justify-end xs:mx-4 xs:mt-8">
                        <div className="xs:mx-2 md:mx-4">
                            <h1 className="text-blue-600 uppercase">Importing business</h1>
                            <h1 className="text-3xl uppercase">Importing business</h1>
                            <p className="w-full">We offer imports & customs brokerage services to handle all your goods coming into
                             Mongolia. Our specialists support you through each step of the trading process, from planning to execution. We can be your distributor 
                             in Mongolia with our extensive knowledge of importing business. We can handle multiple roles and fulfil requirements, including discussing and
                              concluding contracts with buyers in Mongolia. We aim to deliver products to customers 
                            in the most efficient and economical way. Our respected team of importers and salespeople are ready to assist you in any possible way.</p>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <div className="xs:visible hidden xs:block md:invisible">
                    <div className="grid col-span-1 ">
                        <div>
                            <img src="/image10.png"/>
                        </div>
                    </div>
                </div> */}
                <Test/>
            </div>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 mb-8">
                <div className="grid col-span-1 xs:mt-8 ">
                    <div className="grid xs:justify-start md:justify-end xs:mx-4   ">
                        <div className="xs:mx-2 md:mx-16">
                            <h1 className="text-blue-600">Legal services</h1>
                            <h1 className="text-3xl uppercase">Legal services</h1>
                            <p className="w-full">We handle communications with all related parties during the entire process, taking care of documentation, 
                            handling payment, and clearing legalities with Mongolian Customs for your products coming into Mongolia. Customs regulations and laws 
                            concerning the import and export of goods are constantly changing all over the world, sometimes even on a daily basis. Thus, our professional team aims to use all of the 
                            facilitations reflected in laws, regulations and free trade agreements between countries as efficient as possible.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="grid col-span-1">
                    <div className="grid justify-start xs:mx-2 md:mx-8 xs:mt-4">
                        <div>
                            <img  className="rounded-lg" src="/2.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
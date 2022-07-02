import Footer from "../Footer";

export default function WhatWe(){
    return(
        <div className="">
             <div className="xs:mx-2 xs:my-8 md:mx-20 md:my-20">
             <div className="flex flex-wrap justify-center">
                <div className="mx-10">
                    <div className="flex justify-center">
                        <img src="/finan.png"/>
                    </div>
                    <div className="text-center text-xl mt-2">
                        <h1>Marketing consulting</h1>
                    </div>
                    <div className="text-center font-Gothic mt-4">
                        <p className="w-80">We help our clients to achieve profitable growth through strategic marketing, branding, and digital marketing innovation.</p>
                    </div>
                </div>
                <div className="mx-10">
                    <div className="flex justify-center">
                        <img className="" src="/finan1.png"/>
                    </div>
                    <div className="text-center text-xl mt-2">
                        <h1>Importing business</h1>
                    </div>
                    <div className="text-center font-Gothic mt-4">
                        <p className="w-80">We offer imports & customs brokerage services to handle all your goods coming into Mongolia.</p>
                    </div>
                </div>
                <div className="mx-10">
                    <div className="flex justify-center">
                        <img src="/finan2.png"/>
                    </div>
                    <div className="text-center text-xl mt-2">
                        <h1>Legal services</h1>
                    </div>
                    <div className="text-center font-Gothic mt-4">
                        <p className="w-80">We handle communications with all related parties during the entire process.</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}
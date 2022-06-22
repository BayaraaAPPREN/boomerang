

export default function Footer(){
    return(
        <div className="">
            <div className="flex flex-wrap justify-center py-20 bg-blue-900 text-slate-300">
                <div className="">
                        <div className="flex flex-wrap">
                            <img className="ml-4 h-40" src="/logowhite.png"/>
                            <div>
                               <h1 className="mx-8 text-4xl">BOOMERANG</h1>
                               <div className="mt-4 flex">
                                  <a>
                                    <img className="h-10 ml-10" src="/fb.png"/>
                                  </a>
                                  <a>
                                     <img className="h-10  mx-4" src="/instag.png"/>
                                  </a>
                               </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="mt-4 mx-8">
                                    <h1 className=" uppercase font-bold font-mono">instant link</h1>
                                    <h2>Who we are</h2>
                                    <h2>What we do</h2>
                                    <h2>Products</h2>
                                    <h2>Work with us</h2>
                                </div>
                                {/* <div className="mt-4 mx-8">
                                    <h1 className=" uppercase font-bold font-mono">Үйлчилгээ</h1>
                                    <h2>Ботокс</h2>
                                    <h2>Филлер</h2>
                                    <h2>Шивээс</h2>
                                    <h2>Дархлаа дэмжих дусалууд</h2>
                                    <h2>Арьс арчилгаа</h2>
                                    <h2>Скин бүүстер</h2>
                                </div> */}
                                <div className="mt-4 mx-8">
                                    <h1 className=" uppercase font-bold font-mono">contact us</h1>
                                    <h2>Location : 1-504, Gegeenten complex, 15th subdistrict,</h2>
                                    <h2>Khan-Uul district, Ulaanbaatar, Mongolia</h2>
                                    <h2>Phone number : (+976) 77307733</h2>
                                    <h2>Email : info@boomerang.mn</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="w-full bg-blue-600">
                <div className="py-8 text-center">
                    <h1 className="xs:text-xs md:text-lg text-white">All rights reserved. 2022 year. BOOMERANG.MN</h1>
                </div>
            </div>
        </div>
    )
}
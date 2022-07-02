import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar/dednav"
import Head from 'next/head'
import Tilt from 'react-vanilla-tilt'
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
                <div className="grid justify-center flex-wrap">
                    <div className="flex justify-center items-center flex-wrap">
                        
                        <div className="ml-8 xs:mx-4 md:w-1/2">
                            <h1  className="text-blue-900 xs:text-xl md:text-5xl mb-4">Tomato products</h1>
                            <p className="">This group of products is the one that we hold a significant market share nationwide. Traditional recipes and quality guarantee the rich taste and perfect color of our products. Purely natural tomatoes
                                 processed in the best way to preserve all their nutrition, and fine-tuned selection of tastes satisfy any gourmand, cook and food lover.</p>
                        </div>
                        <div>
                           <Tilt options={{ scale: 8, max: 25, speed: 600, }}>
                            <img src="/product1.png"/>
                            </Tilt>
                        </div>
                    </div>
                    <div className="flex justify-center items-center  flex-wrap">
                        
                        <div className="ml-8 xs:mx-4 md:w-1/2">
                            <h1  className="text-blue-900 xs:text-xl md:text-5xl mb-4">Vegetable oils</h1>
                            <p className="">Sunflower and corn vegetable oils play an important role in food preparation. We offer a wide range of
                             package sizes with unaltered characteristics – taste, odor and nutrition values. Regular award winners of various exhibitions.</p>
                        </div>
                        <div>
                           <Tilt options={{ scale: 8, max: 25, speed: 600, }}>
                            <img src="/product2.png"/>
                            </Tilt>
                        </div>
                    </div>
                    <div className="flex justify-center items-center  flex-wrap">
                        
                        <div className="ml-8 xs:mx-4 md:w-1/2">
                            <h1  className="text-blue-900 xs:text-xl md:text-5xl mb-4">Grocery products</h1>
                            <p className="">We offer a range of packaged grocery products. They are first carefully selected and tested for perfect quality, then packaged in a way
                            that provides long shelf life in ambient conditions while maintaining their taste and nutritional value.</p>
                        </div>
                        <div>
                           <Tilt options={{ scale: 8, max: 25, speed: 600, }}>
                            <img src="/product3.png"/>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
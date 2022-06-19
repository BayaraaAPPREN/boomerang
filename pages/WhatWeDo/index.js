import Footer from "../../components/Footer"
import DedNav from "../../components/Navbar/dednav" 
import Navbar from "../../components/Navbar/index"
import Team from "../../components/Team"
import WhatWe from "../../components/WhatWe"
export default function WhatWeDo(){
    return(
        <div>
            <DedNav/>
            <Navbar/>
            <div className="bg-header bg-cover bg-center">
                <div className="py-24 mx-40 ">
                    <h1 className="text-xl text-black font-bold uppercase font-Gothic">Home / what we do</h1>
                    <h1 className="text-7xl text-blue-900  font-ExtraBold ">What We Do</h1>
                </div>
            </div>
            <WhatWe/>
            <Footer/>
        </div>
    )
}
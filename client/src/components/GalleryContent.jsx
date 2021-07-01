import { AddCircleOutline, Star,StarOutline } from "@material-ui/icons"
import './index.css'
import { useState } from "react"

export default function GalleryContent() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='text-gray-50'>
            <div className="outer-card w-full px-12 py-8 flex items-center justify-center flex-col border-b-2 border-gray-600 " >
                <h1 className='mb-3 text-5xl tracking-widest uppercase text-yellow-300'>Tofu</h1>
                <AddCircleOutline style={{fontSize: "40px"}} onClick={()=> setMenuOpen(!menuOpen)}/>
                <div className={`transition-all duration-300 ease-in ${menuOpen?"h-auto opacity-100":"h-0 opacity-0"}`}>
                    <div className='mt-7'>
                        <div className="card w-full flex mb-3">
                            <img className='w-1/2 object-cover rounded-3xl'src="images/curry-pan-mee.jpg" alt="noodle" />
                            <div className='w-1/2 ml-6 mt-6 text-center'>
                                <h1 className='text-2xl mb-2 capitalize'>Curry Pan Mee</h1>
                                <h3 className='text-yellow-400'><Star/><Star/><Star/><StarOutline/><StarOutline/> (86)</h3>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="outer-card text-gray-100 w-full px-14 py-10 flex items-center justify-center flex-col border-b-2 border-gray-600">
                <h1 className='mb-3 text-5xl tracking-widest uppercase'>Tempe</h1>
                <AddCircleOutline style={{fontSize: "40px"}}/>
            </div>
            <div className="outer-card text-yellow-300 w-full px-14 py-10 flex items-center justify-center flex-col border-b-2 border-gray-600">
                <h1 className='mb-3 text-5xl tracking-widest uppercase'>Noodle</h1>
                <AddCircleOutline style={{fontSize: "40px"}}/>
            </div>
            <div className="outer-card text-gray-100 w-full px-14 py-10 flex items-center justify-center flex-col border-b-2 border-gray-600">
                <h1 className='mb-3 text-5xl tracking-widest uppercase'>Soup</h1>
                <AddCircleOutline style={{fontSize: "40px"}}/>
            </div>
        </div>
    )
}

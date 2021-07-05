import './index.css'
import { AddCircleOutline} from "@material-ui/icons"
import {Link} from 'react-router-dom'



export default function Category({category}) {
   
    return (
        <div className="outer-card text-gray-100 w-full px-14 py-10 flex items-center justify-center flex-col border-b-2 border-gray-600">
                         

                            <h1 className='mb-3 text-5xl tracking-widest uppercase'>{category.name}</h1>
                            <Link className='no-underline' to={`/gallery/${category.name}`}>
                                <AddCircleOutline style={{fontSize: "40px"}} />
                            </Link>
                            
                        
        </div>
    )
}


/* 
<div className={`transition-all duration-300 ease-in ${menuOpen?"h-auto opacity-100":"h-0 opacity-0"}`}>
                    <div className='mt-7 md:grid md:grid-cols-3 md:w-screen md:px-12'>
                        <div className="card w-full flex mb-3 md:flex-col md:items-center ">
                            <img className='w-1/2 h-36 object-cover rounded-3xl md:w-52 md:h-52'src="images/curry-pan-mee.jpg" alt="noodle" />
                            <div className='w-1/2 ml-2 mt-3 text-center md:w-52 '>
                                <h1 className='text-xl mb-2 capitalize'>Curry Pan Mee</h1>
                                <h3 className='text-yellow-400'><Star/><Star/><Star/><StarOutline/><StarOutline/> (86)</h3>
                            </div>
                        </div>
                        <div className="card w-full flex mb-3 md:flex-col md:items-center ">
                            <img className='w-1/2 h-36 object-cover rounded-3xl md:w-52 md:h-52'src="images/caramel-pudding.jpg" alt="noodle" />
                            <div className='w-1/2 ml-2 mt-3 text-center md:w-52 '>
                                <h1 className='text-xl mb-2 capitalize'>Pudding</h1>
                                <h3 className='text-yellow-400'><Star/><Star/><Star/><StarOutline/><StarOutline/> (86)</h3>
                            </div>
                        </div>
                        <div className="card w-full flex mb-3 md:flex-col md:items-center ">
                            <img className='w-1/2 h-36 object-cover rounded-3xl md:w-52 md:h-52'src="images/potato-wedges.jpg" alt="noodle" />
                            <div className='w-1/2 ml-2 mt-3 text-center md:w-52 '>
                                <h1 className='text-xl mb-2 capitalize'>Potato Wedges</h1>
                                <h3 className='text-yellow-400'><Star/><Star/><Star/><StarOutline/><StarOutline/> (86)</h3>
                            </div>
                        </div>
                        <div className="card w-full flex mb-3 md:flex-col md:items-center ">
                            <img className='w-1/2 h-36 object-cover rounded-3xl md:w-52 md:h-52'src="images/tofu-mushrooms.jpg" alt="noodle" />
                            <div className='w-1/2 ml-2 mt-3 text-center md:w-52 '>
                                <h1 className='text-xl mb-2 capitalize'>Tofu mushrooms</h1>
                                <h3 className='text-yellow-400'><Star/><Star/><Star/><StarOutline/><StarOutline/> (86)</h3>
                            </div>
                        </div>
                    </div>
                </div> */
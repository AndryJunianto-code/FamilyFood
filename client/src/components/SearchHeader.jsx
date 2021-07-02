import {Search, KeyboardArrowDown} from '@material-ui/icons'

export default function SearchHeader() {
    return (
        <div className='text-gray-50 relative flex justify-center h-96 md:h-100'>
            <img className='absolute top-0 left-0 opacity-50 w-full h-full'src="images/pizza.jpg" alt="pizza" />
            <div className='relative z-10 mt-20 md:mt-24 flex flex-col items-center'>
                <h1 className='text-4xl md:text-5xl tracking-widest'>Find a Food</h1>
                <div className='mt-8 flex flex-col items-center'>
                    <div>
                    <input type="text" className='px-4 py-2 rounded-lg opacity-80 border-0 bg-gray-100 w-64 md:w-96 focus:outline-none text-gray-900 font-bold text-xl'/>
                    </div>
                    <div className='flex items-center self-end ml-2 md:text-lg'>
                        <h2>Sort by</h2>
                        <h2><KeyboardArrowDown /></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

const Plan = () => {
  return (
    <div id='book' className='max-w-[1400px] m-auto p-y16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left Side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='object-cover w-full h-full p-2 row-span-3' src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
            <img className='object-cover w-full h-full p-2 row-span-2' src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
            <img className='object-cover w-full h-full p-2 row-span-2' src="https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <img className='object-cover w-full h-full p-2 row-span-3' src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80" alt="" />
            <img className='object-cover w-full h-full p-2 row-span-2' src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
        
        {/* Right Side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus at assumenda atque est excepturi recusandae veniam repudiandae explicabo, aperiam ab?</p>
            <p className='pb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, magnam atque repudiandae id adipisci repellendus excepturi sunt officia provident ullam iste placeat dicta rerum ut minus perspiciatis eligendi commodi laboriosam?</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book Now</button>
            </div>
        </div>
    </div>
  )
}

export default Plan
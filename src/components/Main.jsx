import React from 'react'

const Main = () => {
  return (
    <div id='home' className='flex flex-wrap items-center justify-between w-full h-screen '>
        <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.unsplash.com/photo-1561811358-21aef14f0551?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" alt="" />
        <div className="bg-black/50 absolute top-0 left-0 w-full h-screen" />
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold lg:text-7xl md:text-5xl sm:text-4xl text-3xl drop-shadow-3xl'>Private Hotel Rooms & Getaways</h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni necessitatibus hic quam dolores repudiandae nesciunt nostrum illum natus quibusdam, corrupti rem soluta rerum ipsum debitis beatae accusamus totam est consectetur.
                </p>
                <button className='bg-white text-black'>Reserve Now</button>
            </div>
        </div>
    </div>
  )
}

export default Main
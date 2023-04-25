import React from 'react'

const Rooms = () => {
  return (
    <div id='rooms' className='max-w-[1400px] h-[500px] bg-green-100 mx-auto my-20 pt-16 lg:mb-[20%] md: mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='relative col-span-2 lg:top-20 lg:col-span-1'>
            <h3 className='text-2xl font-bold'>Quality Rooms </h3>
            <p className='pt-4'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit eum quisquam quas et aliquid eveniet inventore labore dolore nobis, ipsam ex porro ratione voluptatum cumque quia neque expedita quidem sapiente.
            </p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'> 
            <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <img className='row-span-2 object-cover w-full h-full' src="https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
            <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
        </div>
    </div>
  )
}

export default Rooms
import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

const Foods = () => {
  
  const foods = [
    {
        url: 'https://images.unsplash.com/photo-1621841957884-1210fe19d66d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Seafoods',
    },
    {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        title: 'Meat',
    },
    {
        url: 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Pasta',
    },
    {
        url: 'https://images.unsplash.com/photo-1609183480237-ccbb2d7c5772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Chicken',
    },
    {
        url: 'https://images.unsplash.com/photo-1630173314503-544080d4dee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title: 'Salmon',
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevFood = () => {
    // const isFirstFood = currentIndex === 0
    // const newIndex = isFirstFood ? foods.length - 1 : currentIndex + 1;
    // setCurrentIndex(newIndex);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + foods.length) % foods.length);
  };
  const nextFood = () => {
    // const isLastFood = currentIndex === foods.length - 1;
    // const newIndex = isLastFood ? 0 : currentIndex + 1;
    // setCurrentIndex(newIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % foods.length);
  };

  return (
    <div id='foods' className='max-w-[1400px] top-0 w-full m-auto py-16 px-4 relative'>
      <div className="flex top-0 items-center justify-center w-full">
         <h1 className='uppercase font-bold lg:text-5xl md:text-4xl sm:text-3xl text-xl'>Sample Foods that we offers!</h1>
      </div>
      <div className='max-w-[1400px] h-[580px] w-full m-auto py-4  group'>
          <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500" style={{ backgroundImage: `url(${foods[currentIndex].url})`}}>

              {/* Left Arrow */}
              <div className='p-2 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full group-hover:bg-black/40 text-white cursor-pointer'>
                  <BsChevronCompactLeft onClick={prevFood} size={30}/>
              </div>
              {/* Right Arrow */}
              <div className='p-2 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full group-hover:bg-black/40 text-white cursor-pointer'>
                  <BsChevronCompactRight onClick={nextFood} size={30}/>
              </div>

          </div>
      </div>
    </div>
  )
}

export default Foods
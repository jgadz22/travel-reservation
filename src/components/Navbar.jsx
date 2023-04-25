import React, {useState, useEffect} from 'react'
import { Link } from 'react-scroll'
import {HiMenuAlt3} from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import {TiSocialPinterest} from 'react-icons/ti'

const Navbar = () => {

    // const [nav, setNav] = useState(false);
    // const handleNav = () => {
    //   setNav(!nav);
    //   if(!nav){
    //     document.body.style.overflow = 'hidden'
    //   }else{
    //     document.body.style.overflow = 'scroll'
    //   }

    // }
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90){
                setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    }, []);

  return (
    // <div className='absolute w-full flex justify-between p-4 items-center'>
    //     <h1 className='text-white font-bold text-2xl z-20'>AVA</h1>
    //     <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25}/>
    //     <div className={
    //       nav 
    //       ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' 
    //       : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
    //         <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
    //             <li className='font-bold text-3xl  p-8'>Home</li>
    //             <li className='font-bold text-3xl  p-8'>Reservation</li>
    //             <li className='font-bold text-3xl  p-8'>Rooms</li>
    //             <li className='font-bold text-3xl  p-8'>Foods</li>
    //             <li className='font-bold text-3xl  p-8'>Info</li>
    //         </ul>
    //     </div>
    // </div>

    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-white' : 'fixed w-full h-20 z-[100] bg-white/70'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer'>
            <Link to='home' smooth={true} duration={500}>
                <div className='p-2 justify-between items-center text-6xl'>
                <h1 className='font-bold text-2xl z-20'>AVA</h1>
                </div>
            </Link>
            
            <div>
                <ul className='font-bold hidden md:flex'>
                    <Link to='home' smooth={true} duration={500}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link to='book' smooth={true} duration={500}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Book</li>
                    </Link>
                    <Link to='rooms' smooth={true} duration={500}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Rooms</li>
                    </Link>
                    <Link to='foods' smooth={true} duration={500}>
                        <li className="ml-10 text-sm uppercase hover:border-b">Foods</li>
                    </Link>
                    <Link to='info' smooth={true} duration={500}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Info</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <HiMenuAlt3 size={25}/>
                </div>
            </div> 
        </div>
        <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
            <div 
                className={
                    nav
                    ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-5 pr-10 pl-10 ease-in duration-500"
                    : "fixed left-[-100%] top-0 p-5 pr-10 pl-10 ease-in duration-500"
                }
            >
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link to='home' smooth={true} duration={500}>
                            <div onClick={() => setNav(false)} className='justify-between items-center text-4xl'>
                              <h1 className='font-bold text-2xl z-20'>AVA</h1>
                            </div>
                        </Link>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pinter'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>{"Let's unwind together at beautiful place"}</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col cursor-pointer'>
                    <ul className="uppercase">
                        <Link to='home' smooth={true} duration={500}>
                            <li onClick={() => setNav(false)} className="py-4 text-sm">Home</li>
                        </Link>
                        <Link to='book' smooth={true} duration={500}>
                            <li onClick={() => setNav(false)} className="py-4 text-sm">Book</li>
                        </Link>
                        <Link to='rooms' smooth={true} duration={500}>
                            <li onClick={() => setNav(false)} className="py-4 text-sm">Rooms</li>
                        </Link>
                        <Link to='foods' smooth={true} duration={500}>
                            <li onClick={() => setNav(false)} className="py-4 text-sm">Foods</li>
                        </Link>
                        <Link to='info' smooth={true} duration={500}>
                            <li onClick={() => setNav(false)} className="py-4 text-sm">Info</li>
                        </Link>
                    </ul>
                    <div className="pt-40">
                        <p className="uppercase tracking-widest text-green-700">
                            {"Let's Connect"}
                        </p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]text-2xl'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaFacebook />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaInstagram />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaTwitter />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <TiSocialPinterest size={20} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
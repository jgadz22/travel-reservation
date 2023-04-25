import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import {TiSocialPinterest} from 'react-icons/ti';

const Footer = () => {
  return (
    <div id='info' className='bg-gray-900 text-gray-300 py-2 px-2 w-full mt-24'>
        <div className='max-w-[1400px] py-8 mx-auto px-4 grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600' >
            <div className='py-5'>
                <h2 className='uppercase pt-2 font-bold'>Solution</h2>
                <ul>
                    <li className='py-1'>Travel</li>
                    <li className='py-1'>Boooking</li>
                    <li className='py-1'>Flights</li>
                    <li className='py-1'>Cruises</li>
                    <li className='py-1'>Ground</li>
                </ul>
            </div>
            <div className='py-5'>
                <h2 className='uppercase pt-2 font-bold'>Support</h2>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Tours</li>
                    <li className='py-1'>Refunds</li>
                </ul>
            </div>
            <div className='py-5'>
                <h2 className='uppercase pt-2 font-bold'>Company</h2>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Partners</li>
                </ul>
            </div>
            <div className='py-5'>
                <h2 className='uppercase pt-2 font-bold'>Legal</h2>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 py-8 md:pt-2'>
                <p className='uppercase font-bold'>Subscribe to our Newsletter</p>
                <p className='py-4'>The latest deals, articles, and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' placeholder='Enter email' type='email' />
                    <button className='mb-4 rounded-md p-2'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='max-w-[1400px] py-4 px-2 mx-auto text-center justify-between flex flex-col sm:flex-row text-gray-500'>
                <p className='py-4'>2023, AVA, LLC. Alright Reserve</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <TiSocialPinterest size={30}/>
            </div>
        </div>
    </div>
  )
}

export default Footer
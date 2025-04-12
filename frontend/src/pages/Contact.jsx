import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          Green<span className='text-gray-700 font-semibold'>Meridian</span>
        </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm px-4'>
        <img
          className='w-full md:max-w-[360px] rounded-lg shadow-md'
          src={assets.headerimage}
          alt='Contact'
        />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Landmark</p>
          <p className='text-gray-500'>
            54709 Tirupati <br /> Gandhi Road, Tirupati, AP
          </p>

          <p className='text-gray-500'>
            Tel: (415) 555-032 <br />
            Email: rajasekhar@gmail.com
          </p>

          <p className='font-semibold text-lg text-gray-600'>Let's Donate</p>
          <p className='text-gray-500'>For more information</p>

          <a
            href='tel:+91415555032'
            className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300 rounded-md'
          >
            📞 Call Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact

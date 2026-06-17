
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className='bg-gray-900 text-white mt-10'>
        <div className='mx-w-7xl mx-auto px-6 py-10'>
          <div className='grid md:grid-cols-3 gap-8'>
            {/* logo discription */}
            <div>
              <h2 className='text-2xl font-bold mb-3'>Placement Portal</h2>
              <p className='text-gray-400'>
                Helping Students connect with top companies and
                acheive their dream carrers.
              </p>
            </div>
            {/* Quick Links  */}
            <div>
              <h3 className='text-xl font-semibold mb-3'>Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li className='hover:text-white cursor-pointer'>Home</li>
                <li className='hover:text-white cursor-pointer'>Companies</li>
                <li className='hover:text-white cursor-pointer'>Students</li>
                <li className='hover:text-white cursor-pointer'>About</li>
                <li className='hover:text-white cursor-pointer'>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-semibold mb-3'>Contact Us</h3>
            
            <p className='text-gray-400'>
              Email:palcementportal@gmail.com
            </p>
            <p className='text-gray-400'>
              Phone: +91 6389187143
            </p>
            <p className='text-gray-400'>
              Address: New Delhi,India
            </p>
            </div>
          </div>
          {/* bottom footer  */}
          <div>
            <p className='border-t border-gray-700 mt-8 pt-4 text-center text-gray-400'>@ 2026 Placement Portal. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}


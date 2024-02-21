import React from 'react'
import { CountryLookup } from './CountryLookup'

export const Footer = () => {
  return (
    <div className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
      <div className='border-b px-8 py-3'>
        <CountryLookup />
      </div>
      <div className='flex justify-between flex-col sm:flex-row items-center px-8 py-3 space-y-7 sm:space-y-0'>
        <ul className='flex items-center space-x-6'>
          <li>About</li>
          <li>Advertising</li>
          <li>Business</li>
          <li>How Search works</li>
        </ul>
        <ul className='flex items-center space-x-6'>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  )
}

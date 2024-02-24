'use client'

import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const SearchBox = () => {
  const searchParams = useSearchParams()
  const router = useRouter();
  const searchTerm = searchParams.get('searchTerm')
  const[term, setTerm] = useState(searchTerm || '')

  const handelSubmit = (e) => {
    e.preventDefault();
    if(!term.trim()) return;
    router.push(`web?searchTerm=${term}`)
  }
  return (
    <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5
     flex-grow max-w-3xl items-center' onSubmit={handelSubmit} onChange={(e) => setTerm(e.target.value)}>
      <input type="text" className='w-full focus:outline-none' value={term}/>
      <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={() => setTerm('')}/>
      <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-200
       mr-3 pl-4'/>
      <AiOutlineSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer'
       onClick={handelSubmit}/>
    </form>
  )
}

export default SearchBox
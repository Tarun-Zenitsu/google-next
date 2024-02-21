import { HomeHeade } from '@/components/HomeHeade'
import { HomeSearch } from '@/components/HomeSearch'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <HomeHeade />
      <div className='flex flex-col items-center mt-24'>
        <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"}
        width={300} height={500} alt='google logo' priority style={{width: "auto"}}/>
        <HomeSearch />
      </div>
    </>
  )
}

export default Home
import React from 'react'

import {MdNotificationsNone} from 'react-icons/md'

import {FiSettings} from 'react-icons/fi'
import {CgDarkMode} from 'react-icons/cg'

const Top
 = () => {
  return (
    <div className='w-[100%] h-[50px] bg-[#d8ecec] top-0 sticky'>
      <div className='h-[100%] py-3 px-[20px] flex justify-between'>
<div className='topleft'>
  
</div>
<div className='flex '>

  <div className='relative'>
  <MdNotificationsNone className='text-[28px]'/>
  <span className='absolute top-[-5px]  w-[15px] h-[15px] rounded-[50%] bg-fuchsia-500 flex justify-center items-center text-[12px] text-white right-[5px]'>2</span>
  </div>

  <div className='relative'>
  <CgDarkMode className='text-[26px] mx-4'/>
  {/* <span className='absolute top-[-5px]  w-[15px] h-[15px] rounded-[50%] bg-fuchsia-500 flex justify-center items-center text-[12px] text-white right-[5px]'>2</span> */}
  </div>

  <div className='relative'>
  <FiSettings className='text-[26px]'/>
  {/* <span className='absolute top-[-5px]  w-[15px] h-[15px] rounded-[50%] bg-fuchsia-500 flex justify-center items-center text-[12px] text-white right-[5px]'>2</span> */}
  </div>

  

</div>
      </div>
    </div>
  )
}

export default Top

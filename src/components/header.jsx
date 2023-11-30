import React from 'react'

function header() {
  return (
    <>
    <div className='flex justify-between items-center py-10 px-56'>
        <span className='font-sans font-bold text-medium'>MONAX</span>
        <ul className='flex items-center gap-[48px] '>
            <li className='flex gap-2 items-center font-sans text-normal'>Products <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13.125 5.25L7 10.5L0.875 5.25" stroke="#1C1C1C" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </li>
            <li className='flex gap-2 items-center font-sans text-normal'>Compare Plans <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13.125 5.25L7 10.5L0.875 5.25" stroke="#1C1C1C" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </li>
            <li className='flex gap-2 items-center font-sans text-normal'>About Us
            </li>
            <li className='flex gap-2 items-center font-sans text-normal'>Ressources <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M13.125 5.25L7 10.5L0.875 5.25" stroke="#1C1C1C" stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </li>
        </ul>
        <button className='rounded-radius font-sans text-normal font-bold py-[18px] px-[48px] bg-primary text-white '>Contact us</button>
    </div>
    </>
  )
}

export default header
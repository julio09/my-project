import React from 'react'
import { Avatar1, Avatar2, Avatar3, Bottom, Circle, Frame } from '../assets'

function footer() {
  return (
    <>
    <section className='flex justify-center relative items-center h-full mt-[90px]'>
    <hr className='border-[1px] w-[1440px] flex border-stroke shrink-0' />
    <div className='shrink-0 border-t-[2px]  absolute z-20 border-stroke bg-white w-[298px] h-[100px] rounded-[36px] '></div>
    <button className='absolute z-30 px-[88px] py-[18px] rounded-radius font-bold font-sans text-normal bg-primary text-white '>Try to free</button>
    <img src={Frame} alt='' className='absolute -bottom-[420px]' />
    <div className='flex flex-col absolute -bottom-[200px] left-56 items-start gap-[14px] '>
        <p className='font-sans font-bold text-[34px] text-primary'>Modern data stock</p>
        <p className='text-normal font-sans text-primary'>The investment you’ve made in every<br />
        layer of the stack, by getting data you’ve<br />
        made meaningful into everyone’s.</p>
        <p className='underline text-normal font-sans text-primary'>READ MORE</p>
    </div>
    <div className='flex flex-col absolute -bottom-[420px] left-56 items-start gap-[8px] '>
        <img alt='' src={Circle} />
        <p className='text-normal font-sans text-primary'>Modern Business Intelligence</p>
    </div>
    <div className='flex absolute items-center gap-6 -bottom-[150px] right-56'>
        <div className='flex items-center -space-x-[20px]'>
            <img alt='' src={Avatar1} className='z-10 border-[6px] border-white rounded-elypse'/>
            <img alt='' src={Avatar2} className='z-20 border-[6px] border-white rounded-elypse'/>
            <img alt='' src={Avatar3} className='z-30 border-[6px] border-white rounded-elypse'/>
        </div>
        <p className='text-normal'>Connect
        <br />More Experts</p>
    </div>
    <div className='absolute -bottom-[420px] right-[425px] flex flex-col gap-2 items-start'>
        <span className='font-bold text-large'>120+</span>
        <p className='text-normal'>Perform complex,<br />
        ad hac analysis<br />
        and empower.</p>
    </div>
    <section className='flex absolute -bottom-[420px] right-56'>
        <img src={Bottom} alt=''/>
    </section>
    </section>
    </>
  )
}

export default footer
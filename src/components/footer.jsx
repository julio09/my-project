import React from 'react'
import { Avatar1, Avatar2, Avatar3, Bottom, Circle, Frame } from '../assets'
import {motion} from 'framer-motion'

function footer() {
    const button = {
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: {
            duration: 0.9
          }
        },
        hover: {
          scale: 1.1,
        },
        tap: {
          scale:0.8,
          transition:{
            type: "spring"
          }
        }
      }

  return (
    <>
    <section className='flex justify-center relative items-center h-full mt-[90px]'>
    <svg xmlns="http://www.w3.org/2000/svg" className='z-50' width="1400" height="50" viewBox="0 0 1400 50" fill="none">
      <path d="M1400 49H855.405C851.985 49 849.212 45.4183 849.212 41C849.212 13.3858 831.883 1 810.506 1H589.107C567.73 1 550.401 13.3858 550.401 41C550.401 45.4183 547.628 49 544.208 49H0" stroke="#D4D4D4"/>
    </svg>
    <div className='shrink-0 absolute -bottom-12 z-30  bg-white w-[298px] h-[100px] rounded-[36px] '></div>
    <motion.button variants={button} initial="hidden" whileTap="tap" animate="show" whileHover="hover" className='absolute -bottom-8 z-30 px-[88px] py-[18px] rounded-radius font-bold font-sans text-normal bg-primary text-white '>Try to free</motion.button>
    <motion.img initial={{translateY: 100, opacity:0}} animate={{translateY: 0, opacity: 1}} transition={{type: "spring", duration:.7,delay: 0.2,bounce:.4,}} src={Frame} alt='' className='absolute z-0 -bottom-[410px]' />
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
    <div className='absolute -bottom-[410px] flex right-[225px] gap-12 items-center'>
        <div className='flex flex-col gap-2 items-start'>
        <span className='font-bold text-large'>120+</span>
        <p className='text-normal'>Perform complex,<br />
        ad hac analysis<br />
        and empower.</p>
        </div>
        <img src={Bottom} alt=''/>
    </div>
    </section>
    </>
  )
}

export default footer
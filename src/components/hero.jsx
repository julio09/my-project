import { motion, useScroll } from "framer-motion";
import React from 'react';
import { Fleur, Sary } from '../assets';


function hero() {

  const { scrollYProgress } = useScroll;

  return (
    <motion.div onScroll={scrollYProgress} className='relative flex flex-col justify-center items-center'>
        <hr className='border-[1px] w-[1440px] flex border-stroke shrink-0' />
    <div className=' border-stroke pt-10 relative font-bold text-center text-primary text-Xlarge font-sans leading-[130px] bg-[#FFF] '>Business Teams
    <br />
    Around
    <br />
    nalytical Work</div>
    <motion.img initial={{translateX: -1000, opacity: 0}} animate={{translateX: 0, opacity:1}} transition={{duration:0.6, delay: .3, ease: "linear", type:"spring" ,stiffness: 50 }} alt='' className='absolute left-[400px] top-52' width={246} height={76} src={Sary} />
    <motion.div initial={{translateX: 1000, opacity: 0}} animate={{translateX: 0, opacity:1}} transition={{duration:0.6, delay: .3, ease: "linear", type:"spring" ,stiffness: 50 }} className='absolute  right-[400px] top-52 rounded-radius bg-slate pl-[13px] pr-[31px] pt-[1px] flex items-center gap-[13px] '>
        <img alt='' width={75} height={75} src={Fleur} />
        <p className='font-normal text-start text-normal font-sans'>Behind every<br /> great idea</p>
    </motion.div>
    </motion.div>
  )
}

export default hero
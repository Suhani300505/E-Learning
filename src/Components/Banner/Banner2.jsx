import React from 'react'
import BannerImg from '../../assets/img/Banner_img.png'
import {motion} from "framer-motion"

export default function Banner2() {
  return (
    <div>
      <section>
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
            {/* Banner Text */}
            <motion.div initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                <h1 className='text-4xl font-bold !leading-sung'>Join Our Community to Start your Journey </h1>
                <p className='text-dark2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, quaerat dolor. Tempora eaque fuga quisquam ad? Dolorem praesentium, odit perspiciatis officia id fuga vero, reprehenderit, incidunt optio debitis similique at?</p>
                <a href="" className='primary-btn !mt-8'>Join Now</a>
                </div>
            </motion.div>
            {/* Banner Image */}
            <div className="flex justify-center items-center">
               <motion.img initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}}  src={BannerImg} alt="" className='w-[350px] md:max-w-[450px] object-cover drop-shadow' /> 
            </div>
            
        </div>
      </section>
    </div>
  )
}

import React from 'react';
import {motion} from "framer-motion";

const Mid = () => {
  return (
    <div className="flex-col items-end"
    style={{
      backgroundImage:
        "url(https://files.123freevectors.com/wp-content/original/133714-green-yellow-and-white-abstract-background-vector.jpg)",
      height: "120vh",
      marginTop: "",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5,delay:0}} className='flex justify-center'>
        <h1 className='text-5xl w-1/3 text-center mt-12'>Easily explore the most accurate B2B data.</h1>
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5,delay:0}} className='flex justify-center'>
        <p className='text-lg w-1/2 text-center mt-4'>We invented a different way to deliver data and it’s  changing the game. Our 2 million user Living Data Network ensures unparalleled freshness and depth.</p>
        </motion.div>
        <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:1.5,delay:0}} className='flex justify-center'>
            <button className='bg-green-500 rounded-md p-2 text-sm mt-4'>Learn More</button>
        </motion.div>
        <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:1.5,delay:0}} className='flex justify-center'>
            <img className='w-3/4 mt-4' src="https://netlify.apollo.io/_next/image?url=https%3A%2F%2Fnetlify.apollo.io%2F_next%2Fstatic%2Fmedia%2Fpowered-by-desktop-image.9d2e1874.png&w=3840&q=75" alt="" />
        </motion.div>
    </div>
  )
}

export default Mid
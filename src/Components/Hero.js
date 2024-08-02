import React from "react";
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <>
      <main
        className="flex justify-center"
        style={{
          backgroundImage:
            "url(https://png.pngtree.com/thumb_back/fh260/background/20210803/pngtree-green-yellow-hd-background-free-vector-image-pngtree-eps-image_757337.jpg)",
          height: "100vh",
          marginTop: "-70px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5,delay:0}} className="main py-40 pl-9 mt-20 ml-28">
          <div className="text-7xl pb-3">Find and close your next deal</div>
          <p className="text-xl">
            Power your go-to-market with one platform. Fueled by the most
            accurate data on 275M contacts and 73M companies.
          </p>
          <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5,delay:0}} className="my-4">
            <button className="bg-green-500  text-black rounded-md mr-2 pl-5 pr-5 pt-4 pb-4  hover:bg-green-300">
              Sign up for free
            </button>
            <button className="border-2 border-black rounded-md pl-5 pr-5 pt-3 pb-3 hover:bg-gray-50 hover:bg-opacity-30">
              Get a demo
            </button>
          </motion.div>
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5,delay:0}} className="flex items-center">
          <img
            src="https://cdn.dribbble.com/users/388048/screenshots/1389135/media/5bdfc5bcbe7c8dd1d0d3e61c6e10e3fc.gif"
            className="mt-20 ml-4 w-auto"
            alt=""
          />
        </motion.div>
      </main>
      <div className="bg-blue-200 flex-row justify-center">
        <div className="flex justify-center">
         <motion.p whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:1,delay:0}} className="text-2xl p-5"> Millions of sellers at over 500,000 companies beat their number with Apollo</motion.p>
        </div>
        <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:1,delay:0}}>          
            <ul className="flex justify-center gap-40 text-3xl p-2">
              <li><i className="fa-brands fa-stripe fa-xl"></i></li>
              <li><i className="fa-brands fa-opensuse fa-xl"></i></li>
              <li><i className="fa-brands fa-intercom fa-xl"></i></li>
              <li><i className="fa-brands fa-dochub fa-xl"></i></li>
              <li><i className="fa-brands fa-autoprefixer fa-xl"></i></li>
              <li><i className="fa-solid fa-truck-fast fa-xl"></i></li>
            </ul>
          </motion.div>

      </div>
    </>
  );
};

export default Hero;

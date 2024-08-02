import {React,useState} from 'react';
import {motion} from "framer-motion";

const End = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
      <motion.div whileInView={{opacity:1}} initial={{opacity:0}} transition={{duration:1,delay:0}} className='bg-black text-white flex-col mt-2'>
      <div className='p-20 flex justify-center'>
        <p className=''>
          <button
            className="text-2xl"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            Browse Apollo's Directories 
          </button>
        </p>
        </div>
        <div>
        <div className={`${isCollapsed ? 'block' : 'hidden'} -mt-14 p-10`}>
            <hr className='border-1 ml-44 w-4/5 border-green-500 -mt-9' />
          <div className="mb-10 flex justify-around mt-5">
            <div>
                <h1 className='text-lg'>People</h1>
                <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
            </div>
            <div>
                <h1 className='text-lg'>Companies</h1>
                <p>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</p>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    );
}

export default End
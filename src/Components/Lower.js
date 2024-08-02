import {React,useState} from 'react'
import Founders from './Founders';
import Sales from './Sales';
import Account from './Account';
import Revops from './Revops';
import Marketing from './Marketing';
import Leaders from './Leaders';
import {motion} from "framer-motion";

const Lower = () => {
    const [activeTab, setActiveTab] = useState('founders');
  return (
    <>
    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5,delay:0}}  className="flex-col  ml-52 mt-10 ">
        <h1 className='text-5xl'>You share the revenue goal.</h1>
        <h1 className='text-5xl'>Work better, smarter, together in Apollo.</h1>
    </motion.div>
    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5,delay:0}}>
      <div  className="flex ml-52 mt-10 space-x-4">
        <button
          className={`py-2 px-5 ${activeTab === 'founders' ? 'bg-green-500 text-black rounded-lg' : 'bg-white text-black border-2 border-gray-400 rounded-md hover:bg-gray-200 hover:bg-opacity-30'}`}
          onClick={() => setActiveTab('founders')}
        >
          Founders
        </button>
        <button
          className={`py-2 px-5 ${activeTab === 'sales' ?'bg-green-500 text-black rounded-lg' : 'bg-white text-black border-2 border-gray-400 rounded-md  hover:bg-gray-200 hover:bg-opacity-30'}`}
          onClick={() => setActiveTab('sales')}
        >
          Sales Development
        </button>
        <button
          className={`py-2 px-5 ${activeTab === 'account' ? 'bg-green-500 text-black rounded-lg' : 'bg-white text-black border-2 border-gray-400 rounded-md  hover:bg-gray-200 hover:bg-opacity-30'}`}
          onClick={() => setActiveTab('account')}
        >
          Account Executives
        </button>
        <button
          className={`py-2 px-5 ${activeTab === 'revops' ? 'bg-green-500 text-black rounded-lg' : 'bg-white text-black border-2 border-gray-400 rounded-md  hover:bg-gray-200 hover:bg-opacity-30'}`}
          onClick={() => setActiveTab('revops')}
        >
          RevOps
        </button>
        <button
          className={`py-2 px-5 ${activeTab === 'marketing' ? 'bg-green-500 text-black rounded-lg' : 'bg-white text-black border-2 border-gray-400 rounded-md  hover:bg-gray-200 hover:bg-opacity-30'}`}
          onClick={() => setActiveTab('marketing')}
        >
          Marketing
        </button>
        <button
          className={`py-2 px-5 ${activeTab === 'leaders' ? 'bg-green-500 text-black rounded-lg' : 'bg-white text-black border-2 border-gray-400 rounded-md  hover:bg-gray-200 hover:bg-opacity-30'}`}
          onClick={() => setActiveTab('leaders')}
        >
          Sales Leaders
        </button>
      </div>
      <div className="tab-content mt-4">
        <div className={`${activeTab === 'founders' ? 'block' : 'hidden'}  ml-52 mt-10 `}>
          <Founders/>
        </div>
        <div className={`${activeTab === 'sales' ? 'block' : 'hidden'} ml-52 mt-10`} >
          <Sales/>
        </div>
        <div className={`${activeTab === 'account' ? 'block' : 'hidden'} ml-52 mt-10`}>
          <Account/>
        </div>
        <div className={`${activeTab === 'revops' ? 'block' : 'hidden'} ml-52 mt-10`}>
          <Revops/>
        </div>
        <div className={`${activeTab === 'marketing' ? 'block' : 'hidden'} ml-52 mt-10`}>
          <Marketing/>
        </div>
        <div className={`${activeTab === 'leaders' ? 'block' : 'hidden'} ml-52 mt-10`}>
          <Leaders/>
        </div>
      </div>
    </motion.div>
    </>
  )
}

export default Lower
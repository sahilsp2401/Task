import React from 'react'

const Founders = () => {
  return (
    <div className='flex'>
        <div className='main'>
        <h1 className='text-4xl'>Apollo is your go-to-market copilot</h1>
        <p className='mt-5 w-4/5 text-lg'>Find buyers, close deals, and watch your business grow with Apollo's end-to-end sales solution, powered by AI.</p>
        <ul className='mt-5 text-lg'>
            <li>Contact & Account Search: Find the right leads at the right time</li>
            <li>Sales Engagement: Grow your business with on-the-nose outbound</li>
            <li>Workflows: Save time with winning, out-of-the-box sales plays</li>
            <li>Deal Management: Effortlessly manage your pipeline</li>
        </ul>
        <button className='bg-black border-2 border-black text-white rounded-md pl-4 pr-4 pt-2 pb-2 mt-5  hover:bg-gray-900'>Learn More</button>
        </div>
        <div className='flex'>
            <img src="https://netlify.apollo.io/_next/image?url=https%3A%2F%2Fnetlify.apollo.io%2F_next%2Fstatic%2Fmedia%2Ffounders.46d38e42.png&w=1920&q=75" alt="" className=" w-96 mr-96"/>
        </div>
    </div>
  )
}

export default Founders
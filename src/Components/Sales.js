import React from 'react'

const Sales= () => {
  return (
    <div className='flex'>
        <div className='main'>
        <h1 className='text-4xl'>Fill your pipeline with quality leads</h1>
        <p className='mt-5 w-4/5 text-lg'>Find ideal leads and land more meetings with Apollo AI as your sales assistant.</p>
        <ul className='mt-5 text-lg'>
            <li>Contact & Account Search: Find 275M great leads</li>
            <li>Account-based Prospecting: Identify high-converting accounts</li>
            <li>Sales Engagement: Run more effective outbound with AI</li>
            <li>Meetings: Create quality meetings from one place</li>
        </ul>
        <button className='bg-black border-2 border-black text-white rounded-md pl-4 pr-4 pt-2 pb-2 mt-5  hover:bg-gray-900'>Learn More</button>
        </div>
        <div className='flex'>
            <img src="https://netlify.apollo.io/_next/image?url=https%3A%2F%2Fnetlify.apollo.io%2F_next%2Fstatic%2Fmedia%2Fsales-dev.0fba4561.png&w=1920&q=75" alt="" className=" w-96 ml-24"/>
        </div>
    </div>
  )
}

export default Sales
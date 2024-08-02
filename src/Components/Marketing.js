import React from 'react'

const Marketing = () => {
  return (
    <div className='flex'>
        <div className='main'>
        <h1 className='text-4xl'>Generate pipeline that converts</h1>
        <p className='mt-5 w-4/5 text-lg'>Boost conversion, keep your marketing database squeaky clean, and make sales fall in love with you using Apollo’s tools for marketers.</p>
        <ul className='mt-5 text-lg'>
            <li>Enrich & Cleanse: Unlock accurate, fresh data in any system</li>
            <li>Contact & Account List Building: Find leads you never knew existed</li>
            <li>Inbound Optimization: Improve your inbound, all around</li>
            <li>Account-based Marketing: Target accounts at the right time</li>
        </ul>
        <button className='bg-black border-2 border-black text-white rounded-md pl-4 pr-4 pt-2 pb-2 mt-5  hover:bg-gray-900'>Learn More</button>
        </div>
        <div className='flex'>
            <img src="https://netlify.apollo.io/_next/image?url=https%3A%2F%2Fnetlify.apollo.io%2F_next%2Fstatic%2Fmedia%2Fmarketing.5b041c4a.png&w=1920&q=75" alt="" className="w-96" style={{marginRight:"34rem"}}/>
        </div>
    </div>
  )
}

export default Marketing
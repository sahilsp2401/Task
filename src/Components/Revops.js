import React from 'react'

const Revops = () => {
  return (
    <div className='flex'>
        <div className='main'>
        <h1 className='text-4xl'>Streamline your go-to-market stack</h1>
        <p className='mt-5 w-4/5 text-lg'>Keep your revenue engine humming with a true all-in-one solution built to play nice together, and the most accurate, up-to-date database.</p>
        <ul className='mt-5 text-lg'>
            <li>Enrich & Cleanse: Maintain a database your team can trust</li>
            <li>Scores & Signals: Make prospecting more efficient</li>
            <li>Workflows: Create powerful automations for the whole funnel</li>
            <li>Analytics: Empower your team with data-driven insights</li>
        </ul>
        <button className='bg-black border-2 border-black text-white rounded-md pl-4 pr-4 pt-2 pb-2 mt-5  hover:bg-gray-900'>Learn More</button>
        </div>
        <div className='flex'>
            <img src="https://netlify.apollo.io/_next/image?url=https%3A%2F%2Fnetlify.apollo.io%2F_next%2Fstatic%2Fmedia%2Frevops.d350e2e1.png&w=1920&q=75" alt="" className=" w-96" style={{marginRight:"34rem"}}/>
        </div>
    </div>
  )
}

export default Revops
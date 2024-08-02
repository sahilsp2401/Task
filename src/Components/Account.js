import React from 'react'

const Account = () => {
  return (
    <div className='flex'>
        <div className='main'>
        <h1 className='text-4xl'>Win more deals, crush your quota</h1>
        <p className='mt-5 w-4/5 text-lg'>Save time, build pipeline, and win more with Apollo AI as your copilot.</p>
        <ul className='mt-5 text-lg'>
            <li>Contact & Account Search: Find the right leads at the right time</li>
            <li>Sales Engagement: Scale your outreach, score more meetings</li>
            <li>Meetings: Streamline your meetings with AI for more wins</li>
            <li>Conversation Intelligence: Record, transcribe, and sync calls to CRM</li>
            <li>Deal Management: Manage opportunities with recommendations and insights</li>
        </ul>
        <button className='bg-black border-2 border-black text-white rounded-md pl-4 pr-4 pt-2 pb-2 mt-5  hover:bg-gray-900'>Learn More</button>
        </div>
        <div className='flex'>
            <img src="https://netlify.apollo.io/_next/image?url=https%3A%2F%2Fnetlify.apollo.io%2F_next%2Fstatic%2Fmedia%2Fae.f80b98e4.png&w=1920&q=75" alt="" className=" w-96 ml-24"/>
        </div>
    </div>
  )
}

export default Account
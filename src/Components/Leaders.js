import React from 'react'

const Leaders = () => {
  return (
    <div className='flex'>
        <div className='main'>
        <h1 className='text-4xl'>Empower your team to beat quota</h1>
        <p className='mt-5 w-4/5 text-lg'>Boost your team’s productivity and performance with consolidated workflows and AI-driven insights.</p>
        <ul className='mt-5 text-lg'>
            <li>Deal Management: Get end-to-end pipeline visibility</li>
            <li>Analytics: Drive success with data-driven insights</li>
            <li>Coaching: Give reps actionable feedback on calls and more</li>
        </ul>
        <button className='bg-black border-2 border-black text-white rounded-md pl-4 pr-4 pt-2 pb-2 mt-5  hover:bg-gray-900'>Learn More</button>
        </div>
        <div className='flex'>
            <img src="https://netlify.apollo.io/_next/image?url=https%3A%2F%2Fnetlify.apollo.io%2F_next%2Fstatic%2Fmedia%2Fsales-leaders.735d3891.png&w=1920&q=75" alt="" className=" w-96 mr-80"/>
        </div>
    </div>
  )
}

export default Leaders
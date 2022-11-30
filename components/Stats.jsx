import React from 'react'
import { TfiYoutube } from 'react-icons/tfi'

const Stats = () => {
  return (
    <div className='bg-gradient-to-r from-transparent to-red-600'>
      <div className='mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20'>
         <div className='mx-auto max-w-4xl text-center'>
          <h2 className='  text-3xl font-bold tracking-tight text-white sm:text-4xl'>
           As Seen on 
          </h2>
          <div className='flex justify-center py-8'><TfiYoutube size={90} style={{color: 'red'}}/></div>
          <p className='mt-3 text-xl text-red-900 sm:mt-4'>
         Knowledgeable, Professional, Caring Appliance Experts 
          </p>
         </div>
         <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">YouTube Subscribers</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">5,000+</dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Views</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">2 Million+</dd>
          </div>
          <div className="mt-10 flex flex-col sm:mt-0">
            <dt className="order-2 mt-2 text-lg font-medium leading-6 text-indigo-200">Years in Business</dt>
            <dd className="order-1 text-5xl font-bold tracking-tight text-white">17+</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Stats
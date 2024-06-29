import React from 'react'

const Mission = () => {
  return (
    <>
    <h1 className='text-3xl md:text-4xl font-semibold text-gray-800 my-10'>Our Mission</h1>
    <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time> */}
        <h3 class="text-lg font-semibold text-gray-900 ">Pursuit of Excellence</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Pursuit of excellence in academics Games and sports, Co-curricular activities and in Human Values.
            </p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a> */}
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time> */}
        <h3 class="text-lg font-semibold text-gray-900 ">Lifelong Learning</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400"
        >Encouraging a desire for lifelong learning.
        </p>
    </li>
    <li class="mb-10 ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time> */}
        <h3 class="text-lg font-semibold text-gray-900 ">Holistic Development</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        Helping the students to discover what is it to live and grow with clarity of thought, with harmony in nature with beauty and freedom in the world.
       </p>
    </li>
    <li class="ms-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        {/* <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time> */}
        <h3 class="text-lg font-semibold text-gray-900 ">Responsible Citizenship</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">
           Creating responsible, disciplined and secular citizens.
            </p>
    </li>
</ol>
    </>



  )
}

export default Mission
import React from 'react';
const Newsletter = () => {
  return ( 
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
          <div className='lg:col-span-2'>
             <h1 className='md:text-5xl sm:text-3xl text-xl font-bold py-2'>Want Tips & Tricks to optimize your flow?</h1>
             <p>Sign up to our newsletter and stay up to date</p>
          </div>
          <div className='my-4'>
               <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                 <input type="email" placeholder='Enter Email' className='p-3 flex w-full rounded-md text-black px-4'/>
                 <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-4 py-3 text-black ml-4'>Notify Me</button>
               </div>
               <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span></p>
          </div>
        </div>
    </div>
   );
}
 
export default Newsletter;
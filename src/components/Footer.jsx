import React from 'react'
import img from '../assets/logo.svg'
const Footer = () => {
  return (
    <footer className=' mx-auto  py-5 bg-[white] text-[#333] ' >
      <div className='text-center flex justify-between items-center'>
        <div className='ml-[200px] mt-[50px] text-left mt-[-100px]'>
       <div className='flex '>
         <img src={img} alt="" />
        </div>
        <h1 className='text-3xl text-[10px]'>Smart business</h1>
        <h1 className='text-3xl text-[10px]'>Community</h1>
           </div>
        
     <div className='flex justify-between items-center mr-[200px] gap-40 text-left'>
     <div>
          <h1 className='font-bold text-3xl'>Resources</h1>
          <ul className='mt-[30px] text-[25px] '>
            <li>Start Business</li>
            
            <li>Digital Marketing</li>
            <li>Course Creation</li>
            <li>Property Single</li>
            <li>Business Accelerator</li>
           
          </ul>
        </div>

        <div>
          <h1 className='font-bold text-3xl'>Mission</h1>
          <ul className='mt-[30px] text-[25px]'>
            <li>About Digital Analyst </li>
           
            <li>Team</li>
            <li>Become a Partner</li>
            
            <li>Privacy Policy</li>
           
          </ul>
        </div>

        <div>
          <h1 className='font-bold text-3xl'>Contact  </h1>
        <ul className='mt-[30px] text-[25px]'>
          <li>041-774073</li>
          <li>hello@digitalanalyst.org</li>
          <li>Contact Form</li>
         
        
         </ul>
        </div>

     </div>
    
   
        
        
        
     
       
      </div>
      
      <div>
        <button className='w-[100%] h-[3px] bg-[#0082F4] '></button>
      </div>
      
      
      
      <div className='text-center mt-[50px] bg-[#0082F4]'>
      &copy;  2021 DigitalAnalyst.org. A 50 non-profit organization. EIN: -3410655
      </div>
      
    </footer>
  )
}

export default Footer

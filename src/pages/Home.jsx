import React from 'react'
import img from '../assets/Image.svg'
import img1 from '../assets/Group 171.svg'
import img2 from '../assets/Image 2.svg'
import img3 from '../assets/Rectangle 36.svg'
import img4 from '../assets/1st feature.svg'
import img5 from '../assets/2nd icon.svg'
import img6 from '../assets/final icon.svg'
import img7 from '../assets/Ellipse 106.svg'
import img8 from '../assets/Ellipse 106 (1).svg'
import img9 from '../assets/Ellipse 106 (2).svg'
import { TfiEmail } from "react-icons/tfi"




const Home = () => {
  return (
<>
{/* boshi */}
<div className='flex justify-between items-center mx-auto relative w-[100vw] container'>
<div className=' w-[450px]  translate-y-[-80px] '>
<h2 className='text-[#0082F4] font-5xl '>SMART BUSINESS</h2>
<h1 className='text-[black] font-bold text-5xl mt-[10px]'>Connecting people is our <b className='text-[#0082F4]'>business</b></h1>
<p className='text-[black] text-[14px] pt-[15px]'>As a rule the organization settles on the inventive and media choices.
   Regularly it supplies supporting statistical.</p>

   <div className='flex gap-10 pt-[50px]'>
   <button className='bg-[#0082F4] text-[white] px-4 py-2  mt-[10px] '>GET STARTED</button>
   <button className='text-[black] px-4 py-2 mt-[10px] border-[1px] flex gap-2'> <img src={img1} alt="" /> Play Video</button>
   </div>

</div>
<div className='relative '>
<img src={img} alt="" className=' mx-auto translate-x-[-190px] pt-[50px]'/>
</div>

</div>
{/* tugadi */}


{/* boshi */}
<div className='container mx-auto flex justify-between items-center pt-[100px] w-[100vw] relative mt-[100px]'>

<div className='relative translate-x-[150px]'>
<img src={img2} alt="" className='absolute translate-y-[100px] translate-x-[-100px]' />
<img src={img3} alt="" />
</div>

<div className='w-[600px] translate-y-[-50px]'>
  <h2 className='text-[#0082F4] font-5xl '>COMMUNITY</h2>
  <h1 className='text-[black] font-bold text-5xl mt-[10px]'>Platform Dedicated To Promoting   </h1>
  <p className='text-[black] text-[14px] pt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum sagittis ultrices
      consectetur adipiscing elit. fringilla quisque pulvinar..</p>
  <button className='bg-[#0082F4] text-[white] px-4 py-2  mt-[40px] rounded '>Whate we do</button>
</div>

</div>
{/* tugadi */}

{/* boshi */}
<div className='container mx-auto  items-center pt-[100px] w-[100hw] mt-[200px]'>
<div> <h1 className='text-[black] text-5xl font-[600] text-center bold'>How We Work</h1></div>

<div className='text-center w-[800px]  mx-auto grid grid-cols-3 gap-8 pt-[50px]'>
  <div className='w-[250px] '>
    <img src={img4} alt="" className='text-center items-center p-10' />
   <div className='pt-[20px] text-center '>  
    <h6 className='font-[700]'>Start Design </h6>
   <p className='text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.</p></div> 
 
    </div>


  <div className='w-[250px] '>
  
    <img src={img5} alt="" className='text-center items-center p-10'/>
    <div className='pt-[20px] text-center'>
    <h6 className='font-[700]'>Go to Code</h6>
    <p className='text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.</p>
    </div>
    </div>



<div className='w-[250px] '>
  <img src={img6} alt="" className='text-center items-center p-10' />
 <div className='pt-[20px] text-center'>
  <h6 className='font-[700]'>Final Deliverd</h6>
  <p className='text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra suscipit adipiscing elit.</p></div>
  </div>
</div>
{/* tugadi */}

</div>

{/* boshlandi */}
<div className='container mx-auto  items-center  w-[100hw] mb-[100px] '>
<div><h1 className='text-[black] text-5xl font-[600] text-center bold pt-[100px]'>What Our Customers are Saying.</h1></div>

<div className='text-center w-[1500px]  mx-auto grid grid-cols-3  gap-5 pt-[50px]'>

 <div className='w-[450px] h-[300px] border-[1px] border-black p-[30px] rounded flex text-center '>
 <div className='w-[50px] h-[300px] absolute bg-[#058AFF] rounded mt-[-30px] ml-[-30px]'></div>

 <div className='absolute p-20 ml-[-90px] '> <img src={img7} alt="" /></div>
  
 
   <div> 
   <p className='text-[#000000] text-[20px] text-left w-[200px] ml-[150px]'>I recently concluded a complete messaging revamp for an exciting com</p>
  
     <div className='flex items-center gap-7 ml-[100px] mt-[70px]'><button className='w-[30px] h-[1px] border-[1px] border-black'></button>
  <h6 className='font-bold'>Leo Aminoff</h6></div> 
  <h6 className='text-[#000000] ml-[85px]'>Product Designer</h6></div> 
 

</div>


<div className='w-[450px] h-[300px] border-[1px] border-black p-[30px] rounded flex text-center '>
 <div className='w-[50px] h-[300px] absolute bg-[#058AFF] rounded mt-[-30px] ml-[-30px]'></div>

 <div className='absolute p-20 ml-[-90px] '> <img src={img8} alt="" /></div>
  
 
   <div> 
   <p className='text-[#000000] text-[20px] text-left w-[200px] ml-[150px]'>I recently concluded a complete messaging revamp for an excitin company </p>
  
     <div className='flex items-center gap-7 ml-[100px] mt-[70px]'><button className='w-[30px] h-[1px] border-[1px] border-black'></button>
  <h6 className='font-bold'>Leo Aminoff</h6></div> 
  <h6 className='text-[#000000] ml-[85px]'>Product Designer</h6></div> 
 

</div>


<div className='w-[450px] h-[300px] border-[1px] border-black p-[30px] rounded flex text-center '>
 <div className='w-[50px] h-[300px] absolute bg-[#058AFF] rounded mt-[-30px] ml-[-30px]'></div>

 <div className='absolute p-20 ml-[-90px] '> <img src={img9} alt="" /></div>
  
 
   <div> 
   <p className='text-[#000000] text-[20px] text-left w-[200px] ml-[150px]'>I recently concluded a complete messaging revamp for an exciting 
    company in the Cloud strategic advisory space.</p>
  
     <div className='flex items-center gap-7 ml-[100px] mt-[15px]'><button className='w-[30px] h-[1px] border-[1px] border-black'></button>
  <h6 className='font-bold'>Leo Aminoff</h6></div> 
  <h6 className='text-[#000000] ml-[85px]'>Product Designer</h6></div> 
 

</div>

</div>


</div>
{/* tugadi */}


{/* boshlandi */}
<div className=' mx-auto items-center  mb-[100px] text-center bg-[#E8ECFF4D] '>
<h1 className='text-[#058AFF] text-5xl font-[600] text-center bold pt-[100px]'>Sign Up to Our Newsletter</h1>
<h2 className='text-[#000000] text-4xl font-[600] text-center bold pt-[20px]'>Yours could be one of them.</h2>
<div className='flex items-center justify-center mt-[30px] container mx-auto'>
  <button className='border-[1px] border-[#058AFF] w-[600px] h-[90px] rounded '> < TfiEmail  className='text-3xl absolute ml-[20px] mt-[20px]' /> 
   Enter Your Email 
    <button className='w-[105px] h-[55px] bg-[#0082F4] rounded ml-[250px] text-[white]'>Send</button>
  </button>
</div>  
 
</div>









</>
  )
}

export default Home
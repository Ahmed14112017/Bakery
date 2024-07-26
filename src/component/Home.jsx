import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center mdl:overflow-hidden '>
 <div>
 <div className='w-full h-screen flex flex-col  gap-5 mdl:flex-row justify-center items-center relative'>
       
       <div className='left-side p-10 flex flex-col gap-8 pl-10 items-start justify-between w-[60%] h-screen bg-backgroundcolor' >
       <div>
       <sapn className="text-white text-xl">Peachy Pup </sapn>
       <p className="text-white text-xl">Bakery</p>
       </div>
       
       <div>
       <h1 className='text-6xl text-white uppercase  font-bold'>Tasty pastries</h1>
         <p className='text-white py-8 tracking-wide w-[65%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
             Lorem Ipsum has been the industry's standard dummy text ever since the
             </p>
             <button className='text-white border-none  bg-designColor w-[150px] h-10 rounded-3xl'>see more</button>
       </div>
        <div className='flex flex-row-reverse gap-5'>
        <span className='text-white mt-0 mdl:mt-20'>Telephone:+7 700 000 00 00</span>
             <div className='flex  mdl:flex-col text-backgroundcolor2 gap-5'>
                 <FaFacebook/>
                 <FaTwitter />
                 <FaLinkedin />
                 <FaInstagram /> 
             </div>
        </div>
            
       </div>
       <div className='right-side w-[40%] h-screen overflow-hidden '>
         <img src="src\assets\MaskGroup.png" className='object-cover' />
 
       </div>
       <div className='hidden mdl:block w-[400px] absolute top-[30%] left-[50%]'>
       <img src="src\assets\bakery.png" className='object-cover' />
       
       </div>
      
     </div>
    </div>
   
    <div className='flex flex-col mdl:flex-row-reverse gap-5  w-full h-screen relative z-10'>
        <div className='bg-backgroundcolor w-full mdl:w-[60%] max-h-[600px]'>
            <div className='w-[400px] flex flex-col items-end py-8'>    
            <h1 className='text-6xl text-white  uppercase  font-bold'>how we </h1>
            <h1 className='text-6xl text-white uppercase  font-bold'>work</h1>
            </div>
            <div className='flex flex-col mdl:flex-row mdl:justify-center w-full py-10 items-center gap-5 absolute left-0 px-5'>
                <img src='\src\assets\1.png' className='w-[250px] object-contain' />
                <img src='\src\assets\2.png' className='w-[250px] object-contain'/>
                <img src='\src\assets\3.png' className='w-[250px] object-contain'/>
                <img src='\src\assets\4.png' className='w-[250px] object-contain'/>
            </div>
        </div>
        <div className='hidden mdl:block w-[40%] max-h-[600px]'>
            <p className='text-backgroundcolor w-[400px] p-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <img src='src\assets\MaskGroup.png' className='object-contain' />
        </div>
   
  </div>
    </div>
   
  )
}

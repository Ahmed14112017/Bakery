import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



export default function Contact() {
    const[formdata,setformdata]=useState({fullname:"",email:"",number:""})

    

    const handeldata=(e)=>{
        const {name,value}=e.target
        setformdata({
          ...formdata,
          [name]:value
        })
    }
    const cleardata=()=>{
      setformdata({fullname:"",email:"",number:""})
    }
    const handelsubmit=(e)=>{
      e.preventDefault()
      if(!formdata.fullname||!formdata.email||formdata.number){
        alert("please fill the form")
      }else{
        cleardata()
        alert("form submitted")
      }
     
    }
  return (
    <div id='Contact' className='w-full py-20'>
      <div className='flex flex-col gap-5 justify-between items-center'>
        <h1 className='text-backgroundcolor text-6xl uppercase font-bold'>Contact us</h1>
        <div className='flex flex-col mdl:flex-row py-10 justify-center gap-16 items-center w-[60%]'>
        <div >
            <form className='flex flex-col gap-8' onSubmit={handelsubmit}>
            <input type='text' placeholder='full name' name='fullname' value={formdata.fullname} onChange={handeldata}/>
            <input type='email' placeholder='email' name='email' value={formdata.email}  onChange={handeldata}/>
            <input type='number' placeholder='number' name='number' value={formdata.number}  onChange={handeldata}/>
            <button className='text-white border-none  bg-designColor w-[150px] h-10 rounded-3xl'> send</button>

            </form>
            </div>
            <div>
            <MdEmail  className='text-backgroundcolor mb-5'/>
            <FaPhoneAlt  className='text-backgroundcolor'/>
            
           

        </div>

        </div>

      </div>
    </div>
  )
}

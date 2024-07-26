import React from 'react'

export default function About() {
  return (
    <div className='w-full mdl:relative '>
        <div className='w-full  mdl:w-[60%] bg-backgroundcolor h-auto p-20'>
        <h1 className='text-6xl text-white w-24 uppercase font-bold '>About us</h1>
        <p className='py-5 text-white tracking-wide w-96'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
             <button className='text-white border-none  bg-designColor w-[150px] h-10 rounded-3xl'>contact us</button>
        <div className='w-[40%]'>
            <img src='src\assets\chife.png ' className='hidden mdl:block mdl:absolute top-16 right-60 w-[450px]' />
        </div>
        </div>
      
    </div>
  )
}

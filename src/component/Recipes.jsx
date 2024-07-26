import React, { useEffect, useState } from 'react'

export default function Recipes() {
    const [Recipes,SetRecipes]=useState([])
    const Getdata=async()=>{
        try{
            const response=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
            if(!response.ok){
                throw new Error("faild to fetch data")
            }
            const data=await response.json()
            console.log(data)
            SetRecipes(data.meals.slice(0, 6))
            console.log(Recipes)
        }catch (error){
            console.error("error fetch data",error)
        }
        
        
        
    }
    useEffect(()=>{
        Getdata()
    },[])
  return (
    <div id='Recipes' className='w-full p-16'>
      <div className='flex flex-col gap-5 justify-between items-center'>
    <h1 className='text-6xl font-bold text-backgroundcolor uppercase py-10'>Recipes</h1>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full'>
            {Recipes.map((items)=>{
                return(
                    <div key={items.idMeal} >
                        <img src={items.strMealThumb} className='object-contain' />
                        <h3 className='py-5 text-backgroundcolor font-semibold'>{items.strMeal}</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled</p>
                    </div>
                    
                )
            })}
        </div>
        <button className='text-white border-none  bg-designColor w-[150px] h-10 rounded-3xl'>contact us</button>

      </div>
    </div>
  )
}

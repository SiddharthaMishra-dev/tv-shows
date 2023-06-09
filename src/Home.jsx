import Show from './show'
import { useEffect, useState } from 'react'

function Home (){
    const [series,setSeries]=useState([])
  const getApi=async()=>{
    const response=await fetch("https://api.tvmaze.com/search/shows?q=all")
    const result=await response.json()
    setSeries(result)
  }
  useEffect(()=>{
    getApi()
  },[])
  return (
    <>
      <h1 className='text-center'>RELAXIFY</h1>
      <div className="row p-4">
        {series.map((show)=>{
          return (
            <Show show={show}/>
            )
          })}
      </div>
    </>
  )
}
export default Home
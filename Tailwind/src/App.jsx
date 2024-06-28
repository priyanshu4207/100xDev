import { useState } from 'react'

function App() {
 
  return (
    <>
    <div style={{display : 'flex' , justifyContent : "center"}}>
      <div style={{backgroundColor : "red"}}>hi</div>
      <div style={{backgroundColor : "blue"}}>hi</div>
      <div style={{backgroundColor : "yellow"}}>hi</div>
    </div>
    <div className = 'flex justify-center'>
      <div className='bg-red-500'>hi</div>
      <div className='bg-blue-500'>hi</div>
      <div className='bg-yellow-500'>hi</div>
    </div>
    <div className='grid grid-cols-10'>
      <div className='bg-red-500 col-span-4 md : bg-yellow-500'>hi</div>
      <div className='bg-blue-500 col-span-4'>hi</div>
      <div className='bg-yellow-500 col-span-2'>hi</div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className='bg-red-500 '>hi</div>
      <div className='bg-blue-500'>hi</div>
      <div className='bg-yellow-500'>hi</div>
    </div>


    </>
  )
}

export default App

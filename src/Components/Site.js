import React from 'react'

const Site=(props)=>{
    const {title,image}=props;
  return (
    <div className='bg-gray-200 rounded-3xl flex w-72 p-1 my-4 items-center'>
        <img src={`img/sites/${image}.png`} width="40px" height="30px" className='rounded-xl'/>{title}
        <button className='ml-auto bg-gray-300 rounded-xl mr-2 text-xs text-blue-500 px-4 py-1'>
            Sign in
        </button>
    </div>
  )
}

export default Site
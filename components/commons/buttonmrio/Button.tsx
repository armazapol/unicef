import React from 'react'

type Props = {
    text: string;
  };

const Button = ({text}:Props) => {
  return (
    <div className='bg-blue-900 rounded-full py-2 px-5 min-w[5rem] lg:min-w-[10rem] text-white font-bold text-xs  lg:text-xl cursor-pointer z-20 shadow-md shadow-black'>{text}</div>
  )
}

export default Button
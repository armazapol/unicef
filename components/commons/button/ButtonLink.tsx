import React from 'react'

type Props = {
    text: string;
    // style: string | null | undefined;
  };

const ButtonLink = ({text}:Props) => {
  return (
    <div className={`bg-gradient-to-r from-[#0b2d61] to-[#0e70cc] rounded-xl py-2 px-5 text-white font-bold text-xs lg:text-base cursor-pointer z-20 shadow-md shadow-black  m-1 inline-block`}>{text}</div>
  )
}

export default ButtonLink
import { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { FaUser } from "react-icons/fa";
// import { RiBarChart2Fill } from "react-icons/ri";
// import { BiHelpCircle } from "react-icons/bi";
// import { useRouter } from 'next/dist/client/router';

// import { useAuthContext } from '../../../context/auth';

interface Props {
  // any props that come into the component
  children: any;
}

const MainAuth: FC<Props> = ({ children }) => {


  return (
    <div className='h-screen bg-blue-500 flex'>
      <div className='w-96 bg-black'>
        
      </div>
      <div className='flex-1 bg-slate-400'>
        {children}
      </div>
    </div>
  );
};

export default MainAuth;

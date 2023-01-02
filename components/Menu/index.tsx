import React from "react";

const Menu = () => {
  return (
    <div className="flex fixed w-screen h-screen items-center justify-center text-white top-0 left-0 gap-10">
      <div className="flex">
        <ul className="text-white text-center text-xl lg:text-3xl flex flex-col gap-5 ">
          <li className="hover:underline cursor-pointer">Galería</li>
          <li className="hover:underline cursor-pointer">Videos</li>
          <li className="hover:underline cursor-pointer"><a href="https://unicef.org.pe/">Web</a> </li>
          <li className="hover:underline cursor-pointer">Trivia</li>
          <li className="hover:underline cursor-pointer">Emparejar</li>
          <li className="hover:underline cursor-pointer">Clasificar</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

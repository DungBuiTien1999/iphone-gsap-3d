import React from "react";
import { appleImg, bagImg, searchImg } from "../../utils";
import { navLists } from "../../constants";

export const Navbar: React.FC = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center h-[60px]">
      <nav className="flex w-full items-center screen-max-width">
        <img src={appleImg} alt="apple" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, idx) => (
            <div
              className="px-5 text-sm text-gray hover:text-white cursor-pointer transition-all"
              key={idx}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="search" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

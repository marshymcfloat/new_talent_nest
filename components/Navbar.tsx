import React from "react";
import AuthButton from "./AuthButton";

const Navbar = () => {
  return (
    <nav className="flex py-6 px-4  w-full justify-between items-center h-[10px] bg-slate-400">
      <h1 className="text-lg uppercase font-bold">talent nest</h1>
      <ul className="flex gap-4 justify-center  items-center">
        <li>Home</li>
        <li>About us</li>
        <li>
          <AuthButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

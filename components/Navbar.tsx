import React from "react";
import AuthButton from "./AuthButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex py-6 px-4  w-full justify-between items-center h-[10px] bg-purple-500  ">
      <h1 className="text-lg uppercase font-bold">talent nest</h1>
      <ul className="flex gap-4 justify-center  items-center font-medium uppercase">
        <Link href={"/jobs"}>
          <li>Jobs</li>
        </Link>
        <li>About us</li>
        <li>
          <AuthButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

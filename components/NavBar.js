import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Button from "./Button";
const NavBar = () => {
  const iconSize = "1.2rem";
  return (
    <div className="w-full flex items-center  h-20 shadow-md shadow-slate-200">
      <nav className="flex flex-1 justify-between max-w-6xl mx-auto px-4">
        <div className="flex items-center">
          <Link href="/" className="font-extrabold text-2xl text-blue-900	">
            JsEnthusiast
          </Link>
        </div>
        <div className="md:flex md:items-center hidden">
          <ul className="flex items-center">
            <li className="mx-4 font-semibold text-slate-600 lg:hover:text-blue-950 lg:active:text-blue-950">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-4 font-semibold text-slate-600 lg:hover:text-blue-950 lg:active:text-blue-950">
              <Link href="/portfolio">My Work</Link>
            </li>
            <li className="mx-4 font-semibold text-slate-600 lg:hover:text-blue-950 lg:active:text-blue-950">
              <Link href="/contact">Contact</Link>
            </li>
            <Button
              classes="mx-4 font-semibold border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-md"
              title="Resume"
            />
          </ul>
        </div>
        <div className="md:flex md:items-center hidden">
          <ul className="flex items-center">
            <li className="mx-2 text-slate-500 lg:hover:text-blue-950">
              <Link href="">
                <FaLinkedinIn size={iconSize} />
              </Link>
            </li>
            <li className="mx-2 text-slate-500 lg:hover:text-blue-950">
              <Link href="">
                <FaGithub size={iconSize} />
              </Link>
            </li>
            <li className="mx-2 text-slate-500 lg:hover:text-blue-950">
              <Link href="">
                <FaTwitter size={iconSize} />
              </Link>
            </li>
            <li className="mx-2 text-slate-500 lg:hover:text-blue-950">
              <Link href="">
                <GrInstagram size={iconSize} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

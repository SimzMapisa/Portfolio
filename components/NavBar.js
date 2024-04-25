import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Button from "./Button";
import Image from "next/image";

const NavBar = () => {
  const iconSize = "1.2rem";
  return (
    <div className="fixed z-50 bg-white w-full flex items-center  h-20 shadow-md shadow-slate-200">
      <nav className="flex flex-1 justify-between max-w-6xl mx-auto px-4">
        <div className="flex items-center">
          <Link href="/" className="font-extrabold text-2xl text-blue-900	">
            <Image
              src="/images/simbacoderoar-logo.png"
              width={60}
              height={60}
            />
          </Link>
        </div>
        <div className="md:flex md:items-center hidden">
          <ul className="flex items-center">
            <li className="mx-4 text-sm font-normal text-slate-700 lg:hover:text-blue-950 lg:active:text-blue-950">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-4 text-sm font-normal text-slate-700 lg:hover:text-blue-950 lg:active:text-blue-950">
              <Link href="/portfolio">Projects</Link>
            </li>
            <li className="mx-4 text-sm font-normal text-slate-700 lg:hover:text-blue-950 lg:active:text-blue-950">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="mx-4 text-sm font-normal text-slate-700 lg:hover:text-blue-950 lg:active:text-blue-950">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="md:flex md:items-center hidden">
          {/* <Button
            classes="mx-4 font-semibold border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-md"
            title="Resume"
          /> */}
          <Link
            className="px-5 py-3 rounded-lg bg-violet-700 flex text-white"
            href="/portfolio"
          >
            Download Resume{" "}
            <span className="pl-3 text-2xl">
              <Image src="/images/Download.svg" width={20} height={20} />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

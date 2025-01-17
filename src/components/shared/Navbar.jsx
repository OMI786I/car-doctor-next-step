import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoBagOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  const navLItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLItems.map((res) => (
              <li>
                <Link
                  className="hover:text-primary duration-200"
                  href={res.path}
                  key={res.path}
                >
                  {res.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link href={"/"}>
            {" "}
            <Image src="/assets/logo.svg" height={60} width={50} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLItems.map((res) => (
            <li>
              {" "}
              <Link
                className="hover:text-primary duration-200"
                href={res.path}
                key={res.path}
              >
                {res.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <IoBagOutline />
        <CiSearch />
        <a className="btn btn-outline btn-primary">Appointment</a>
        <a href="/login" className="btn  btn-primary">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, User, FileText, Search, Menu, X } from "lucide-react";
import Navbar from "./Navbar";
import { MdHomeFilled } from "react-icons/md";
import { LuScrollText } from "react-icons/lu";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/", icon: MdHomeFilled },
    { name: "Listings", href: "/listings", icon: Briefcase },
    { name: "Users", href: "/users", icon: User },
    { name: "Request", href: "/request", icon: FileText },
    { name: "Applications", href: "/applications", icon: LuScrollText },
  ];

  return (
    <>
      <Navbar />
      <header className="bg-white border-b w-full flex flex-col">
        <div className="h-16 flex items-center justify-between px-4 lg:px-10">
          <div className="flex items-center w-full md:max-w-xl lg:max-w-3xl">
            <button
              className="md:hidden mr-3"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            <nav className="hidden md:flex flex-1 justify-between text-sm lg:text-base">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#F5F5F5] font-semibold text-black"
                        : "text-gray-600  hover:font-medium  hover:text-black transition-all ease-in-out duration-1000 "
                    }`}
                  >
                    <Icon className="h-4 w-4 text-black" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Search */}
          {/* Large screens: always visible */}
          <div className="hidden lg:block relative w-72 xl:w-96">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search listings, users here..."
              className="border rounded-lg pl-10 pr-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Medium screens: just an icon */}
          <button
            className="md:block lg:hidden ml-4"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Medium search dropdown */}
        <div
          className={`md:block lg:hidden overflow-hidden transition-all duration-300 ${
            searchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative px-4 pb-3">
            <Search className="absolute left-7 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search listings, users here..."
              className="border rounded-lg pl-10 pr-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="w-full md:hidden bg-white border-t px-4 py-3 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#F5F5F5] font-semibold text-black"
                    : "text-gray-600 hover:bg-[#F5F5F5] hover:text-black"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <Icon className="h-4 w-4 text-black" />
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

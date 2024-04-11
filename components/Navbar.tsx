"use client"
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-800 fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/">
                  <div className="flex items-center">
                    <span className="sr-only">Logo</span>
                    <Image
                      className="h-8 w-auto"
                      src="/layers.png"
                      alt="Logo Here"
                      width={120}
                      height={40}
                    />
                    <h1 className="text-white">Brett.dev</h1>
                  </div>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavItem href="/">Home</NavItem>
                  <NavItem href="/about">About</NavItem>
                  <NavItem href="/services">Services</NavItem>
                  <NavItem href="/contact">Contact</NavItem>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <ChevronDown className={cn("h-6 w-6", isOpen && "transform rotate-180")} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50" onClick={closeMenu}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="h-screen bg-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <NavItem href="/">Home</NavItem>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/services">Services</NavItem>
                <NavItem href="/contact">Contact</NavItem>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className="block w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 rounded-md transition-colors duration-300">
        {children}
      </div>
    </Link>
  );
};

export default Navbar;

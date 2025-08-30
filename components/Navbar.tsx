"use client";

import React, { useState } from "react";
import AuthButton from "./AuthButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { href: "/jobs", label: "Jobs" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <>
      <header
        className={cn(
          "flex w-full items-center justify-between px-4 sm:px-8 py-4",
          "sticky top-0 z-50",
          "bg-zinc-950/70 ",
          "border-b border-white/10"
        )}
      >
        <Link href="/" className="text-xl font-bold tracking-wider text-white">
          TALENT NEST
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase transition-colors",
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <AuthButton />
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-950/95  md:hidden">
          <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-xl font-bold tracking-wider text-white"
            >
              TALENT NEST
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-8 pt-16">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-medium text-white/80 transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8">
              <AuthButton />
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;

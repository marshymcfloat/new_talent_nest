"use client";

import React, { useState } from "react";
import AuthButton from "./AuthButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/jobs", label: "Find Jobs" },
    { href: "/about", label: "About Us" },
  ];

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const navContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <header
        className={cn(
          "flex w-full items-center justify-between px-4 sm:px-8 py-4",
          "sticky top-0 z-50",
          "bg-background/80 backdrop-blur-lg",
          "border-b border-border"
        )}
      >
        <Link
          href="/"
          className="text-xl font-bold tracking-wider text-foreground transition-colors hover:text-purple-500"
        >
          TALENT NEST
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium uppercase transition-colors relative",
                  isActive
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-purple-500"
                    layoutId="underline"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
          <AuthButton />
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-border">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-bold tracking-wider text-foreground"
              >
                TALENT NEST
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-foreground" />
              </button>
            </div>

            <motion.nav
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center gap-8 pt-16"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={navItemVariants}>
                  <Link
                    href={link.href}
                    className="text-2xl font-medium text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={navItemVariants} className="mt-8">
                <AuthButton />
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

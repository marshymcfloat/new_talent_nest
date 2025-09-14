"use client";

import { Plus } from "lucide-react";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CreateQuestionButton from "./CreateQuestionButton";
import CreateJobButton from "./CreateJobButton";
import { useOnClickOutside } from "@/app/hooks/UseOnClickOutside";

const containerVariants = {
  closed: {
    width: "3rem",
    height: "3rem",
    borderRadius: "6rem",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
  open: {
    width: "14rem",
    height: "6rem",
    borderRadius: "1rem",
    backgroundColor: "rgb(139 92 246)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
} as const;

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    y: 5,
    transition: {
      duration: 0.1,
    },
  },
} as const;

const QuickActionnDashboardButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isJobDialogOpen, setIsJobDialogOpen] = useState(false);
  const [isQuestionDialogOpen, setIsQuestionDialogOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(containerRef, () => setIsOpen(false));

  const handleCreateJobClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setIsJobDialogOpen(true);
  };

  const handleCreateQuestionsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setIsQuestionDialogOpen(true);
  };

  return (
    <>
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 flex flex-col justify-center items-center cursor-pointer bg-purple-500 shadow-lg z-50"
        style={{ overflow: "hidden" }}
      >
        <motion.div
          className="absolute"
          animate={{
            rotate: isOpen ? 45 : 0,
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Plus className="text-white" size={24} />
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu-content"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-start w-full px-4"
            >
              <motion.button
                variants={itemVariants}
                onClick={handleCreateJobClick}
                className="text-white text-lg font-medium py-1 w-full text-left hover:bg-white/10 rounded-md px-2 transition-colors capitalize"
              >
                Create Job
              </motion.button>

              <motion.button
                variants={itemVariants}
                onClick={handleCreateQuestionsClick}
                className="text-white text-lg font-medium py-1 w-full text-left hover:bg-white/10 rounded-md px-2 transition-colors capitalize"
              >
                Create Question
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <CreateJobButton
        open={isJobDialogOpen}
        onOpenChange={setIsJobDialogOpen}
        onSuccess={() => setIsJobDialogOpen(false)}
      />
      <CreateQuestionButton
        open={isQuestionDialogOpen}
        onOpenChange={setIsQuestionDialogOpen}
      />
    </>
  );
};

export default QuickActionnDashboardButton;

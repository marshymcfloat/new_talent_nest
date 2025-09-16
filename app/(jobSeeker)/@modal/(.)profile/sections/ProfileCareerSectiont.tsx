"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { CareerHistory } from "@prisma/client";
import { deleteUserCareer } from "@/lib/actions/profileActions";
import CareerCard from "@/components/CareerCard";
import { Button } from "@/components/ui/button";
import { Briefcase, PlusCircle } from "lucide-react";

const itemStaggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};
const itemStagger = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};
const placeholderFade = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

interface Props {
  initialCareers: CareerHistory[];
  onAdd: () => void;
  onEdit: (career: CareerHistory) => void;
}

const ProfileCareerSection = ({ initialCareers, onAdd, onEdit }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: deleteCareer, isPending } = useMutation({
    mutationFn: deleteUserCareer,
    onSuccess: () => {
      toast.success("Career history deleted!");
      queryClient.invalidateQueries({ queryKey: ["profileData"] });
    },
    onError: (error) =>
      toast.error("Failed to delete item.", { description: error.message }),
  });

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold">Career History</h2>
        <Button
          variant="outline"
          onClick={onAdd}
          className="flex items-center gap-2"
        >
          <PlusCircle size={16} /> Add Role
        </Button>
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {initialCareers.length > 0 ? (
            <motion.div
              key="list"
              {...itemStaggerContainer}
              initial="initial"
              animate="animate"
              className="relative border-l-2 ml-4 space-y-10"
            >
              {initialCareers.map((career) => (
                <motion.div key={career.id} layout variants={itemStagger}>
                  <CareerCard
                    {...career}
                    onDelete={() => deleteCareer(career.id)}
                    onUpdate={() => onEdit(career)}
                    description={career.description ?? null}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              {...placeholderFade}
              initial="initial"
              animate="animate"
              className="text-center py-8 px-4 border-2 border-dashed rounded-lg"
            >
              <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold">
                No career history added
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Showcase your experience.
              </p>
              <div className="mt-6">
                <Button onClick={onAdd}>
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Your First Role
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProfileCareerSection;

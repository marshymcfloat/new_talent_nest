"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Education } from "@prisma/client";
import { deleteUserEducation } from "@/lib/actions/profileActions";
import EducationCard from "@/components/EducationCard";
import { Button } from "@/components/ui/button";
import { GraduationCap, PlusCircle } from "lucide-react";

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
  initialEducation: Education[];
  onAdd: () => void;
  onEdit: (education: Education) => void;
}

const ProfileEducationSection = ({
  initialEducation,
  onAdd,
  onEdit,
}: Props) => {
  const queryClient = useQueryClient();

  const { mutate: deleteEducation, isPending } = useMutation({
    mutationFn: deleteUserEducation,
    onSuccess: () => {
      toast.success("Education record deleted!");
      queryClient.invalidateQueries({ queryKey: ["profileData"] });
    },
    onError: (err) =>
      toast.error("Failed to delete record.", { description: err.message }),
  });

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold">Education</h2>
        <Button
          variant="outline"
          onClick={onAdd}
          className="flex items-center gap-2"
        >
          <PlusCircle size={16} /> Add Education
        </Button>
      </div>
      <div className="p-6">
        <AnimatePresence mode="wait">
          {initialEducation.length > 0 ? (
            <motion.div
              key="list"
              {...itemStaggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-4"
            >
              {initialEducation.map((edu) => (
                <motion.div key={edu.id} layout variants={itemStagger}>
                  <EducationCard
                    onDelete={() => deleteEducation(edu.id)}
                    onUpdate={() => onEdit(edu)}
                    {...edu}
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
              <GraduationCap className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold">No education added</h3>
              <p className="mt-1 text-sm text-gray-500">
                List your degrees to build your profile.
              </p>
              <div className="mt-6">
                <Button onClick={onAdd}>
                  <PlusCircle className="mr-2 h-4 w-4" /> Add Your Education
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProfileEducationSection;

"use client";

import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Skill } from "@prisma/client";
import { skillSchema } from "@/lib/zod schemas/profileSchema";
import { updateUserSkills } from "@/lib/actions/profileActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Cog, Loader2, Pencil, PlusCircle, X } from "lucide-react";

const sectionFade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
};

type SkillFormValue = z.infer<typeof skillSchema>;
interface Props {
  initialUserSkills: Skill[];
  allSkills: Skill[];
}

const ProfileSkillsSection = ({ initialUserSkills, allSkills }: Props) => {
  const queryClient = useQueryClient();
  const [editingSkills, setEditingSkills] = useState(false);
  const [addedSkills, setAddedSkills] = useState<Skill[]>(initialUserSkills);
  const [skillSuggestion, setSkillSuggestion] = useState<Skill[] | null>(null);

  const form = useForm<SkillFormValue>({
    resolver: zodResolver(skillSchema),
    defaultValues: { skill: "" },
  });
  const skillInput = form.watch("skill");

  useEffect(() => {
    if (skillInput) {
      const available = allSkills.filter(
        (skill) => !addedSkills.some((added) => added.id === skill.id)
      );
      const suggestions = available.filter((skill) =>
        skill.name.toLowerCase().startsWith(skillInput.toLowerCase())
      );
      setSkillSuggestion(suggestions);
    } else {
      setSkillSuggestion(null);
    }
  }, [skillInput, allSkills, addedSkills]);

  const { mutate: mutateSkills, isPending } = useMutation({
    mutationFn: updateUserSkills,
    onSuccess: () => {
      toast.success("Skills updated!");
      queryClient.invalidateQueries({ queryKey: ["profileData"] });
      setEditingSkills(false);
    },
    onError: (err) =>
      toast.error("Failed to save skills", { description: err.message }),
  });

  const handleAddSkill = (skill: Skill) => {
    setAddedSkills((prev) => [...prev, skill]);
    form.setValue("skill", "");
  };

  const handleRemoveSkill = (skillId: number) => {
    setAddedSkills((prev) => prev.filter((s) => s.id !== skillId));
  };

  const handleCancel = () => {
    setEditingSkills(false);
    setAddedSkills(initialUserSkills);
  };

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold">Skills</h2>
        {!editingSkills && initialUserSkills.length > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setEditingSkills(true)}
            aria-label="Edit Skills"
          >
            <Pencil className="h-5 w-5 text-gray-500" />
          </Button>
        )}
      </div>
      <div className="p-6">
        <AnimatePresence mode="wait">
          {editingSkills ? (
            <motion.div key="editing" {...sectionFade} className="space-y-4">
              <div className="flex flex-wrap gap-2 p-2 rounded-md border min-h-[48px]">
                {addedSkills.map((skill) => (
                  <Badge
                    key={skill.id}
                    variant="secondary"
                    className="flex items-center gap-2 text-sm py-1"
                  >
                    <span>{skill.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill.id)}
                      className="rounded-full hover:bg-gray-500/20"
                    >
                      <X size={14} />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="relative">
                <Form {...form}>
                  <FormField
                    control={form.control}
                    name="skill"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Add a skill</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="e.g., Next.js"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Form>
                {skillSuggestion && skillSuggestion.length > 0 && (
                  <Card className="absolute top-full mt-1 z-10 w-full max-h-40 overflow-y-auto p-2 shadow-lg">
                    <ul className="flex flex-col gap-1">
                      {skillSuggestion.map((s) => (
                        <li
                          key={s.id}
                          className="p-2 text-sm rounded-md cursor-pointer hover:bg-gray-100"
                          onClick={() => handleAddSkill(s)}
                        >
                          {s.name}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div key="display" {...sectionFade}>
              {initialUserSkills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {initialUserSkills.map((skill) => (
                    <Badge
                      variant="secondary"
                      key={skill.id}
                      className="text-sm py-1"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 px-4 border-2 border-dashed rounded-lg">
                  <Cog className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-semibold">
                    No skills added
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Add skills to help employers find you.
                  </p>
                  <div className="mt-6">
                    <Button
                      type="button"
                      onClick={() => setEditingSkills(true)}
                    >
                      <PlusCircle className="mr-2 h-4 w-4" /> Add Skills
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {editingSkills && (
        <div className="flex justify-end gap-3 p-6 pt-0">
          <Button type="button" variant="ghost" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => mutateSkills(addedSkills)}
            disabled={isPending}
          >
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{" "}
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileSkillsSection;

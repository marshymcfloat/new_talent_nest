"use client";

import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Language } from "@prisma/client";
import { languageSchema } from "@/lib/zod schemas/profileSchema";
import { updateUserLanguages } from "@/lib/actions/profileActions";
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
import { Globe, Loader2, Pencil, PlusCircle, X } from "lucide-react";

const sectionFade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
};

type LanguageFormValue = z.infer<typeof languageSchema>;
interface Props {
  initialUserLanguages: Language[];
  allLanguages: Language[];
}

const ProfileLanguagesSection = ({
  initialUserLanguages,
  allLanguages,
}: Props) => {
  const queryClient = useQueryClient();
  const [addingLanguage, setAddingLanguage] = useState(false);
  const [addedLanguage, setAddedLanguage] =
    useState<Language[]>(initialUserLanguages);
  const [languageSuggestion, setLanguageSuggestion] = useState<
    Language[] | null
  >(null);

  const form = useForm<LanguageFormValue>({
    resolver: zodResolver(languageSchema),
    defaultValues: { language: "" },
  });
  const languageInput = form.watch("language");

  useEffect(() => {
    if (languageInput) {
      const available = allLanguages.filter(
        (lang) => !addedLanguage.some((added) => added.id === lang.id)
      );
      const suggestions = available.filter((lang) =>
        lang.name.toLowerCase().startsWith(languageInput.toLowerCase())
      );
      setLanguageSuggestion(suggestions);
    } else {
      setLanguageSuggestion(null);
    }
  }, [languageInput, allLanguages, addedLanguage]);

  const { mutate: mutateLanguages, isPending } = useMutation({
    mutationFn: updateUserLanguages,
    onSuccess: () => {
      toast.success("Languages updated!");
      queryClient.invalidateQueries({ queryKey: ["profileData"] });
      setAddingLanguage(false);
    },
    onError: (err) =>
      toast.error("Failed to save languages", { description: err.message }),
  });

  const handleAddLanguage = (lang: Language) => {
    setAddedLanguage((prev) => [...prev, lang]);
    form.setValue("language", "");
  };

  const handleRemoveLanguage = (langId: number) => {
    setAddedLanguage((prev) => prev.filter((l) => l.id !== langId));
  };

  const handleCancel = () => {
    setAddingLanguage(false);
    setAddedLanguage(initialUserLanguages);
  };

  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-lg shadow-md">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold">Languages</h2>
        {!addingLanguage && initialUserLanguages.length > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setAddingLanguage(true)}
            aria-label="Edit Languages"
          >
            <Pencil className="h-5 w-5 text-gray-500" />
          </Button>
        )}
      </div>
      <div className="p-6">
        <AnimatePresence mode="wait">
          {addingLanguage ? (
            <motion.div key="editing" {...sectionFade} className="space-y-4">
              <div className="flex flex-wrap gap-2 p-2 rounded-md border min-h-[48px]">
                {addedLanguage.map((lang) => (
                  <Badge
                    key={lang.id}
                    variant="secondary"
                    className="flex items-center gap-2 text-sm py-1"
                  >
                    <span>{lang.name}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveLanguage(lang.id)}
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
                    name="language"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Add a language</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="e.g., Spanish"
                            autoComplete="off"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Form>
                {languageSuggestion && languageSuggestion.length > 0 && (
                  <Card className="absolute top-full mt-1 z-10 w-full max-h-40 overflow-y-auto p-2 shadow-lg">
                    <ul className="flex flex-col gap-1">
                      {languageSuggestion.map((l) => (
                        <li
                          key={l.id}
                          className="p-2 text-sm rounded-md cursor-pointer hover:bg-gray-100"
                          onClick={() => handleAddLanguage(l)}
                        >
                          {l.name}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div key="display" {...sectionFade}>
              {initialUserLanguages.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {initialUserLanguages.map((lang) => (
                    <Badge
                      variant="secondary"
                      key={lang.id}
                      className="text-sm py-1"
                    >
                      {lang.name}
                    </Badge>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 px-4 border-2 border-dashed rounded-lg">
                  <Globe className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-semibold">
                    No languages added
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    List the languages you speak.
                  </p>
                  <div className="mt-6">
                    <Button
                      type="button"
                      onClick={() => setAddingLanguage(true)}
                    >
                      <PlusCircle className="mr-2 h-4 w-4" /> Add Languages
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {addingLanguage && (
        <div className="flex justify-end gap-3 p-6 pt-0">
          <Button type="button" variant="ghost" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => mutateLanguages(addedLanguage)}
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

export default ProfileLanguagesSection;

"use client";

import { useState, useEffect, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Card, CardContent } from "./ui/card";
import { Loader2 } from "lucide-react";
import { useDebounce } from "@/app/hooks/UseDebounce";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addEducationSchema } from "@/lib/zod schemas/profileSchema";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { addUserEducation } from "@/lib/actions/profileActions";
import { toast } from "sonner";
import { User, Education, CareerHistory } from "@prisma/client";

// --- Type Definitions ---

// The structure of a single university from the HipoLabs API
type University = {
  name: string;
  country: string;
};

// The shape of the data stored in the "profile" query cache.
// This is crucial for providing type safety to React Query.
type ProfileData = User & {
  education: Education[];
  previousCareers: CareerHistory[];
  summary?: string;
};

// Type for the form values, inferred from your Zod schema
type AddEducationValue = z.infer<typeof addEducationSchema>;

// --- Constants & Helpers ---

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
const months = Array.from({ length: 12 }, (_, i) =>
  new Date(0, i).toLocaleString("default", { month: "short" })
);

// Helper map to convert month names (e.g., "Sep") to numbers (e.g., 9)
const monthNameToNumber: { [key: string]: number } = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

// API fetching function for the universities autocomplete
const fetchUniversities = async (query: string): Promise<University[]> => {
  if (!query) return [];
  const response = await fetch(
    `http://universities.hipolabs.com/search?name=${query}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// --- The Component ---

const AddEducationForm = ({ onCancel }: { onCancel: () => void }) => {
  const queryClient = useQueryClient();
  const form = useForm<AddEducationValue>({
    resolver: zodResolver(addEducationSchema),
    defaultValues: {
      course: "",
      institution: "",
      isComplete: true,
      expectedFinishMonth: "",
      expectedFinishYear: "",
      finishedYear: "",
      highlights: "",
    },
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const {
    data: universities,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["universities", debouncedSearchQuery],
    queryFn: () => fetchUniversities(debouncedSearchQuery),
    enabled: !!debouncedSearchQuery,
  });

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const { mutate, isPending } = useMutation({
    mutationKey: ["profile"],
    mutationFn: addUserEducation,
    onMutate: async (newEducationData: AddEducationValue) => {
      await queryClient.cancelQueries({ queryKey: ["profile"] });

      const previousProfile = queryClient.getQueryData<ProfileData>([
        "profile",
      ]);

      queryClient.setQueryData<ProfileData | undefined>(["profile"], (old) => {
        if (!old) {
          return undefined;
        }

        const tempEducation: Education = {
          id: `temp-${Date.now()}`,
          userId: old.id,
          course: newEducationData.course,
          institution: newEducationData.institution,
          isComplete: newEducationData.isComplete,
          highlight: newEducationData.highlights || null,
          finishedYear: newEducationData.finishedYear
            ? parseInt(newEducationData.finishedYear, 10)
            : null,
          expectedFinishMonth: newEducationData.expectedFinishMonth
            ? monthNameToNumber[newEducationData.expectedFinishMonth]
            : null,
          expectedFinishYear: newEducationData.expectedFinishYear
            ? parseInt(newEducationData.expectedFinishYear, 10)
            : null,
        };

        const existingEducations = old.education || [];

        return {
          ...old,
          education: [...existingEducations, tempEducation],
        };
      });

      return { previousProfile };
    },
    onError: (err, newEducation, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(["profile"], context.previousProfile);
      }
      toast.error("Failed to save education", {
        description: err.message,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      onCancel();
    },
  });

  const onSubmit = (values: AddEducationValue) => {
    mutate(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          name="course"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course or qualification</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Bachelor of Science in Computer Science"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="institution"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution</FormLabel>
              <div className="relative" ref={dropdownRef}>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Start typing your institution's name..."
                    autoComplete="off"
                    onChange={(e) => {
                      field.onChange(e);
                      setSearchQuery(e.target.value);
                      setIsDropdownOpen(true);
                    }}
                    onFocus={() => setIsDropdownOpen(true)}
                  />
                </FormControl>
                {isDropdownOpen && debouncedSearchQuery && (
                  <Card className="absolute top-full mt-2 w-full z-10 max-h-60 overflow-y-auto">
                    <CardContent className="p-1">
                      {isLoading && (
                        <div className="flex items-center justify-center p-4">
                          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                        </div>
                      )}
                      {isError && (
                        <p className="p-4 text-sm text-destructive">
                          Failed to load results.
                        </p>
                      )}
                      {!isLoading &&
                        universities &&
                        universities.length === 0 && (
                          <p className="p-4 text-sm text-muted-foreground">
                            No institutions found.
                          </p>
                        )}
                      {universities?.map((uni, index) => (
                        <div
                          key={`${uni.name}-${index}`}
                          className="p-2 hover:bg-accent rounded-md cursor-pointer text-sm"
                          onClick={() => {
                            form.setValue("institution", uni.name, {
                              shouldValidate: true,
                            });
                            setSearchQuery(uni.name);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <p className="font-medium">{uni.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {uni.country}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="isComplete"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Qualification complete</FormLabel>
              </div>
            </FormItem>
          )}
        />

        {form.watch("isComplete") ? (
          <FormField
            name="finishedYear"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Finished{" "}
                  <span className="font-light text-sm">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select year..." />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem value={year.toString()} key={year}>
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <FormItem>
            <FormLabel>
              Expected finish{" "}
              <span className="font-light text-sm">(optional)</span>
            </FormLabel>
            <div className="flex items-center gap-2">
              <FormField
                name="expectedFinishMonth"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="month" />
                        </SelectTrigger>
                        <SelectContent>
                          {months.map((month) => (
                            <SelectItem value={month.toString()} key={month}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="expectedFinishYear"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="year" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem value={year.toString()} key={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </FormItem>
        )}

        <FormField
          control={form.control}
          name="highlights"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Course highlights{" "}
                <span className="text-sm font-light">(optional)</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Add activities, projects, awards or achievements during your study."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p className="text-xs font-light">
          Stay safe. Don’t include sensitive personal information such as
          identity documents, health, race, religion or financial data.
        </p>

        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" onClick={onCancel} variant={"ghost"}>
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddEducationForm;

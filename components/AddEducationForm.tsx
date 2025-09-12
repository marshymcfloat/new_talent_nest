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
import { useForm, useWatch } from "react-hook-form";
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
import {
  addUserEducation,
  updateUserEducation,
} from "@/lib/actions/profileActions";
import { toast } from "sonner";
import { User, Education, CareerHistory } from "@prisma/client";

type University = {
  name: string;
  country: string;
};

type ProfileData = User & {
  education: Education[];
  previousCareers: CareerHistory[];
  summary?: string;
};

type AddEducationFormValue = z.infer<typeof addEducationSchema>;

type UpdateEducationVariables = {
  values: AddEducationFormValue;
  id: string;
};

const currentYear = new Date().getFullYear();
const pastYears = Array.from({ length: 100 }, (_, i) => currentYear - i);

const futureYears = Array.from({ length: 3 }, (_, i) => currentYear + i);
const allYearsForSelect = [...new Set([...pastYears, ...futureYears])].sort(
  (a, b) => b - a
);

const monthNumberToName: { [key: number]: string } = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
const months = Object.values(monthNumberToName);

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

const fetchUniversities = async (query: string): Promise<University[]> => {
  if (!query) return [];

  const response = await fetch(
    `http://universities.hipolabs.com/search?name=${encodeURIComponent(query)}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch universities: ${response.statusText}`);
  }
  return response.json();
};

const AddEducationForm = ({
  onCancel,
  data,
}: {
  onCancel: () => void;
  data?: Education;
}) => {
  const queryClient = useQueryClient();
  const form = useForm<AddEducationFormValue>({
    resolver: zodResolver(addEducationSchema),
    defaultValues: {
      course: "",
      institution: "",
      isComplete: false,
      expectedFinishMonth: "",
      expectedFinishYear: "",
      finishedYear: "",
      highlights: "",
    },
  });

  const isCompleteValue = useWatch({
    control: form.control,
    name: "isComplete",

    defaultValue: form.getValues("isComplete"),
  });

  useEffect(() => {
    if (isCompleteValue) {
      if (
        form.getValues("expectedFinishMonth") !== "" ||
        form.getValues("expectedFinishYear") !== ""
      ) {
        form.setValue("expectedFinishMonth", "");
        form.setValue("expectedFinishYear", "");
      }
    } else {
      if (form.getValues("finishedYear") !== "") {
        form.setValue("finishedYear", "");
      }
    }
  }, [isCompleteValue, form]);

  useEffect(() => {
    if (data) {
      form.reset({
        course: data.course,
        institution: data.institution,
        isComplete: data.isComplete,
        highlights: data.highlight || "",
        finishedYear: data.finishedYear ? String(data.finishedYear) : "",
        expectedFinishMonth: data.expectedFinishMonth
          ? monthNumberToName[data.expectedFinishMonth]
          : "",
        expectedFinishYear: data.expectedFinishYear
          ? String(data.expectedFinishYear)
          : "",
      });
      setSearchQuery(data.institution);
    } else {
      form.reset();
      setSearchQuery("");
    }
  }, [data, form]);

  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const {
    data: universities,
    isLoading,
    isError,
  } = useQuery<University[], Error>({
    queryKey: ["universities", debouncedSearchQuery],
    queryFn: () => fetchUniversities(debouncedSearchQuery),
    enabled: !!debouncedSearchQuery,
    staleTime: 5 * 60 * 1000,
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
  }, []);

  const { mutate: mutateAdd, isPending: pendingAdd } = useMutation({
    mutationFn: addUserEducation,
    onMutate: async (newEducationData: AddEducationFormValue) => {
      onCancel();
      await queryClient.cancelQueries({ queryKey: ["profile"] });
      const previousProfile = queryClient.getQueryData<ProfileData>([
        "profile",
      ]);

      const tempEducation: Education = {
        id: `temp-${Date.now()}`,
        userId: previousProfile?.id || "temp-user-id",
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
        deletedAt: null,
      };
      queryClient.setQueryData<ProfileData | undefined>(["profile"], (old) => {
        if (!old) return undefined;
        return { ...old, education: [...(old.education || []), tempEducation] };
      });
      toast.success("Education added successfully!");
      return { previousProfile };
    },
    onError: (err, newEducation, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(["profile"], context.previousProfile);
      }
      toast.error("Failed to save education", { description: err.message });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const { mutate: mutateUpdate, isPending: pendingUpdate } = useMutation({
    mutationFn: updateUserEducation,
    onMutate: async ({ values, id }: UpdateEducationVariables) => {
      onCancel();
      await queryClient.cancelQueries({ queryKey: ["profile"] });
      const previousProfile = queryClient.getQueryData<ProfileData>([
        "profile",
      ]);

      queryClient.setQueryData<ProfileData | undefined>(["profile"], (old) => {
        if (!old) return undefined;

        const updatedEducationList = old.education.map((edu) => {
          if (edu.id === id) {
            return {
              ...edu,
              course: values.course,
              institution: values.institution,
              isComplete: values.isComplete,
              highlight: values.highlights || null,
              finishedYear: values.finishedYear
                ? parseInt(values.finishedYear, 10)
                : null,
              expectedFinishMonth: values.expectedFinishMonth
                ? monthNameToNumber[values.expectedFinishMonth]
                : null,
              expectedFinishYear: values.expectedFinishYear
                ? parseInt(values.expectedFinishYear, 10)
                : null,
            };
          }
          return edu;
        });

        return { ...old, education: updatedEducationList };
      });
      toast.success("Education updated successfully!");
      return { previousProfile };
    },
    onError: (err, variables, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(["profile"], context.previousProfile);
      }
      toast.error("Failed to update education", { description: err.message });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  const onSubmit = (values: AddEducationFormValue) => {
    if (data?.id) {
      mutateUpdate({ values, id: data.id });
    } else {
      mutateAdd(values);
    }
  };

  const isPending = pendingAdd || pendingUpdate;

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
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e);
                      setSearchQuery(e.target.value);
                      setIsDropdownOpen(true);
                    }}
                    onFocus={() => {
                      setIsDropdownOpen(true);
                      setSearchQuery(field.value);
                    }}
                    onBlur={() => {
                      setTimeout(() => setIsDropdownOpen(false), 100);
                    }}
                  />
                </FormControl>
                {isDropdownOpen && searchQuery && (
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
                          key={`${uni.name}-${uni.country}-${index}`}
                          className="p-2 hover:bg-accent rounded-md cursor-pointer text-sm"
                          onClick={() => {
                            form.setValue("institution", uni.name, {
                              shouldValidate: true,
                            });
                            setSearchQuery(uni.name);
                            setIsDropdownOpen(false);
                            form.trigger("institution");
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
                  Finished year{" "}
                  <span className="font-light text-sm">(required)</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select year..." />
                    </SelectTrigger>
                    <SelectContent>
                      {allYearsForSelect.map((year) => (
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
          <div className="flex flex-col gap-2">
            <FormLabel>
              Expected finish{" "}
              <span className="font-light text-sm">(required)</span>
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
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Month" />{" "}
                        </SelectTrigger>
                        <SelectContent>
                          {months.map((month) => (
                            <SelectItem value={month} key={month}>
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
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Year" />{" "}
                        </SelectTrigger>
                        <SelectContent>
                          {allYearsForSelect.map((year) => (
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
          </div>
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
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p className="text-xs font-light text-muted-foreground">
          {" "}
          Stay safe. Don’t include sensitive personal information such as
          identity documents, health, race, religion or financial data.
        </p>

        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" onClick={onCancel} variant={"ghost"}>
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {data ? "Update" : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddEducationForm;

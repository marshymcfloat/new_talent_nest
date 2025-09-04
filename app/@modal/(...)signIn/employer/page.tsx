"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChevronLeft, Loader2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import { validateEmployerSignUpStep1 } from "@/lib/actions/employerAuthActions";
import {
  employerLoginSchema,
  employerRegister1Schema,
  employerRegister2Schema,
  EmployerSignInValues,
  EmployerSignUpValues1,
  EmployerSignUpValues2,
} from "@/lib/zod schemas/employerLoginSchema";
import { ValidateStep1Result } from "@/lib/types/employerAuthActiontsType";
const singUpFields1 = [
  {
    label: "email address",
    type: "email",
    placeholder: "employer@company.com",
    name: "signUpEmail",
  },
  {
    label: "password",
    type: "password",
    placeholder: "************",
    name: "signUpPassword",
  },
  {
    label: "confirm password",
    type: "password",
    placeholder: "************",
    name: "confirmsignUpPassword",
  },
] as const;

const singUpFields2 = [
  { label: "firstname", type: "text", placeholder: "Juan", name: "firstname" },
  {
    label: "lastname",
    type: "text",
    placeholder: "Dela Cruz",
    name: "lastname",
  },
  {
    label: "company name",
    type: "text",
    placeholder: "e.g; Palawan Pawnshop",
    name: "companyName",
  },
  {
    label: "country",
    type: "text",
    placeholder: "e.g; Philippines",
    name: "country",
  },
  {
    label: "phone number (optional)",
    type: "tel",
    placeholder: "+639123456789",
    name: "phoneNumber",
  },
] as const;

const signInFields = [
  {
    label: "email address",
    type: "email",
    placeholder: "employer@company.com",
    name: "signInEmail",
  },
  {
    label: "password",
    type: "password",
    placeholder: "************",
    name: "loginPassword",
  },
] as const;

const EmployeerInterceptedLoginPage = () => {
  const router = useRouter();

  const [dialogContent, setDialogContent] = useState<"signIn" | "signUp">(
    "signIn"
  );
  const [registerStep, setRegisterStep] = useState<
    "1" | "2_confirm" | "2_create"
  >("1");
  const [registrationData, setRegistrationData] = useState<any | null>(null);

  const signUpForm1 = useForm<EmployerSignUpValues1>({
    resolver: zodResolver(employerRegister1Schema),
    defaultValues: {
      signUpEmail: "",
      signUpPassword: "",
      confirmsignUpPassword: "",
    },
  });

  const signUpForm2 = useForm<EmployerSignUpValues2>({
    resolver: zodResolver(employerRegister2Schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      companyName: "",
      country: "",
      phoneNumber: "",
    },
  });

  const SignInForm = useForm<EmployerSignInValues>({
    resolver: zodResolver(employerLoginSchema),
    defaultValues: { signInEmail: "", loginPassword: "" },
  });

  const { mutate: mutateStep1, isPending: isPendingStep1 } = useMutation({
    mutationFn: validateEmployerSignUpStep1,
    onSuccess: (response: ValidateStep1Result) => {
      if (response.data) {
        setRegistrationData(response.data);
        if (response.data.suggestedCompany) {
          setRegisterStep("2_confirm");
        } else {
          setRegisterStep("2_create");
        }
      } else {
        console.error("Step 1 validation failed:", response.error);
      }
    },
    onError: (error) => {
      console.error("A server error occurred during Step 1:", error);
    },
  });

  const handleStep1Submission = (values: EmployerSignUpValues1) => {
    mutateStep1(values);
  };

  const handleJoinCompany = () => {
    console.log(
      "User wants to join existing company:",
      registrationData.suggestedCompany.id
    );
  };

  const handleCreateCompany = (values: EmployerSignUpValues2) => {
    const finalData = { ...registrationData, ...values };
    console.log(
      "User wants to create a new company with this data:",
      finalData
    );
  };

  const handleSignIn = (values: EmployerSignInValues) => {
    console.log("Sign in attempt with:", values);
  };

  return (
    <Dialog
      open
      onOpenChange={(isOpen) => {
        if (!isOpen) router.back();
      }}
    >
      <DialogContent className="">
        {dialogContent === "signUp" && (
          <ChevronLeft
            size={16}
            className="absolute top-4 left-4 text-black/70 hover:text-black cursor-pointer"
            onClick={() => {
              setRegisterStep("1");
              setDialogContent("signIn");
            }}
          />
        )}
        <DialogHeader>
          <DialogTitle className="text-2xl tracking-widest uppercase font-bold flex flex-col justify-center items-center">
            <Image
              width={80}
              height={80}
              alt="Talent nest logo"
              src={"/talentNestIcon.png"}
            />
            {dialogContent === "signIn" ? "Login" : "Sign up"}
          </DialogTitle>
          <DialogDescription className="text-center lowercase">
            {dialogContent === "signIn"
              ? "Find new talents, manage with ease"
              : "start finding new talents with comfort"}
          </DialogDescription>
        </DialogHeader>

        {dialogContent === "signIn" && (
          <Form {...SignInForm}>
            <form
              onSubmit={SignInForm.handleSubmit(handleSignIn)}
              className="space-y-4"
            >
              {signInFields.map((input) => (
                <div className="space-y-2" key={input.name}>
                  <FormField
                    name={input.name as keyof EmployerSignInValues}
                    control={SignInForm.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="capitalize">
                          {input.label}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type={input.type}
                            placeholder={input.placeholder}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              <Button type="submit" className="mx-auto w-full mt-8">
                Login
              </Button>
            </form>
          </Form>
        )}

        {dialogContent === "signUp" && (
          <>
            {registerStep === "1" && (
              <Form {...signUpForm1}>
                <form
                  onSubmit={signUpForm1.handleSubmit(handleStep1Submission)}
                  className="space-y-4"
                >
                  {singUpFields1.map((input) => (
                    <div className="space-y-2" key={input.name}>
                      <FormField
                        name={input.name as keyof EmployerSignUpValues1}
                        control={signUpForm1.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="capitalize">
                              {input.label}
                            </FormLabel>
                            <FormControl>
                              <Input
                                type={input.type}
                                placeholder={input.placeholder}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                  <Button
                    type="submit"
                    className="mx-auto w-full mt-8"
                    disabled={isPendingStep1}
                  >
                    {isPendingStep1 && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Next
                  </Button>
                </form>
              </Form>
            )}

            {registerStep === "2_confirm" &&
              registrationData?.suggestedCompany && (
                <div className="text-center space-y-4">
                  <h3 className="font-semibold">Is this your company?</h3>
                  <p className="text-lg font-bold">
                    {registrationData.suggestedCompany.name}
                  </p>
                  <div className="flex flex-col space-y-2 pt-4">
                    <Button onClick={handleJoinCompany}>
                      Yes, Join Company
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => setRegisterStep("2_create")}
                    >
                      No, this is not my company
                    </Button>
                  </div>
                </div>
              )}

            {registerStep === "2_create" && (
              <>
                <h3 className="text-center font-semibold pb-2">
                  Tell us about yourself and your company
                </h3>
                <Form {...signUpForm2}>
                  <form
                    onSubmit={signUpForm2.handleSubmit(handleCreateCompany)}
                    className="space-y-4"
                  >
                    {singUpFields2.map((input) => (
                      <div className="space-y-2" key={input.name}>
                        <FormField
                          control={signUpForm2.control}
                          name={input.name as keyof EmployerSignUpValues2}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="capitalize">
                                {input.label}
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={input.placeholder}
                                  type={input.type}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    ))}
                    <Button type="submit" className="mx-auto w-full mt-8">
                      Complete Sign Up
                    </Button>
                  </form>
                </Form>
              </>
            )}
          </>
        )}

        {dialogContent === "signIn" && (
          <Button variant={"link"} onClick={() => setDialogContent("signUp")}>
            Dont have an account?
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EmployeerInterceptedLoginPage;

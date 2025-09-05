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
import React, { ChangeEvent, useEffect, useState } from "react";
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

import {
  registerJoinedCompanyEmployer,
  validateEmployerSignUpStep1,
} from "@/lib/actions/employerAuthActions";
import {
  employerLoginSchema,
  employerRegister1Schema,
  employerRegister2Schema,
  EmployerSignInValues,
  EmployerSignUpValues1,
  EmployerSignUpValues2,
} from "@/lib/zod schemas/employerLoginSchema";
import {
  EmployerConfirmedCompanyValues,
  employerRegisterConfirmedCompanySchema,
} from "@/lib/zod schemas/employerLoginSchema.client";

import { ValidateStep1Result } from "@/lib/types/employerAuthActiontsType";
import { objectToFormData } from "@/lib/utils";

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

const signupJoinedCompanyFields = [
  {
    label: "firstname",
    type: "text",
    placeholder: "Juan",
    name: "confirmFirstname",
  },
  {
    label: "lastname",
    type: "text",
    placeholder: "De la Cruz",
    name: "confirmLastname",
  },
] as const;

const EmployeerInterceptedLoginPage = () => {
  const router = useRouter();

  const [dialogContent, setDialogContent] = useState<"signIn" | "signUp">(
    "signIn"
  );
  const [registerStep, setRegisterStep] = useState<
    "1" | "2_confirm" | "3_joined" | "2_create"
  >("1");
  const [registrationData, setRegistrationData] = useState<any | null>(null);

  const [registrationProfilePicture, setRegistrationProfilePicture] =
    useState<File | null>(null);

  const [registrationProfilePictureURL, setRegistrationProfilePictureURL] =
    useState<string | null>(null);

  useEffect(() => {
    if (registrationProfilePicture && registrationProfilePicture.name) {
      const profilePic = URL.createObjectURL(registrationProfilePicture);

      setRegistrationProfilePictureURL(profilePic);
    }
  }, [registrationProfilePicture]);

  const signUpForm1 = useForm<EmployerSignUpValues1>({
    resolver: zodResolver(employerRegister1Schema),
    defaultValues: {
      signUpEmail: "",
      signUpPassword: "",
      confirmsignUpPassword: "",
    },
  });

  const signUpConfirmedCompanyForm = useForm<EmployerConfirmedCompanyValues>({
    resolver: zodResolver(employerRegisterConfirmedCompanySchema),
    defaultValues: {
      confirmFirstname: "",
      confirmLastname: "",
      confirmUserLogo: undefined,
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

  const {
    mutate: mutateJoinedFinalSignUp,
    isPending: isPendingJoinedFinalSignUp,
  } = useMutation({
    mutationFn: registerJoinedCompanyEmployer,
  });

  const handleStep1Submission = (values: EmployerSignUpValues1) => {
    mutateStep1(values);
  };

  const handleJoinCompany = () => {
    signUpForm2.setValue("companyName", registrationData.suggestedCompany.name);
    setRegisterStep("3_joined");
  };

  const handleJoinedComppanyRegisterEmployer = (
    valuesFromStep3: EmployerConfirmedCompanyValues
  ) => {
    const valuesFromStep1 = signUpForm1.getValues();
    const combinedData = { ...valuesFromStep1, ...valuesFromStep3 };

    const formData = objectToFormData(combinedData);

    mutateJoinedFinalSignUp(formData);
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

            {registerStep === "3_joined" &&
              registrationData.suggestedCompany && (
                <>
                  {registrationProfilePicture &&
                    registrationProfilePictureURL && (
                      <Image
                        src={registrationProfilePictureURL}
                        alt="employer profile picture"
                        className="rounded-full mx-auto border-2 border-purple-500 p-1 object-cover size-[70px]"
                        width={70}
                        height={70}
                      />
                    )}
                  <Form {...signUpConfirmedCompanyForm}>
                    <form
                      className="space-y-4"
                      onSubmit={signUpConfirmedCompanyForm.handleSubmit(
                        handleJoinedComppanyRegisterEmployer
                      )}
                    >
                      <FormField
                        name="confirmUserLogo"
                        control={signUpConfirmedCompanyForm.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Profile Picture</FormLabel>
                            <FormControl>
                              <Input
                                type="file"
                                accept="image/*"
                                name={field.name}
                                ref={field.ref}
                                onBlur={field.onBlur}
                                onChange={(
                                  e: ChangeEvent<HTMLInputElement>
                                ) => {
                                  field.onChange(e.target.files);

                                  if (
                                    e.target &&
                                    e.target.files &&
                                    e.target.files.length > 0
                                  ) {
                                    setRegistrationProfilePicture(
                                      e.target.files[0]
                                    );
                                  } else {
                                    setRegistrationProfilePicture(null);
                                  }
                                }}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      ></FormField>

                      {signupJoinedCompanyFields.map((input) => (
                        <div className="space-y-2" key={input.name}>
                          <FormField
                            control={signUpConfirmedCompanyForm.control}
                            name={input.name}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="capitalize">
                                  {input.label}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder={input.placeholder}
                                    type={input.type}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          ></FormField>
                        </div>
                      ))}
                      <Button type="submit" className="mx-auto w-full mt-8">
                        Complete Sign Up
                      </Button>
                    </form>
                  </Form>
                </>
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

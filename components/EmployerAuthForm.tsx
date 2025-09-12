"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChevronLeft, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useEmployerAuthForm } from "@/app/hooks/useEmployerAuthForm";

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

interface EmployerAuthFormProps {
  header: React.ReactNode;
}

export const EmployerAuthForm = ({ header }: EmployerAuthFormProps) => {
  const {
    dialogContent,
    setDialogContent,
    registerStep,
    setRegisterStep,
    registrationData,
    registrationProfilePictureURL,
    setRegistrationProfilePicture,
    isPendingLogin,
    signUpForm1,
    signUpConfirmedCompanyForm,
    signUpForm2,
    SignInForm,
    handleStep1Submission,
    isPendingStep1,
    handleJoinCompany,
    handleJoinedComppanyRegisterEmployer,
    isPendingJoinedFinalSignUp,
    handleCreateCompany,
    isPendingCreateCompany,
    handleSignIn,
  } = useEmployerAuthForm();

  return (
    <>
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

      {header}

      {dialogContent === "signIn" && (
        <Form {...SignInForm}>
          <form
            onSubmit={SignInForm.handleSubmit(handleSignIn)}
            className="space-y-4"
          >
            {SignInForm.formState.errors.root?.serverError && (
              <p className="text-sm font-medium text-destructive">
                {SignInForm.formState.errors.root.serverError.message}
              </p>
            )}
            {signInFields.map((input) => (
              <FormField
                key={input.name}
                name={input.name}
                control={SignInForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{input.label}</FormLabel>
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
            ))}
            <Button
              type="submit"
              disabled={isPendingLogin}
              className="mx-auto w-full mt-8"
            >
              {isPendingLogin && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Login
            </Button>
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              type="button"
              className="w-full"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
              Sign In with Google
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
                  <FormField
                    key={input.name}
                    name={input.name}
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
                  <Button onClick={handleJoinCompany}>Yes, Join Company</Button>
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
            registrationData &&
            registrationData.suggestedCompany && (
              <>
                {registrationProfilePictureURL && (
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
                    {signUpConfirmedCompanyForm.formState.errors.root
                      ?.serverError && (
                      <p className="text-sm font-medium text-destructive">
                        {
                          signUpConfirmedCompanyForm.formState.errors.root
                            .serverError.message
                        }
                      </p>
                    )}
                    <FormField
                      name="confirmUserLogo"
                      control={signUpConfirmedCompanyForm.control}
                      render={({ field: { onChange, onBlur, name, ref } }) => (
                        <FormItem>
                          <FormLabel>Profile Picture</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              accept="image/*"
                              name={name}
                              ref={ref}
                              onBlur={onBlur}
                              onChange={(e) => {
                                const file = e.target.files?.[0] || null;
                                onChange(file);
                                setRegistrationProfilePicture(file);
                              }}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {signupJoinedCompanyFields.map((input) => (
                      <FormField
                        key={input.name}
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
                      />
                    ))}
                    <Button
                      type="submit"
                      className="mx-auto w-full mt-8"
                      disabled={isPendingJoinedFinalSignUp}
                    >
                      {isPendingJoinedFinalSignUp && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      )}
                      Complete Sign Up
                    </Button>
                  </form>
                </Form>
              </>
            )}
          {registerStep === "2_create" && (
            <>
              {registrationProfilePictureURL && (
                <Image
                  src={registrationProfilePictureURL}
                  alt="employer profile picture"
                  className="rounded-full mx-auto border-2 border-purple-500 p-1 object-cover size-[70px]"
                  width={70}
                  height={70}
                />
              )}
              <h3 className="text-center font-semibold pb-2">
                Tell us about yourself and your company
              </h3>
              <Form {...signUpForm2}>
                <form
                  onSubmit={signUpForm2.handleSubmit(handleCreateCompany)}
                  className="space-y-4"
                >
                  {signUpForm2.formState.errors.root?.serverError && (
                    <p className="text-sm font-medium text-destructive">
                      {signUpForm2.formState.errors.root.serverError.message}
                    </p>
                  )}
                  <FormField
                    name="profilePicture"
                    control={signUpForm2.control}
                    render={({ field: { onChange, onBlur, name, ref } }) => (
                      <FormItem>
                        <FormLabel>Profile Picture</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            accept="image/*"
                            name={name}
                            ref={ref}
                            onBlur={onBlur}
                            onChange={(e) => {
                              const file = e.target.files?.[0] || null;
                              onChange(file);
                              setRegistrationProfilePicture(file);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {singUpFields2.map((input) => (
                    <FormField
                      key={input.name}
                      control={signUpForm2.control}
                      name={input.name}
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
                  ))}
                  <Button
                    type="submit"
                    className="mx-auto w-full mt-8"
                    disabled={isPendingCreateCompany}
                  >
                    {isPendingCreateCompany && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Complete Sign Up
                  </Button>
                </form>
              </Form>
            </>
          )}
        </>
      )}

      {dialogContent === "signIn" && (
        <Button variant="link" onClick={() => setDialogContent("signUp")}>
          Don&apos;t have an account?
        </Button>
      )}
    </>
  );
};

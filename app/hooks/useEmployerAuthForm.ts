"use client";

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import {
  registerJoinedCompanyEmployer,
  validateEmployerSignUpStep1,
  registerAndCreateCompanyEmployer,
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
import { objectToFormData } from "@/lib/utils";
import { useEffect, useState } from "react";

// FIX: Defined a specific type for the registration data to avoid using `any`.
type RegistrationStep1Data = EmployerSignUpValues1 & {
  suggestedCompany?: {
    name: string;
  } | null;
};

export const useEmployerAuthForm = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [dialogContent, setDialogContent] = useState<"signIn" | "signUp">(
    "signIn"
  );
  const [registerStep, setRegisterStep] = useState<
    "1" | "2_confirm" | "3_joined" | "2_create"
  >("1");
  const [registrationData, setRegistrationData] =
    useState<RegistrationStep1Data | null>(null);
  const [registrationProfilePicture, setRegistrationProfilePicture] =
    useState<File | null>(null);
  const [registrationProfilePictureURL, setRegistrationProfilePictureURL] =
    useState<string | null>(null);
  const [isPendingLogin, setIsPendingLogin] = useState(false);

  useEffect(() => {
    let objectUrl: string | null = null;
    if (registrationProfilePicture) {
      objectUrl = URL.createObjectURL(registrationProfilePicture);
      setRegistrationProfilePictureURL(objectUrl);
    }
    return () => {
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
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
      profilePicture: undefined,
    },
  });
  const SignInForm = useForm<EmployerSignInValues>({
    resolver: zodResolver(employerLoginSchema),
    defaultValues: { signInEmail: "", loginPassword: "" },
  });

  useEffect(() => {
    if (error === "CredentialsSignin") {
      SignInForm.setError("root.serverError", {
        message: "Invalid email or password.",
      });
    }
  }, [error, SignInForm]);

  const { mutate: mutateStep1, isPending: isPendingStep1 } = useMutation({
    mutationFn: validateEmployerSignUpStep1,
    onSuccess: (response) => {
      if (response.data) {
        setRegistrationData(response.data);
        if (response.data.suggestedCompany) setRegisterStep("2_confirm");
        else setRegisterStep("2_create");
      } else if (response.error) {
        signUpForm1.setError("root.serverError", { message: response.error });
      }
    },
  });

  const {
    mutate: mutateJoinedFinalSignUp,
    isPending: isPendingJoinedFinalSignUp,
  } = useMutation({
    mutationFn: registerJoinedCompanyEmployer,
    onSuccess: (response) => {
      if (response?.error)
        signUpConfirmedCompanyForm.setError("root.serverError", {
          message: response.error,
        });
    },
  });

  const { mutate: mutateCreateCompany, isPending: isPendingCreateCompany } =
    useMutation({
      mutationFn: registerAndCreateCompanyEmployer,
      onSuccess: (response) => {
        if (response.error) {
          signUpForm2.setError("root.serverError", { message: response.error });
        } else if (response.data?.userEmail) {
          signIn("credentials", {
            email: response.data.userEmail,
            password: signUpForm1.getValues().signUpPassword,
            callbackUrl: "/dashboard",
          });
        }
      },
      onError: () => {
        signUpForm2.setError("root.serverError", {
          message: "An unexpected server error occurred.",
        });
      },
    });

  const handleStep1Submission = (values: EmployerSignUpValues1) =>
    mutateStep1(values);
  const handleJoinCompany = () => setRegisterStep("3_joined");
  const handleJoinedComppanyRegisterEmployer = (
    values: EmployerConfirmedCompanyValues
  ) => {
    const combinedData = { ...signUpForm1.getValues(), ...values };
    const formData = objectToFormData(combinedData);
    mutateJoinedFinalSignUp(formData);
  };
  const handleSignIn = async (values: EmployerSignInValues) => {
    setIsPendingLogin(true);
    SignInForm.clearErrors();
    await signIn("credentials", {
      email: values.signInEmail,
      password: values.loginPassword,
      callbackUrl: "/dashboard",
    });
    setIsPendingLogin(false);
  };
  const handleCreateCompany = (values: EmployerSignUpValues2) => {
    const combinedData = { ...registrationData, ...values };
    const formData = objectToFormData(combinedData);
    mutateCreateCompany(formData);
  };

  return {
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
  };
};

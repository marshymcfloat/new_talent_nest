import { z } from "zod";

export const employerLoginSchema = z.object({
  signInEmail: z
    .string()
    .min(1, { message: "email is required" })
    .max(50, { message: "email should not exceed 50 characters" })
    .email({ message: "invalid email address" }),

  loginPassword: z
    .string()
    .regex(/[a-z]/, { message: "must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "must contain at least one special character",
    }),
});

export const employerRegister1Schema = z
  .object({
    signUpEmail: z
      .string()
      .min(1, { message: "email is required" })
      .max(50, { message: "email should not exceed 50 characters" })
      .email({ message: "invalid email address" }),

    signUpPassword: z
      .string()
      .regex(/[a-z]/, { message: "must contain at least one lowercase letter" })
      .regex(/[A-Z]/, { message: "must contain at least one uppercase letter" })
      .regex(/[0-9]/, { message: "must contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "must contain at least one special character",
      }),
    confirmsignUpPassword: z.string(),
  })
  .refine((data) => data.signUpPassword === data.confirmsignUpPassword, {
    message: "password do not match",
    path: ["confirmPassword"],
  });

export const employerRegister2Schema = z.object({
  firstname: z
    .string()
    .min(1, { message: "firstname is required" })
    .max(50, { message: "firstname should not exceed 50 characters" }),
  lastname: z
    .string()
    .min(1, { message: "firstname is required" })
    .max(50, { message: "firstname should not exceed 50 characters" }),
  companyName: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters" })
    .max(100, { message: "Company name is too long" }),

  country: z.string().min(2, { message: "Please select a country" }),

  phoneNumber: z
    .string()
    .min(10, { message: "Please enter a valid phone number" })
    .optional(),
});
export type EmployerSignInValues = z.infer<typeof employerLoginSchema>;
export type EmployerSignUpValues1 = z.infer<typeof employerRegister1Schema>;
export type EmployerSignUpValues2 = z.infer<typeof employerRegister2Schema>;

import { z } from "zod";

export const employerLoginSchema = z.object({
  signInEmail: z
    .string()
    .min(1, { message: "email is required" })
    .email({ message: "invalid email address" }),
  loginPassword: z.string().min(1, { message: "password is required" }),
});

// Base schema for step 1, without the password refinement. This makes it extendable.
const employerRegister1BaseSchema = z.object({
  signUpEmail: z
    .string()
    .min(1, { message: "email is required" })
    .email({ message: "invalid email address" }),
  signUpPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
    .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
    .regex(/[0-9]/, { message: "Must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Must contain at least one special character",
    }),
  confirmsignUpPassword: z.string(),
});

// Final schema for the Step 1 Form, with the refinement added.
export const employerRegister1Schema = employerRegister1BaseSchema.refine(
  (data) => data.signUpPassword === data.confirmsignUpPassword,
  {
    message: "Passwords do not match",
    path: ["confirmsignUpPassword"], // Apply error to the confirmation field
  }
);

export const employerRegister2Schema = z.object({
  firstname: z.string().min(1, { message: "First name is required" }),
  lastname: z.string().min(1, { message: "Last name is required" }),
  companyName: z
    .string()
    .min(2, { message: "Company name must be at least 2 characters" }),
  country: z.string().min(2, { message: "Please select a country" }),
  phoneNumber: z.string().optional(),
});

// The single source of truth for SERVER-SIDE validation of the final form data.
export const employerJoinCompanyServerSchema = employerRegister1BaseSchema
  .extend({
    confirmFirstname: z.string().min(1, "First name is required"),
    confirmLastname: z.string().min(1, "Last name is required"),
    // On the server, we validate a single File.
    confirmUserLogo: z
      .instanceof(File, { message: "Profile picture is required." })
      .refine((file) => file.size > 0, "Profile picture is required.")
      .refine((file) => file.size <= 5000000, `Max file size is 5MB.`)
      .refine(
        (file) => ["image/jpeg", "image/jpg", "image/png"].includes(file.type),
        ".jpg, .jpeg, and .png files are accepted."
      ),
  })
  .refine((data) => data.signUpPassword === data.confirmsignUpPassword, {
    message: "Passwords do not match",
    path: ["confirmsignUpPassword"],
  });

// Export types for use in your components and server actions
export type EmployerSignInValues = z.infer<typeof employerLoginSchema>;
export type EmployerSignUpValues1 = z.infer<typeof employerRegister1Schema>;
export type EmployerSignUpValues2 = z.infer<typeof employerRegister2Schema>;

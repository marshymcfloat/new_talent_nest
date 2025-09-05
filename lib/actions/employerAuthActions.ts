"use server";

import {
  createValidatedAction,
  createValidatedAuthedAction,
  createValidatedFormDataAction,
} from "../sessionUtils";
import { employerRegister1Schema } from "../zod schemas/employerLoginSchema";
import { prisma } from "@/lib/prisma";
import { employerJoinCompanyServerSchema } from "../zod schemas/employerLoginSchema";
import { put } from "@vercel/blob";
import bcrypt from "bcryptjs";

export const validateEmployerSignUpStep1 = createValidatedAction(
  employerRegister1Schema,
  async (validatedData) => {
    const { signUpEmail } = validatedData;
    const emailDomain = signUpEmail.split("@")[1];

    if (!emailDomain) {
      return { success: false, error: "Invalid email format." };
    }

    const relatedCompany = await prisma.company.findFirst({
      where: { verifiedDomains: { has: emailDomain } },
      select: {
        name: true,
        id: true,
        logoUrl: true,
      },
    });

    return {
      success: true,
      data: {
        ...validatedData,
        suggestedCompany: relatedCompany,
      },
    };
  }
);
export const registerJoinedCompanyEmployer = createValidatedFormDataAction(
  employerJoinCompanyServerSchema,
  async (validatedData) => {
    try {
      const {
        signUpEmail,
        signUpPassword,
        confirmFirstname,
        confirmLastname,
        confirmUserLogo,
      } = validatedData;

      const companyDomain = signUpEmail.split("@")[1];
      const joinedCompany = await prisma.company.findFirst({
        where: { verifiedDomains: { has: companyDomain } },
      });

      if (!joinedCompany) {
        return { error: "No company is associated with this email domain." };
      }

      const existingUser = await prisma.user.findUnique({
        where: { email: signUpEmail },
      });

      if (existingUser) {
        return { error: "An account with this email already exists." };
      }

      const ext = confirmUserLogo.name.split(".").pop() || "png";
      const uniqueFileName = `profile-${Date.now()}.${ext}`;

      const blob = await put(uniqueFileName, confirmUserLogo, {
        access: "public",
      });

      const hashedPassword = await bcrypt.hash(signUpPassword, 10);
      const newUser = await prisma.$transaction(async (tx) => {
        const createdUser = await tx.user.create({
          data: {
            name: `${confirmFirstname.toLowerCase()} ${confirmLastname.toLowerCase()}`,
            email: signUpEmail,
            password: hashedPassword,
            image: blob.url,
            role: "EMPLOYER",
          },
        });

        await tx.companyMember.create({
          data: {
            userId: createdUser.id,
            companyId: joinedCompany.id,
          },
        });

        return createdUser;
      });

      return {
        data: {
          message: "Employer account created successfully!",
          userId: newUser.id,
        },
      };
    } catch (error) {
      console.error("Registration Error:", error);
      return { error: "An unexpected error occurred during registration." };
    }
  }
);

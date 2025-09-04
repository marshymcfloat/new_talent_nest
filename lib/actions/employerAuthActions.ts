"use server";

import {
  createValidatedAction,
  createValidatedAuthedAction,
} from "../sessionUtils";
import { employerRegister1Schema } from "../zod schemas/employerLoginSchema";
import { prisma } from "@/lib/prisma";

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

// src/app/api/profile/route.ts

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { message: "Please login first" },
        { status: 401 }
      );
    }

    // This query correctly fetches the user and THEIR associated languages
    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      include: {
        resumes: true,
        previousCareers: true,
        education: true,
        languages: true, // This is the user's selected languages
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "unauthorized account" },
        { status: 405 }
      );
    }

    const lastApplication = await prisma.jobApplication.findFirst({
      where: {
        userId: user.id,
      },
      orderBy: { createdAt: "desc" },
      include: { resume: true },
    });

    // This query correctly gets the master list of ALL languages for suggestions
    const allLanguages = await prisma.language.findMany({});

    // Destructure the user's languages and the rest of the user object
    const { languages: userLanguages, ...restOfUser } = user;

    return NextResponse.json(
      {
        data: {
          ...restOfUser, // Spread the rest of the user's data
          lastUsedResume: lastApplication?.resumeId || null,
          userLanguages: userLanguages, // Add the user's selected languages under a new key
          allLanguages: allLanguages, // Add the master list of languages under its own key
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error in /api/profile:", err);

    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
};

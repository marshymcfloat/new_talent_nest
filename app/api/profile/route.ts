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

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      include: {
        resumes: true,
        previousCareers: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "unauthorize account" },
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

    return NextResponse.json(
      { data: { ...user, lastUsedResume: lastApplication?.resumeId || null } },
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

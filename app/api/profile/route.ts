import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: "Please log in first" },
        { status: 401 }
      );
    }

    console.log("Server session from profile route", session);
    const userId = session.user.id;

    const [user, allLanguages] = await Promise.all([
      prisma.user.findUnique({
        where: {
          id: userId,
        },
        include: {
          resumes: {
            where: { deletedAt: null },
            orderBy: { createdAt: "desc" },
          },
          previousCareers: {
            where: { deletedAt: null },
            orderBy: { dateStarted: "desc" },
          },
          education: {
            where: { deletedAt: null },
            orderBy: { finishedYear: "desc" },
          },
          languages: true,
        },
      }),
      prisma.language.findMany({
        orderBy: { name: "asc" },
      }),
    ]);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const lastApplication = await prisma.jobApplication.findFirst({
      where: {
        userId: userId,
      },
      orderBy: { createdAt: "desc" },
    });

    const { languages: userLanguages, ...restOfUser } = user;

    return NextResponse.json(
      {
        data: {
          ...restOfUser,
          lastUsedResumeId: lastApplication?.resumeId || null,
          userLanguages,
          allLanguages,
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

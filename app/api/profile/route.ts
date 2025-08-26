import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export const GET = async (req: Request) => {
  try {
    const session = await getServerSession();

    if (session) {
      const user = await prisma.user.findFirst({
        where: {
          name: session.user?.name,
        },
      });
    }
  } catch (err) {}
};

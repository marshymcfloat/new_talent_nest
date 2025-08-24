import { JobCreateManySchema } from "@/prisma/generated/schemas";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const parsed = JobCreateManySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.format() },
        { status: 400 }
      );
    }
  } catch (err) {}
};

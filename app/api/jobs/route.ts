import { createJobSchema } from "@/lib/zod schemas/JobSchema";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";




export const GET = async(req: Request)=>{
try{


  const jobs = await prisma.job.findMany({})


  return NextResponse.json({data: jobs},{status: 200}, )

}catch(err){

  return NextResponse.json({error: "Internal Server Error"},{status: 500} )


}

}



export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const parsed = createJobSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const newJob = await prisma.job.create({ data: parsed.data });

    return NextResponse.json({ message: "successful", job: newJob });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

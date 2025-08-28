import { Prisma } from "@prisma/client";

export type JobWithQuestions = Prisma.JobGetPayload<{
  include: {
    employerQuestions: true;
  };
}>;

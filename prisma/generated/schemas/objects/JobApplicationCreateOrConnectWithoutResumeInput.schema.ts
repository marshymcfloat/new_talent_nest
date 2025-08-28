import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationCreateWithoutResumeInputObjectSchema } from './JobApplicationCreateWithoutResumeInput.schema';
import { JobApplicationUncheckedCreateWithoutResumeInputObjectSchema } from './JobApplicationUncheckedCreateWithoutResumeInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobApplicationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => JobApplicationCreateWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutResumeInputObjectSchema)])
}).strict();
export const JobApplicationCreateOrConnectWithoutResumeInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateOrConnectWithoutResumeInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateOrConnectWithoutResumeInput>;
export const JobApplicationCreateOrConnectWithoutResumeInputObjectZodSchema = makeSchema();

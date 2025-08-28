import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationCreateWithoutAnswersInputObjectSchema } from './JobApplicationCreateWithoutAnswersInput.schema';
import { JobApplicationUncheckedCreateWithoutAnswersInputObjectSchema } from './JobApplicationUncheckedCreateWithoutAnswersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobApplicationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => JobApplicationCreateWithoutAnswersInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutAnswersInputObjectSchema)])
}).strict();
export const JobApplicationCreateOrConnectWithoutAnswersInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateOrConnectWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateOrConnectWithoutAnswersInput>;
export const JobApplicationCreateOrConnectWithoutAnswersInputObjectZodSchema = makeSchema();

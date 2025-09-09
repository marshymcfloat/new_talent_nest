import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema';
import { JobCreateWithoutQuestionsInputObjectSchema } from './JobCreateWithoutQuestionsInput.schema';
import { JobUncheckedCreateWithoutQuestionsInputObjectSchema } from './JobUncheckedCreateWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => JobWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => JobCreateWithoutQuestionsInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutQuestionsInputObjectSchema)])
}).strict();
export const JobCreateOrConnectWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.JobCreateOrConnectWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.JobCreateOrConnectWithoutQuestionsInput>;
export const JobCreateOrConnectWithoutQuestionsInputObjectZodSchema = makeSchema();

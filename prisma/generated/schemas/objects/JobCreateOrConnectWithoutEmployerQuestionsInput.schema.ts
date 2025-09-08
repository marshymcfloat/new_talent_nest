import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema';
import { JobCreateWithoutEmployerQuestionsInputObjectSchema } from './JobCreateWithoutEmployerQuestionsInput.schema';
import { JobUncheckedCreateWithoutEmployerQuestionsInputObjectSchema } from './JobUncheckedCreateWithoutEmployerQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => JobWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => JobCreateWithoutEmployerQuestionsInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutEmployerQuestionsInputObjectSchema)])
}).strict();
export const JobCreateOrConnectWithoutEmployerQuestionsInputObjectSchema: z.ZodType<Prisma.JobCreateOrConnectWithoutEmployerQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.JobCreateOrConnectWithoutEmployerQuestionsInput>;
export const JobCreateOrConnectWithoutEmployerQuestionsInputObjectZodSchema = makeSchema();

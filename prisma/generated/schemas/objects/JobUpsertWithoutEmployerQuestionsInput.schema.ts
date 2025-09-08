import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobUpdateWithoutEmployerQuestionsInputObjectSchema } from './JobUpdateWithoutEmployerQuestionsInput.schema';
import { JobUncheckedUpdateWithoutEmployerQuestionsInputObjectSchema } from './JobUncheckedUpdateWithoutEmployerQuestionsInput.schema';
import { JobCreateWithoutEmployerQuestionsInputObjectSchema } from './JobCreateWithoutEmployerQuestionsInput.schema';
import { JobUncheckedCreateWithoutEmployerQuestionsInputObjectSchema } from './JobUncheckedCreateWithoutEmployerQuestionsInput.schema';
import { JobWhereInputObjectSchema } from './JobWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => JobUpdateWithoutEmployerQuestionsInputObjectSchema), z.lazy(() => JobUncheckedUpdateWithoutEmployerQuestionsInputObjectSchema)]),
  create: z.union([z.lazy(() => JobCreateWithoutEmployerQuestionsInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutEmployerQuestionsInputObjectSchema)]),
  where: z.lazy(() => JobWhereInputObjectSchema).optional()
}).strict();
export const JobUpsertWithoutEmployerQuestionsInputObjectSchema: z.ZodType<Prisma.JobUpsertWithoutEmployerQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUpsertWithoutEmployerQuestionsInput>;
export const JobUpsertWithoutEmployerQuestionsInputObjectZodSchema = makeSchema();

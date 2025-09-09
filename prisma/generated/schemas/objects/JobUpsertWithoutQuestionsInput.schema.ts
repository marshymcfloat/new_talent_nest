import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobUpdateWithoutQuestionsInputObjectSchema } from './JobUpdateWithoutQuestionsInput.schema';
import { JobUncheckedUpdateWithoutQuestionsInputObjectSchema } from './JobUncheckedUpdateWithoutQuestionsInput.schema';
import { JobCreateWithoutQuestionsInputObjectSchema } from './JobCreateWithoutQuestionsInput.schema';
import { JobUncheckedCreateWithoutQuestionsInputObjectSchema } from './JobUncheckedCreateWithoutQuestionsInput.schema';
import { JobWhereInputObjectSchema } from './JobWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => JobUpdateWithoutQuestionsInputObjectSchema), z.lazy(() => JobUncheckedUpdateWithoutQuestionsInputObjectSchema)]),
  create: z.union([z.lazy(() => JobCreateWithoutQuestionsInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutQuestionsInputObjectSchema)]),
  where: z.lazy(() => JobWhereInputObjectSchema).optional()
}).strict();
export const JobUpsertWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.JobUpsertWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUpsertWithoutQuestionsInput>;
export const JobUpsertWithoutQuestionsInputObjectZodSchema = makeSchema();

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobWhereInputObjectSchema } from './JobWhereInput.schema';
import { JobUpdateWithoutQuestionsInputObjectSchema } from './JobUpdateWithoutQuestionsInput.schema';
import { JobUncheckedUpdateWithoutQuestionsInputObjectSchema } from './JobUncheckedUpdateWithoutQuestionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => JobWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => JobUpdateWithoutQuestionsInputObjectSchema), z.lazy(() => JobUncheckedUpdateWithoutQuestionsInputObjectSchema)])
}).strict();
export const JobUpdateToOneWithWhereWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.JobUpdateToOneWithWhereWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUpdateToOneWithWhereWithoutQuestionsInput>;
export const JobUpdateToOneWithWhereWithoutQuestionsInputObjectZodSchema = makeSchema();

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobWhereInputObjectSchema } from './JobWhereInput.schema';
import { JobUpdateWithoutEmployerQuestionsInputObjectSchema } from './JobUpdateWithoutEmployerQuestionsInput.schema';
import { JobUncheckedUpdateWithoutEmployerQuestionsInputObjectSchema } from './JobUncheckedUpdateWithoutEmployerQuestionsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => JobUpdateWithoutEmployerQuestionsInputObjectSchema), z.lazy(() => JobUncheckedUpdateWithoutEmployerQuestionsInputObjectSchema)])
}).strict();
export const JobUpdateToOneWithWhereWithoutEmployerQuestionsInputObjectSchema: z.ZodType<Prisma.JobUpdateToOneWithWhereWithoutEmployerQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUpdateToOneWithWhereWithoutEmployerQuestionsInput>;
export const JobUpdateToOneWithWhereWithoutEmployerQuestionsInputObjectZodSchema = makeSchema();

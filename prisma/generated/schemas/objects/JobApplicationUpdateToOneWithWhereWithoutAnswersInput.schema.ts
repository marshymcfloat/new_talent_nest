import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereInputObjectSchema } from './JobApplicationWhereInput.schema';
import { JobApplicationUpdateWithoutAnswersInputObjectSchema } from './JobApplicationUpdateWithoutAnswersInput.schema';
import { JobApplicationUncheckedUpdateWithoutAnswersInputObjectSchema } from './JobApplicationUncheckedUpdateWithoutAnswersInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobApplicationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => JobApplicationUpdateWithoutAnswersInputObjectSchema), z.lazy(() => JobApplicationUncheckedUpdateWithoutAnswersInputObjectSchema)])
}).strict();
export const JobApplicationUpdateToOneWithWhereWithoutAnswersInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateToOneWithWhereWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateToOneWithWhereWithoutAnswersInput>;
export const JobApplicationUpdateToOneWithWhereWithoutAnswersInputObjectZodSchema = makeSchema();

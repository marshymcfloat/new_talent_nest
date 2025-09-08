import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationUpdateWithoutAnswersInputObjectSchema } from './JobApplicationUpdateWithoutAnswersInput.schema';
import { JobApplicationUncheckedUpdateWithoutAnswersInputObjectSchema } from './JobApplicationUncheckedUpdateWithoutAnswersInput.schema';
import { JobApplicationCreateWithoutAnswersInputObjectSchema } from './JobApplicationCreateWithoutAnswersInput.schema';
import { JobApplicationUncheckedCreateWithoutAnswersInputObjectSchema } from './JobApplicationUncheckedCreateWithoutAnswersInput.schema';
import { JobApplicationWhereInputObjectSchema } from './JobApplicationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => JobApplicationUpdateWithoutAnswersInputObjectSchema), z.lazy(() => JobApplicationUncheckedUpdateWithoutAnswersInputObjectSchema)]),
  create: z.union([z.lazy(() => JobApplicationCreateWithoutAnswersInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutAnswersInputObjectSchema)]),
  where: z.lazy(() => JobApplicationWhereInputObjectSchema).optional()
}).strict();
export const JobApplicationUpsertWithoutAnswersInputObjectSchema: z.ZodType<Prisma.JobApplicationUpsertWithoutAnswersInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpsertWithoutAnswersInput>;
export const JobApplicationUpsertWithoutAnswersInputObjectZodSchema = makeSchema();

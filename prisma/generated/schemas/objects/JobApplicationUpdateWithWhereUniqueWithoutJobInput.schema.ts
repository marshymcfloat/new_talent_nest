import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationUpdateWithoutJobInputObjectSchema } from './JobApplicationUpdateWithoutJobInput.schema';
import { JobApplicationUncheckedUpdateWithoutJobInputObjectSchema } from './JobApplicationUncheckedUpdateWithoutJobInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobApplicationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => JobApplicationUpdateWithoutJobInputObjectSchema), z.lazy(() => JobApplicationUncheckedUpdateWithoutJobInputObjectSchema)])
}).strict();
export const JobApplicationUpdateWithWhereUniqueWithoutJobInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateWithWhereUniqueWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateWithWhereUniqueWithoutJobInput>;
export const JobApplicationUpdateWithWhereUniqueWithoutJobInputObjectZodSchema = makeSchema();

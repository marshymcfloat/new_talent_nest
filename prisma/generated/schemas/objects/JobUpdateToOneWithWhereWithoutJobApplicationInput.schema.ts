import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobWhereInputObjectSchema } from './JobWhereInput.schema';
import { JobUpdateWithoutJobApplicationInputObjectSchema } from './JobUpdateWithoutJobApplicationInput.schema';
import { JobUncheckedUpdateWithoutJobApplicationInputObjectSchema } from './JobUncheckedUpdateWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => JobUpdateWithoutJobApplicationInputObjectSchema), z.lazy(() => JobUncheckedUpdateWithoutJobApplicationInputObjectSchema)])
}).strict();
export const JobUpdateToOneWithWhereWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.JobUpdateToOneWithWhereWithoutJobApplicationInput> = makeSchema();
export const JobUpdateToOneWithWhereWithoutJobApplicationInputObjectZodSchema = makeSchema();

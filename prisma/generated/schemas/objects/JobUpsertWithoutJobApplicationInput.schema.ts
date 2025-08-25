import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobUpdateWithoutJobApplicationInputObjectSchema } from './JobUpdateWithoutJobApplicationInput.schema';
import { JobUncheckedUpdateWithoutJobApplicationInputObjectSchema } from './JobUncheckedUpdateWithoutJobApplicationInput.schema';
import { JobCreateWithoutJobApplicationInputObjectSchema } from './JobCreateWithoutJobApplicationInput.schema';
import { JobUncheckedCreateWithoutJobApplicationInputObjectSchema } from './JobUncheckedCreateWithoutJobApplicationInput.schema';
import { JobWhereInputObjectSchema } from './JobWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  update: z.union([z.lazy(() => JobUpdateWithoutJobApplicationInputObjectSchema), z.lazy(() => JobUncheckedUpdateWithoutJobApplicationInputObjectSchema)]),
  create: z.union([z.lazy(() => JobCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutJobApplicationInputObjectSchema)]),
  where: z.lazy(() => JobWhereInputObjectSchema).optional()
}).strict();
export const JobUpsertWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.JobUpsertWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.JobUpsertWithoutJobApplicationInput>;
export const JobUpsertWithoutJobApplicationInputObjectZodSchema = makeSchema();

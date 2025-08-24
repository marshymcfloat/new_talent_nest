import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema';
import { JobCreateWithoutJobApplicationInputObjectSchema } from './JobCreateWithoutJobApplicationInput.schema';
import { JobUncheckedCreateWithoutJobApplicationInputObjectSchema } from './JobUncheckedCreateWithoutJobApplicationInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => JobCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutJobApplicationInputObjectSchema)])
}).strict();
export const JobCreateOrConnectWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.JobCreateOrConnectWithoutJobApplicationInput> = makeSchema();
export const JobCreateOrConnectWithoutJobApplicationInputObjectZodSchema = makeSchema();

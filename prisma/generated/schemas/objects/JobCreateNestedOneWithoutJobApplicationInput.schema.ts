import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateWithoutJobApplicationInputObjectSchema } from './JobCreateWithoutJobApplicationInput.schema';
import { JobUncheckedCreateWithoutJobApplicationInputObjectSchema } from './JobUncheckedCreateWithoutJobApplicationInput.schema';
import { JobCreateOrConnectWithoutJobApplicationInputObjectSchema } from './JobCreateOrConnectWithoutJobApplicationInput.schema';
import { JobWhereUniqueInputObjectSchema } from './JobWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => JobCreateWithoutJobApplicationInputObjectSchema), z.lazy(() => JobUncheckedCreateWithoutJobApplicationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => JobCreateOrConnectWithoutJobApplicationInputObjectSchema).optional(),
  connect: z.lazy(() => JobWhereUniqueInputObjectSchema).optional()
}).strict();
export const JobCreateNestedOneWithoutJobApplicationInputObjectSchema: z.ZodType<Prisma.JobCreateNestedOneWithoutJobApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.JobCreateNestedOneWithoutJobApplicationInput>;
export const JobCreateNestedOneWithoutJobApplicationInputObjectZodSchema = makeSchema();

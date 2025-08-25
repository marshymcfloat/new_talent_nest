import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationCreateWithoutJobInputObjectSchema } from './JobApplicationCreateWithoutJobInput.schema';
import { JobApplicationUncheckedCreateWithoutJobInputObjectSchema } from './JobApplicationUncheckedCreateWithoutJobInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => JobApplicationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => JobApplicationCreateWithoutJobInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutJobInputObjectSchema)])
}).strict();
export const JobApplicationCreateOrConnectWithoutJobInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateOrConnectWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateOrConnectWithoutJobInput>;
export const JobApplicationCreateOrConnectWithoutJobInputObjectZodSchema = makeSchema();

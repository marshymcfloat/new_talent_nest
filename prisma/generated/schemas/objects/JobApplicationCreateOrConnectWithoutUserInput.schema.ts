import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationCreateWithoutUserInputObjectSchema } from './JobApplicationCreateWithoutUserInput.schema';
import { JobApplicationUncheckedCreateWithoutUserInputObjectSchema } from './JobApplicationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => JobApplicationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => JobApplicationCreateWithoutUserInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const JobApplicationCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.JobApplicationCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateOrConnectWithoutUserInput>;
export const JobApplicationCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();

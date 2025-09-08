import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateWithoutUserInputObjectSchema } from './JobApplicationCreateWithoutUserInput.schema';
import { JobApplicationUncheckedCreateWithoutUserInputObjectSchema } from './JobApplicationUncheckedCreateWithoutUserInput.schema';
import { JobApplicationCreateOrConnectWithoutUserInputObjectSchema } from './JobApplicationCreateOrConnectWithoutUserInput.schema';
import { JobApplicationCreateManyUserInputEnvelopeObjectSchema } from './JobApplicationCreateManyUserInputEnvelope.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => JobApplicationCreateWithoutUserInputObjectSchema), z.lazy(() => JobApplicationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => JobApplicationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => JobApplicationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => JobApplicationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => JobApplicationCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const JobApplicationUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedCreateNestedManyWithoutUserInput>;
export const JobApplicationUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();

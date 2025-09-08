import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateWithoutJobInputObjectSchema } from './JobApplicationCreateWithoutJobInput.schema';
import { JobApplicationUncheckedCreateWithoutJobInputObjectSchema } from './JobApplicationUncheckedCreateWithoutJobInput.schema';
import { JobApplicationCreateOrConnectWithoutJobInputObjectSchema } from './JobApplicationCreateOrConnectWithoutJobInput.schema';
import { JobApplicationCreateManyJobInputEnvelopeObjectSchema } from './JobApplicationCreateManyJobInputEnvelope.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => JobApplicationCreateWithoutJobInputObjectSchema), z.lazy(() => JobApplicationCreateWithoutJobInputObjectSchema).array(), z.lazy(() => JobApplicationUncheckedCreateWithoutJobInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutJobInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => JobApplicationCreateOrConnectWithoutJobInputObjectSchema), z.lazy(() => JobApplicationCreateOrConnectWithoutJobInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => JobApplicationCreateManyJobInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const JobApplicationUncheckedCreateNestedManyWithoutJobInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedCreateNestedManyWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedCreateNestedManyWithoutJobInput>;
export const JobApplicationUncheckedCreateNestedManyWithoutJobInputObjectZodSchema = makeSchema();

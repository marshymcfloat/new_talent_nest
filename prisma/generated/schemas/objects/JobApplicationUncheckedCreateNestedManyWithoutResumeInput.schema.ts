import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateWithoutResumeInputObjectSchema } from './JobApplicationCreateWithoutResumeInput.schema';
import { JobApplicationUncheckedCreateWithoutResumeInputObjectSchema } from './JobApplicationUncheckedCreateWithoutResumeInput.schema';
import { JobApplicationCreateOrConnectWithoutResumeInputObjectSchema } from './JobApplicationCreateOrConnectWithoutResumeInput.schema';
import { JobApplicationCreateManyResumeInputEnvelopeObjectSchema } from './JobApplicationCreateManyResumeInputEnvelope.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => JobApplicationCreateWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationCreateWithoutResumeInputObjectSchema).array(), z.lazy(() => JobApplicationUncheckedCreateWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutResumeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => JobApplicationCreateOrConnectWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationCreateOrConnectWithoutResumeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => JobApplicationCreateManyResumeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const JobApplicationUncheckedCreateNestedManyWithoutResumeInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedCreateNestedManyWithoutResumeInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedCreateNestedManyWithoutResumeInput>;
export const JobApplicationUncheckedCreateNestedManyWithoutResumeInputObjectZodSchema = makeSchema();

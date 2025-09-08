import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateWithoutResumeInputObjectSchema } from './JobApplicationCreateWithoutResumeInput.schema';
import { JobApplicationUncheckedCreateWithoutResumeInputObjectSchema } from './JobApplicationUncheckedCreateWithoutResumeInput.schema';
import { JobApplicationCreateOrConnectWithoutResumeInputObjectSchema } from './JobApplicationCreateOrConnectWithoutResumeInput.schema';
import { JobApplicationUpsertWithWhereUniqueWithoutResumeInputObjectSchema } from './JobApplicationUpsertWithWhereUniqueWithoutResumeInput.schema';
import { JobApplicationCreateManyResumeInputEnvelopeObjectSchema } from './JobApplicationCreateManyResumeInputEnvelope.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationUpdateWithWhereUniqueWithoutResumeInputObjectSchema } from './JobApplicationUpdateWithWhereUniqueWithoutResumeInput.schema';
import { JobApplicationUpdateManyWithWhereWithoutResumeInputObjectSchema } from './JobApplicationUpdateManyWithWhereWithoutResumeInput.schema';
import { JobApplicationScalarWhereInputObjectSchema } from './JobApplicationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => JobApplicationCreateWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationCreateWithoutResumeInputObjectSchema).array(), z.lazy(() => JobApplicationUncheckedCreateWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutResumeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => JobApplicationCreateOrConnectWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationCreateOrConnectWithoutResumeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => JobApplicationUpsertWithWhereUniqueWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationUpsertWithWhereUniqueWithoutResumeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => JobApplicationCreateManyResumeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => JobApplicationUpdateWithWhereUniqueWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationUpdateWithWhereUniqueWithoutResumeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => JobApplicationUpdateManyWithWhereWithoutResumeInputObjectSchema), z.lazy(() => JobApplicationUpdateManyWithWhereWithoutResumeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => JobApplicationScalarWhereInputObjectSchema), z.lazy(() => JobApplicationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const JobApplicationUncheckedUpdateManyWithoutResumeNestedInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedUpdateManyWithoutResumeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedUpdateManyWithoutResumeNestedInput>;
export const JobApplicationUncheckedUpdateManyWithoutResumeNestedInputObjectZodSchema = makeSchema();

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateWithoutJobInputObjectSchema } from './JobApplicationCreateWithoutJobInput.schema';
import { JobApplicationUncheckedCreateWithoutJobInputObjectSchema } from './JobApplicationUncheckedCreateWithoutJobInput.schema';
import { JobApplicationCreateOrConnectWithoutJobInputObjectSchema } from './JobApplicationCreateOrConnectWithoutJobInput.schema';
import { JobApplicationUpsertWithWhereUniqueWithoutJobInputObjectSchema } from './JobApplicationUpsertWithWhereUniqueWithoutJobInput.schema';
import { JobApplicationCreateManyJobInputEnvelopeObjectSchema } from './JobApplicationCreateManyJobInputEnvelope.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationUpdateWithWhereUniqueWithoutJobInputObjectSchema } from './JobApplicationUpdateWithWhereUniqueWithoutJobInput.schema';
import { JobApplicationUpdateManyWithWhereWithoutJobInputObjectSchema } from './JobApplicationUpdateManyWithWhereWithoutJobInput.schema';
import { JobApplicationScalarWhereInputObjectSchema } from './JobApplicationScalarWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  create: z.union([z.lazy(() => JobApplicationCreateWithoutJobInputObjectSchema), z.lazy(() => JobApplicationCreateWithoutJobInputObjectSchema).array(), z.lazy(() => JobApplicationUncheckedCreateWithoutJobInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutJobInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => JobApplicationCreateOrConnectWithoutJobInputObjectSchema), z.lazy(() => JobApplicationCreateOrConnectWithoutJobInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => JobApplicationUpsertWithWhereUniqueWithoutJobInputObjectSchema), z.lazy(() => JobApplicationUpsertWithWhereUniqueWithoutJobInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => JobApplicationCreateManyJobInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => JobApplicationUpdateWithWhereUniqueWithoutJobInputObjectSchema), z.lazy(() => JobApplicationUpdateWithWhereUniqueWithoutJobInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => JobApplicationUpdateManyWithWhereWithoutJobInputObjectSchema), z.lazy(() => JobApplicationUpdateManyWithWhereWithoutJobInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => JobApplicationScalarWhereInputObjectSchema), z.lazy(() => JobApplicationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const JobApplicationUncheckedUpdateManyWithoutJobNestedInputObjectSchema: z.ZodType<Prisma.JobApplicationUncheckedUpdateManyWithoutJobNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUncheckedUpdateManyWithoutJobNestedInput>;
export const JobApplicationUncheckedUpdateManyWithoutJobNestedInputObjectZodSchema = makeSchema();

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateWithoutUserInputObjectSchema } from './JobApplicationCreateWithoutUserInput.schema';
import { JobApplicationUncheckedCreateWithoutUserInputObjectSchema } from './JobApplicationUncheckedCreateWithoutUserInput.schema';
import { JobApplicationCreateOrConnectWithoutUserInputObjectSchema } from './JobApplicationCreateOrConnectWithoutUserInput.schema';
import { JobApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './JobApplicationUpsertWithWhereUniqueWithoutUserInput.schema';
import { JobApplicationCreateManyUserInputEnvelopeObjectSchema } from './JobApplicationCreateManyUserInputEnvelope.schema';
import { JobApplicationWhereUniqueInputObjectSchema } from './JobApplicationWhereUniqueInput.schema';
import { JobApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './JobApplicationUpdateWithWhereUniqueWithoutUserInput.schema';
import { JobApplicationUpdateManyWithWhereWithoutUserInputObjectSchema } from './JobApplicationUpdateManyWithWhereWithoutUserInput.schema';
import { JobApplicationScalarWhereInputObjectSchema } from './JobApplicationScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => JobApplicationCreateWithoutUserInputObjectSchema), z.lazy(() => JobApplicationCreateWithoutUserInputObjectSchema).array(), z.lazy(() => JobApplicationUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => JobApplicationUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => JobApplicationCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => JobApplicationCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => JobApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => JobApplicationUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => JobApplicationCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => JobApplicationWhereUniqueInputObjectSchema), z.lazy(() => JobApplicationWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => JobApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => JobApplicationUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => JobApplicationUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => JobApplicationUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => JobApplicationScalarWhereInputObjectSchema), z.lazy(() => JobApplicationScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const JobApplicationUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.JobApplicationUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationUpdateManyWithoutUserNestedInput>;
export const JobApplicationUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();

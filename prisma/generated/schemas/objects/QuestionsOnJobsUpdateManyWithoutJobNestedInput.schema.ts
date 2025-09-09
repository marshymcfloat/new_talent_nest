import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsCreateWithoutJobInputObjectSchema } from './QuestionsOnJobsCreateWithoutJobInput.schema';
import { QuestionsOnJobsUncheckedCreateWithoutJobInputObjectSchema } from './QuestionsOnJobsUncheckedCreateWithoutJobInput.schema';
import { QuestionsOnJobsCreateOrConnectWithoutJobInputObjectSchema } from './QuestionsOnJobsCreateOrConnectWithoutJobInput.schema';
import { QuestionsOnJobsUpsertWithWhereUniqueWithoutJobInputObjectSchema } from './QuestionsOnJobsUpsertWithWhereUniqueWithoutJobInput.schema';
import { QuestionsOnJobsCreateManyJobInputEnvelopeObjectSchema } from './QuestionsOnJobsCreateManyJobInputEnvelope.schema';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './QuestionsOnJobsWhereUniqueInput.schema';
import { QuestionsOnJobsUpdateWithWhereUniqueWithoutJobInputObjectSchema } from './QuestionsOnJobsUpdateWithWhereUniqueWithoutJobInput.schema';
import { QuestionsOnJobsUpdateManyWithWhereWithoutJobInputObjectSchema } from './QuestionsOnJobsUpdateManyWithWhereWithoutJobInput.schema';
import { QuestionsOnJobsScalarWhereInputObjectSchema } from './QuestionsOnJobsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuestionsOnJobsCreateWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsCreateWithoutJobInputObjectSchema).array(), z.lazy(() => QuestionsOnJobsUncheckedCreateWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedCreateWithoutJobInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QuestionsOnJobsCreateOrConnectWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsCreateOrConnectWithoutJobInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => QuestionsOnJobsUpsertWithWhereUniqueWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsUpsertWithWhereUniqueWithoutJobInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QuestionsOnJobsCreateManyJobInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema), z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema), z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema), z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema), z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => QuestionsOnJobsUpdateWithWhereUniqueWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsUpdateWithWhereUniqueWithoutJobInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => QuestionsOnJobsUpdateManyWithWhereWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsUpdateManyWithWhereWithoutJobInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => QuestionsOnJobsScalarWhereInputObjectSchema), z.lazy(() => QuestionsOnJobsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const QuestionsOnJobsUpdateManyWithoutJobNestedInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUpdateManyWithoutJobNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUpdateManyWithoutJobNestedInput>;
export const QuestionsOnJobsUpdateManyWithoutJobNestedInputObjectZodSchema = makeSchema();

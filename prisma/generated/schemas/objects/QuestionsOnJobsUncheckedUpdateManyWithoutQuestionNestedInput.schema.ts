import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsCreateWithoutQuestionInputObjectSchema } from './QuestionsOnJobsCreateWithoutQuestionInput.schema';
import { QuestionsOnJobsUncheckedCreateWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUncheckedCreateWithoutQuestionInput.schema';
import { QuestionsOnJobsCreateOrConnectWithoutQuestionInputObjectSchema } from './QuestionsOnJobsCreateOrConnectWithoutQuestionInput.schema';
import { QuestionsOnJobsUpsertWithWhereUniqueWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUpsertWithWhereUniqueWithoutQuestionInput.schema';
import { QuestionsOnJobsCreateManyQuestionInputEnvelopeObjectSchema } from './QuestionsOnJobsCreateManyQuestionInputEnvelope.schema';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './QuestionsOnJobsWhereUniqueInput.schema';
import { QuestionsOnJobsUpdateWithWhereUniqueWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUpdateWithWhereUniqueWithoutQuestionInput.schema';
import { QuestionsOnJobsUpdateManyWithWhereWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUpdateManyWithWhereWithoutQuestionInput.schema';
import { QuestionsOnJobsScalarWhereInputObjectSchema } from './QuestionsOnJobsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuestionsOnJobsCreateWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsCreateWithoutQuestionInputObjectSchema).array(), z.lazy(() => QuestionsOnJobsUncheckedCreateWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedCreateWithoutQuestionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QuestionsOnJobsCreateOrConnectWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsCreateOrConnectWithoutQuestionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => QuestionsOnJobsUpsertWithWhereUniqueWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsUpsertWithWhereUniqueWithoutQuestionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QuestionsOnJobsCreateManyQuestionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema), z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema), z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema), z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema), z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => QuestionsOnJobsUpdateWithWhereUniqueWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsUpdateWithWhereUniqueWithoutQuestionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => QuestionsOnJobsUpdateManyWithWhereWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsUpdateManyWithWhereWithoutQuestionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => QuestionsOnJobsScalarWhereInputObjectSchema), z.lazy(() => QuestionsOnJobsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const QuestionsOnJobsUncheckedUpdateManyWithoutQuestionNestedInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUncheckedUpdateManyWithoutQuestionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUncheckedUpdateManyWithoutQuestionNestedInput>;
export const QuestionsOnJobsUncheckedUpdateManyWithoutQuestionNestedInputObjectZodSchema = makeSchema();

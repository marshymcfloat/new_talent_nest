import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsCreateWithoutQuestionInputObjectSchema } from './QuestionsOnJobsCreateWithoutQuestionInput.schema';
import { QuestionsOnJobsUncheckedCreateWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUncheckedCreateWithoutQuestionInput.schema';
import { QuestionsOnJobsCreateOrConnectWithoutQuestionInputObjectSchema } from './QuestionsOnJobsCreateOrConnectWithoutQuestionInput.schema';
import { QuestionsOnJobsCreateManyQuestionInputEnvelopeObjectSchema } from './QuestionsOnJobsCreateManyQuestionInputEnvelope.schema';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './QuestionsOnJobsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => QuestionsOnJobsCreateWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsCreateWithoutQuestionInputObjectSchema).array(), z.lazy(() => QuestionsOnJobsUncheckedCreateWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedCreateWithoutQuestionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => QuestionsOnJobsCreateOrConnectWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsCreateOrConnectWithoutQuestionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => QuestionsOnJobsCreateManyQuestionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema), z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const QuestionsOnJobsUncheckedCreateNestedManyWithoutQuestionInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUncheckedCreateNestedManyWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUncheckedCreateNestedManyWithoutQuestionInput>;
export const QuestionsOnJobsUncheckedCreateNestedManyWithoutQuestionInputObjectZodSchema = makeSchema();

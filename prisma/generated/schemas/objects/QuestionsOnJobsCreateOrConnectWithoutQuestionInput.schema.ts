import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './QuestionsOnJobsWhereUniqueInput.schema';
import { QuestionsOnJobsCreateWithoutQuestionInputObjectSchema } from './QuestionsOnJobsCreateWithoutQuestionInput.schema';
import { QuestionsOnJobsUncheckedCreateWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUncheckedCreateWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QuestionsOnJobsCreateWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedCreateWithoutQuestionInputObjectSchema)])
}).strict();
export const QuestionsOnJobsCreateOrConnectWithoutQuestionInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsCreateOrConnectWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsCreateOrConnectWithoutQuestionInput>;
export const QuestionsOnJobsCreateOrConnectWithoutQuestionInputObjectZodSchema = makeSchema();

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './QuestionsOnJobsWhereUniqueInput.schema';
import { QuestionsOnJobsUpdateWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUpdateWithoutQuestionInput.schema';
import { QuestionsOnJobsUncheckedUpdateWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUncheckedUpdateWithoutQuestionInput.schema';
import { QuestionsOnJobsCreateWithoutQuestionInputObjectSchema } from './QuestionsOnJobsCreateWithoutQuestionInput.schema';
import { QuestionsOnJobsUncheckedCreateWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUncheckedCreateWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => QuestionsOnJobsUpdateWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedUpdateWithoutQuestionInputObjectSchema)]),
  create: z.union([z.lazy(() => QuestionsOnJobsCreateWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedCreateWithoutQuestionInputObjectSchema)])
}).strict();
export const QuestionsOnJobsUpsertWithWhereUniqueWithoutQuestionInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUpsertWithWhereUniqueWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUpsertWithWhereUniqueWithoutQuestionInput>;
export const QuestionsOnJobsUpsertWithWhereUniqueWithoutQuestionInputObjectZodSchema = makeSchema();

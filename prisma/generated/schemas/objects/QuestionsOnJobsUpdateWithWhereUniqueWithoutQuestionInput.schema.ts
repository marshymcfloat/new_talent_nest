import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './QuestionsOnJobsWhereUniqueInput.schema';
import { QuestionsOnJobsUpdateWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUpdateWithoutQuestionInput.schema';
import { QuestionsOnJobsUncheckedUpdateWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUncheckedUpdateWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => QuestionsOnJobsUpdateWithoutQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedUpdateWithoutQuestionInputObjectSchema)])
}).strict();
export const QuestionsOnJobsUpdateWithWhereUniqueWithoutQuestionInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUpdateWithWhereUniqueWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUpdateWithWhereUniqueWithoutQuestionInput>;
export const QuestionsOnJobsUpdateWithWhereUniqueWithoutQuestionInputObjectZodSchema = makeSchema();

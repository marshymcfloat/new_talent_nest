import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsScalarWhereInputObjectSchema } from './QuestionsOnJobsScalarWhereInput.schema';
import { QuestionsOnJobsUpdateManyMutationInputObjectSchema } from './QuestionsOnJobsUpdateManyMutationInput.schema';
import { QuestionsOnJobsUncheckedUpdateManyWithoutQuestionInputObjectSchema } from './QuestionsOnJobsUncheckedUpdateManyWithoutQuestionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionsOnJobsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => QuestionsOnJobsUpdateManyMutationInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedUpdateManyWithoutQuestionInputObjectSchema)])
}).strict();
export const QuestionsOnJobsUpdateManyWithWhereWithoutQuestionInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUpdateManyWithWhereWithoutQuestionInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUpdateManyWithWhereWithoutQuestionInput>;
export const QuestionsOnJobsUpdateManyWithWhereWithoutQuestionInputObjectZodSchema = makeSchema();

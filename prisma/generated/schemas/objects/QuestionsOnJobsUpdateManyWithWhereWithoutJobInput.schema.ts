import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsScalarWhereInputObjectSchema } from './QuestionsOnJobsScalarWhereInput.schema';
import { QuestionsOnJobsUpdateManyMutationInputObjectSchema } from './QuestionsOnJobsUpdateManyMutationInput.schema';
import { QuestionsOnJobsUncheckedUpdateManyWithoutJobInputObjectSchema } from './QuestionsOnJobsUncheckedUpdateManyWithoutJobInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionsOnJobsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => QuestionsOnJobsUpdateManyMutationInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedUpdateManyWithoutJobInputObjectSchema)])
}).strict();
export const QuestionsOnJobsUpdateManyWithWhereWithoutJobInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUpdateManyWithWhereWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUpdateManyWithWhereWithoutJobInput>;
export const QuestionsOnJobsUpdateManyWithWhereWithoutJobInputObjectZodSchema = makeSchema();

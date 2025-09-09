import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './QuestionsOnJobsWhereUniqueInput.schema';
import { QuestionsOnJobsUpdateWithoutJobInputObjectSchema } from './QuestionsOnJobsUpdateWithoutJobInput.schema';
import { QuestionsOnJobsUncheckedUpdateWithoutJobInputObjectSchema } from './QuestionsOnJobsUncheckedUpdateWithoutJobInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => QuestionsOnJobsUpdateWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedUpdateWithoutJobInputObjectSchema)])
}).strict();
export const QuestionsOnJobsUpdateWithWhereUniqueWithoutJobInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUpdateWithWhereUniqueWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUpdateWithWhereUniqueWithoutJobInput>;
export const QuestionsOnJobsUpdateWithWhereUniqueWithoutJobInputObjectZodSchema = makeSchema();

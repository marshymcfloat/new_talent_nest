import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './QuestionsOnJobsWhereUniqueInput.schema';
import { QuestionsOnJobsUpdateWithoutJobInputObjectSchema } from './QuestionsOnJobsUpdateWithoutJobInput.schema';
import { QuestionsOnJobsUncheckedUpdateWithoutJobInputObjectSchema } from './QuestionsOnJobsUncheckedUpdateWithoutJobInput.schema';
import { QuestionsOnJobsCreateWithoutJobInputObjectSchema } from './QuestionsOnJobsCreateWithoutJobInput.schema';
import { QuestionsOnJobsUncheckedCreateWithoutJobInputObjectSchema } from './QuestionsOnJobsUncheckedCreateWithoutJobInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => QuestionsOnJobsUpdateWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedUpdateWithoutJobInputObjectSchema)]),
  create: z.union([z.lazy(() => QuestionsOnJobsCreateWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedCreateWithoutJobInputObjectSchema)])
}).strict();
export const QuestionsOnJobsUpsertWithWhereUniqueWithoutJobInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsUpsertWithWhereUniqueWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsUpsertWithWhereUniqueWithoutJobInput>;
export const QuestionsOnJobsUpsertWithWhereUniqueWithoutJobInputObjectZodSchema = makeSchema();

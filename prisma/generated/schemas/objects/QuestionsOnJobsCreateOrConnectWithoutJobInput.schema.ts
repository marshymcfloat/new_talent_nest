import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsWhereUniqueInputObjectSchema } from './QuestionsOnJobsWhereUniqueInput.schema';
import { QuestionsOnJobsCreateWithoutJobInputObjectSchema } from './QuestionsOnJobsCreateWithoutJobInput.schema';
import { QuestionsOnJobsUncheckedCreateWithoutJobInputObjectSchema } from './QuestionsOnJobsUncheckedCreateWithoutJobInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => QuestionsOnJobsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => QuestionsOnJobsCreateWithoutJobInputObjectSchema), z.lazy(() => QuestionsOnJobsUncheckedCreateWithoutJobInputObjectSchema)])
}).strict();
export const QuestionsOnJobsCreateOrConnectWithoutJobInputObjectSchema: z.ZodType<Prisma.QuestionsOnJobsCreateOrConnectWithoutJobInput> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsCreateOrConnectWithoutJobInput>;
export const QuestionsOnJobsCreateOrConnectWithoutJobInputObjectZodSchema = makeSchema();

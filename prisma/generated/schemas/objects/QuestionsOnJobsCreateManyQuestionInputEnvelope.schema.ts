import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsCreateManyQuestionInputObjectSchema } from './QuestionsOnJobsCreateManyQuestionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => QuestionsOnJobsCreateManyQuestionInputObjectSchema), z.lazy(() => QuestionsOnJobsCreateManyQuestionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const QuestionsOnJobsCreateManyQuestionInputEnvelopeObjectSchema: z.ZodType<Prisma.QuestionsOnJobsCreateManyQuestionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsCreateManyQuestionInputEnvelope>;
export const QuestionsOnJobsCreateManyQuestionInputEnvelopeObjectZodSchema = makeSchema();

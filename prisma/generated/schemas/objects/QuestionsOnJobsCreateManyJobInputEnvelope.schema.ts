import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { QuestionsOnJobsCreateManyJobInputObjectSchema } from './QuestionsOnJobsCreateManyJobInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => QuestionsOnJobsCreateManyJobInputObjectSchema), z.lazy(() => QuestionsOnJobsCreateManyJobInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const QuestionsOnJobsCreateManyJobInputEnvelopeObjectSchema: z.ZodType<Prisma.QuestionsOnJobsCreateManyJobInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.QuestionsOnJobsCreateManyJobInputEnvelope>;
export const QuestionsOnJobsCreateManyJobInputEnvelopeObjectZodSchema = makeSchema();

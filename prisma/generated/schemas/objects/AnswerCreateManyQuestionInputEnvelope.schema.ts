import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerCreateManyQuestionInputObjectSchema } from './AnswerCreateManyQuestionInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AnswerCreateManyQuestionInputObjectSchema), z.lazy(() => AnswerCreateManyQuestionInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AnswerCreateManyQuestionInputEnvelopeObjectSchema: z.ZodType<Prisma.AnswerCreateManyQuestionInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AnswerCreateManyQuestionInputEnvelope>;
export const AnswerCreateManyQuestionInputEnvelopeObjectZodSchema = makeSchema();

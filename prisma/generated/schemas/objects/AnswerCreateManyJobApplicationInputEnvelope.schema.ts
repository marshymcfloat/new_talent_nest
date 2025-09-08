import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerCreateManyJobApplicationInputObjectSchema } from './AnswerCreateManyJobApplicationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AnswerCreateManyJobApplicationInputObjectSchema), z.lazy(() => AnswerCreateManyJobApplicationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AnswerCreateManyJobApplicationInputEnvelopeObjectSchema: z.ZodType<Prisma.AnswerCreateManyJobApplicationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AnswerCreateManyJobApplicationInputEnvelope>;
export const AnswerCreateManyJobApplicationInputEnvelopeObjectZodSchema = makeSchema();

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EmployerQuestionCreateManyJobInputObjectSchema } from './EmployerQuestionCreateManyJobInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EmployerQuestionCreateManyJobInputObjectSchema), z.lazy(() => EmployerQuestionCreateManyJobInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EmployerQuestionCreateManyJobInputEnvelopeObjectSchema: z.ZodType<Prisma.EmployerQuestionCreateManyJobInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionCreateManyJobInputEnvelope>;
export const EmployerQuestionCreateManyJobInputEnvelopeObjectZodSchema = makeSchema();

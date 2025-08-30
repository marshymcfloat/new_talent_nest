import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CareerHistoryCreateManyUserInputObjectSchema } from './CareerHistoryCreateManyUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  data: z.union([z.lazy(() => CareerHistoryCreateManyUserInputObjectSchema), z.lazy(() => CareerHistoryCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CareerHistoryCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.CareerHistoryCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryCreateManyUserInputEnvelope>;
export const CareerHistoryCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();

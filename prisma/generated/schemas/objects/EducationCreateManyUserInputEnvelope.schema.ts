import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EducationCreateManyUserInputObjectSchema } from './EducationCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => EducationCreateManyUserInputObjectSchema), z.lazy(() => EducationCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const EducationCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.EducationCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.EducationCreateManyUserInputEnvelope>;
export const EducationCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();

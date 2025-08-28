import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeCreateManyUserInputObjectSchema } from './ResumeCreateManyUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  data: z.union([z.lazy(() => ResumeCreateManyUserInputObjectSchema), z.lazy(() => ResumeCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ResumeCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ResumeCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ResumeCreateManyUserInputEnvelope>;
export const ResumeCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();

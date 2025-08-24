import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateManyUserInputObjectSchema } from './JobApplicationCreateManyUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  data: z.union([z.lazy(() => JobApplicationCreateManyUserInputObjectSchema), z.lazy(() => JobApplicationCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const JobApplicationCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.JobApplicationCreateManyUserInputEnvelope> = makeSchema();
export const JobApplicationCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();

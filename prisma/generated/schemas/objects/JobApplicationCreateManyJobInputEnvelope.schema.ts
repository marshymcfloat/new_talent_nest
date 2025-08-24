import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateManyJobInputObjectSchema } from './JobApplicationCreateManyJobInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  data: z.union([z.lazy(() => JobApplicationCreateManyJobInputObjectSchema), z.lazy(() => JobApplicationCreateManyJobInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const JobApplicationCreateManyJobInputEnvelopeObjectSchema: z.ZodType<Prisma.JobApplicationCreateManyJobInputEnvelope> = makeSchema();
export const JobApplicationCreateManyJobInputEnvelopeObjectZodSchema = makeSchema();

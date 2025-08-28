import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobApplicationCreateManyResumeInputObjectSchema } from './JobApplicationCreateManyResumeInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  data: z.union([z.lazy(() => JobApplicationCreateManyResumeInputObjectSchema), z.lazy(() => JobApplicationCreateManyResumeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const JobApplicationCreateManyResumeInputEnvelopeObjectSchema: z.ZodType<Prisma.JobApplicationCreateManyResumeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.JobApplicationCreateManyResumeInputEnvelope>;
export const JobApplicationCreateManyResumeInputEnvelopeObjectZodSchema = makeSchema();

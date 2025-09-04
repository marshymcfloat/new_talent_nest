import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobCreateManyCompanyInputObjectSchema } from './JobCreateManyCompanyInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  data: z.union([z.lazy(() => JobCreateManyCompanyInputObjectSchema), z.lazy(() => JobCreateManyCompanyInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const JobCreateManyCompanyInputEnvelopeObjectSchema: z.ZodType<Prisma.JobCreateManyCompanyInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.JobCreateManyCompanyInputEnvelope>;
export const JobCreateManyCompanyInputEnvelopeObjectZodSchema = makeSchema();

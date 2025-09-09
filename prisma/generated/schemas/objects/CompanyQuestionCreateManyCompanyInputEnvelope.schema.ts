import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyQuestionCreateManyCompanyInputObjectSchema } from './CompanyQuestionCreateManyCompanyInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CompanyQuestionCreateManyCompanyInputObjectSchema), z.lazy(() => CompanyQuestionCreateManyCompanyInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CompanyQuestionCreateManyCompanyInputEnvelopeObjectSchema: z.ZodType<Prisma.CompanyQuestionCreateManyCompanyInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CompanyQuestionCreateManyCompanyInputEnvelope>;
export const CompanyQuestionCreateManyCompanyInputEnvelopeObjectZodSchema = makeSchema();

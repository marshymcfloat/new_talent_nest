import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberCreateManyCompanyInputObjectSchema } from './CompanyMemberCreateManyCompanyInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CompanyMemberCreateManyCompanyInputObjectSchema), z.lazy(() => CompanyMemberCreateManyCompanyInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CompanyMemberCreateManyCompanyInputEnvelopeObjectSchema: z.ZodType<Prisma.CompanyMemberCreateManyCompanyInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberCreateManyCompanyInputEnvelope>;
export const CompanyMemberCreateManyCompanyInputEnvelopeObjectZodSchema = makeSchema();

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateverifiedDomainsInputObjectSchema } from './CompanyCreateverifiedDomainsInput.schema';
import { CompanyQuestionCreateNestedManyWithoutCompanyInputObjectSchema } from './CompanyQuestionCreateNestedManyWithoutCompanyInput.schema';
import { CompanyMemberCreateNestedManyWithoutCompanyInputObjectSchema } from './CompanyMemberCreateNestedManyWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  websiteUrl: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  verifiedDomains: z.union([z.lazy(() => CompanyCreateverifiedDomainsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  questions: z.lazy(() => CompanyQuestionCreateNestedManyWithoutCompanyInputObjectSchema).optional(),
  members: z.lazy(() => CompanyMemberCreateNestedManyWithoutCompanyInputObjectSchema).optional()
}).strict();
export const CompanyCreateWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyCreateWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateWithoutJobsInput>;
export const CompanyCreateWithoutJobsInputObjectZodSchema = makeSchema();

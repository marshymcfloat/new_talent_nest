import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateverifiedDomainsInputObjectSchema } from './CompanyCreateverifiedDomainsInput.schema';
import { JobCreateNestedManyWithoutCompanyInputObjectSchema } from './JobCreateNestedManyWithoutCompanyInput.schema';
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
  jobs: z.lazy(() => JobCreateNestedManyWithoutCompanyInputObjectSchema),
  questions: z.lazy(() => CompanyQuestionCreateNestedManyWithoutCompanyInputObjectSchema),
  members: z.lazy(() => CompanyMemberCreateNestedManyWithoutCompanyInputObjectSchema)
}).strict();
export const CompanyCreateInputObjectSchema: z.ZodType<Prisma.CompanyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateInput>;
export const CompanyCreateInputObjectZodSchema = makeSchema();

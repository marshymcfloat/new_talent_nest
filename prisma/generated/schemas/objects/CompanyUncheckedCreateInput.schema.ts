import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateverifiedDomainsInputObjectSchema } from './CompanyCreateverifiedDomainsInput.schema';
import { JobUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './JobUncheckedCreateNestedManyWithoutCompanyInput.schema';
import { CompanyMemberUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './CompanyMemberUncheckedCreateNestedManyWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  websiteUrl: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  verifiedDomains: z.union([z.lazy(() => CompanyCreateverifiedDomainsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  jobs: z.lazy(() => JobUncheckedCreateNestedManyWithoutCompanyInputObjectSchema),
  members: z.lazy(() => CompanyMemberUncheckedCreateNestedManyWithoutCompanyInputObjectSchema)
}).strict();
export const CompanyUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CompanyUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUncheckedCreateInput>;
export const CompanyUncheckedCreateInputObjectZodSchema = makeSchema();

import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateverifiedDomainsInputObjectSchema } from './CompanyCreateverifiedDomainsInput.schema';
import { JobUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './JobUncheckedCreateNestedManyWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  websiteUrl: z.string().optional().nullable(),
  logoUrl: z.string().optional().nullable(),
  verifiedDomains: z.union([z.lazy(() => CompanyCreateverifiedDomainsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobs: z.lazy(() => JobUncheckedCreateNestedManyWithoutCompanyInputObjectSchema).optional()
}).strict();
export const CompanyUncheckedCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUncheckedCreateWithoutMembersInput>;
export const CompanyUncheckedCreateWithoutMembersInputObjectZodSchema = makeSchema();

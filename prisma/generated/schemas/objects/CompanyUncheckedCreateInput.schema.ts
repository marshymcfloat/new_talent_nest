import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateverifiedDomainsInputObjectSchema } from './CompanyCreateverifiedDomainsInput.schema';
import { JobUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './JobUncheckedCreateNestedManyWithoutCompanyInput.schema';
import { CompanyMemberUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './CompanyMemberUncheckedCreateNestedManyWithoutCompanyInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().nullish(),
  websiteUrl: z.string().nullish(),
  logoUrl: z.string().nullish(),
  verifiedDomains: z.union([z.lazy(() => CompanyCreateverifiedDomainsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  jobs: z.lazy(() => JobUncheckedCreateNestedManyWithoutCompanyInputObjectSchema).optional(),
  members: z.lazy(() => CompanyMemberUncheckedCreateNestedManyWithoutCompanyInputObjectSchema).optional()
}).strict();
export const CompanyUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CompanyUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUncheckedCreateInput>;
export const CompanyUncheckedCreateInputObjectZodSchema = makeSchema();

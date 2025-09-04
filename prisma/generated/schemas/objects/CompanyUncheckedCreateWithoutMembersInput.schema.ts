import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateverifiedDomainsInputObjectSchema } from './CompanyCreateverifiedDomainsInput.schema';
import { JobUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './JobUncheckedCreateNestedManyWithoutCompanyInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().nullish(),
  websiteUrl: z.string().nullish(),
  logoUrl: z.string().nullish(),
  verifiedDomains: z.union([z.lazy(() => CompanyCreateverifiedDomainsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  jobs: z.lazy(() => JobUncheckedCreateNestedManyWithoutCompanyInputObjectSchema).optional()
}).strict();
export const CompanyUncheckedCreateWithoutMembersInputObjectSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUncheckedCreateWithoutMembersInput>;
export const CompanyUncheckedCreateWithoutMembersInputObjectZodSchema = makeSchema();
